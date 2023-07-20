local spawnedVehicles = {}

function OpenVehicleSpawnerMenu(type, hospital, part, partNum)
	local playerCoords = GetEntityCoords(PlayerPedId())
	local elements = {
		{unselectable = true, icon = "fas fa-car", title = _U('garage_title')},
		{icon = "fas fa-car", title = _U('garage_storeditem'), action = 'garage'},
		{icon = "fas fa-car", title = _U('garage_storeitem'), action = 'store_garage'},
		{icon = "fas fa-car", title = _U('garage_buyitem'), action = 'buy_vehicle'}
	}
	ESX.OpenContext("right", elements, function(_,element)
		if element.action == "buy_vehicle" then
			local shopElements = {}
			local authorizedVehicles = Config.AuthorizedVehicles[type][ESX.PlayerData.job.grade_name]
			local shopCoords = Config.Hospitals[hospital][part][partNum].InsideShop

			if #authorizedVehicles > 0 then
				for _,vehicle in ipairs(authorizedVehicles) do
					if IsModelInCdimage(vehicle.model) then
						local vehicleLabel = GetLabelText(GetDisplayNameFromVehicleModel(vehicle.model))

						shopElements[#shopElements+1] = {
							icon = 'fas fa-car',
							title = ('%s - <span style="color:green;">%s</span>'):format(vehicleLabel, _U('shop_item', ESX.Math.GroupDigits(vehicle.price))),
							name  = vehicleLabel,
							model = vehicle.model,
							price = vehicle.price,
							props = vehicle.props,
							type  = type
						}
					end
				end

				if #shopElements > 0 then
					OpenShopMenu(shopElements, playerCoords, shopCoords)
				else
					ESX.ShowNotification(_U('garage_notauthorized'))
				end
			else
				ESX.ShowNotification(_U('garage_notauthorized'))
			end
		elseif element.action == "garage" then
			local garage = {
				{unselectable = true, icon = "fas fa-car", title = "Garage"}
			}

			ESX.TriggerServerCallback('esx_vehicleshop:retrieveJobVehicles', function(jobVehicles)
				if #jobVehicles > 0 then
					local allVehicleProps = {}

					for _,v in ipairs(jobVehicles) do
						local props = json.decode(v.vehicle)

						if IsModelInCdimage(props.model) then
							local vehicleName = GetLabelText(GetDisplayNameFromVehicleModel(props.model))
							local label = ('%s - <span style="color:darkgoldenrod;">%s</span>: '):format(vehicleName, props.plate)

							if v.stored then
								label = label .. ('<span style="color:green;">%s</span>'):format(_U('garage_stored'))
							else
								label = label .. ('<span style="color:darkred;">%s</span>'):format(_U('garage_notstored'))
							end

							garage[#garage+1] = {
								icon = 'fas fa-car',
								title = label,
								stored = v.stored,
								model = props.model,
								plate = props.plate
							}

							allVehicleProps[props.plate] = props
						end
					end

					if #garage > 0 then
						ESX.OpenContext("right", garage, function(_,elementG)
							if elementG.stored == 1 then
								local foundSpawn, spawnPoint = GetAvailableVehicleSpawnPoint(hospital, part, partNum)

								if foundSpawn then
									ESX.CloseContext()

									ESX.Game.SpawnVehicle(elementG.model, spawnPoint.coords, spawnPoint.heading, function(vehicle)
										local vehicleProps = allVehicleProps[elementG.plate]
										ESX.Game.SetVehicleProperties(vehicle, vehicleProps)
										TriggerServerEvent('esx_vehicleshop:setJobVehicleState', elementG.plate, false)
										ESX.ShowNotification(_U('garage_released'))
									end)
								end
							else
								ESX.ShowNotification(_U('garage_notavailable'))
							end
						end)
					else
						ESX.ShowNotification(_U('garage_empty'))
					end
				else
					ESX.ShowNotification(_U('garage_empty'))
				end
			end, type)
		elseif element.action == "store_garage" then
			StoreNearbyVehicle(playerCoords)
		end
	end)
end

function StoreNearbyVehicle(playerCoords)
	local vehicles, vehiclePlates = ESX.Game.GetVehiclesInArea(playerCoords, 30.0), {}

	if #vehicles > 0 then
		for _,v in ipairs(vehicles) do

			-- Make sure the vehicle we're saving is empty, or else it wont be deleted
			if GetVehicleNumberOfPassengers(v) == 0 and IsVehicleSeatFree(v, -1) then
				table.insert(vehiclePlates, {
					vehicle = v,
					plate = ESX.Math.Trim(GetVehicleNumberPlateText(v))
				})
			end
		end
	else
		ESX.ShowNotification(_U('garage_store_nearby'))
		return
	end

	ESX.TriggerServerCallback('esx_ambulancejob:storeNearbyVehicle', function(storeSuccess, foundNum)
		if storeSuccess then
			local vehicleId = vehiclePlates[foundNum]
			local attempts = 0
			ESX.Game.DeleteVehicle(vehicleId.vehicle)
			isBusy = true

			CreateThread(function()
				while isBusy do
					Wait(0)
					drawLoadingText(_U('garage_storing'), 255, 255, 255, 255)
				end
			end)

			-- Workaround for vehicle not deleting when other players are near it.
			while DoesEntityExist(vehicleId.vehicle) do
				Wait(500)
				attempts = attempts + 1

				-- Give up
				if attempts > 30 then
					break
				end

				vehicles = ESX.Game.GetVehiclesInArea(playerCoords, 30.0)
				if #vehicles > 0 then
					for _,v in ipairs(vehicles) do
						if ESX.Math.Trim(GetVehicleNumberPlateText(v)) == vehicleId.plate then
							ESX.Game.DeleteVehicle(v)
							break
						end
					end
				end
			end

			isBusy = false
			ESX.ShowNotification(_U('garage_has_stored'))
		else
			ESX.ShowNotification(_U('garage_has_notstored'))
		end
	end, vehiclePlates)
end

function GetAvailableVehicleSpawnPoint(hospital, part, partNum)
	local spawnPoints = Config.Hospitals[hospital][part][partNum].SpawnPoints
	local found, foundSpawnPoint = false, nil

	for i=1, #spawnPoints, 1 do
		if ESX.Game.IsSpawnPointClear(spawnPoints[i].coords, spawnPoints[i].radius) then
			found, foundSpawnPoint = true, spawnPoints[i]
			break
		end
	end

	if found then
		return true, foundSpawnPoint
	else
		ESX.ShowNotification(_U('garage_blocked'))
		return false
	end
end

function OpenShopMenu(elements, restoreCoords, shopCoords)
	local playerPed = PlayerPedId()
	isInShopMenu = true
	ESX.OpenContext("right", elements, function(_,element)
		local elements2 = {
			{unselectable = true, icon = "fas fa-car", title = element.title},
			{icon = "fas fa-eye", title = "View", value = "view"}
		}

		ESX.OpenContext("right", elements2, function(_,element2)
			if element2.value == "view" then
				DeleteSpawnedVehicles()
				WaitForVehicleToLoad(element.model)

				ESX.Game.SpawnLocalVehicle(element.model, shopCoords, 0.0, function(vehicle)
					table.insert(spawnedVehicles, vehicle)
					TaskWarpPedIntoVehicle(playerPed, vehicle, -1)
					FreezeEntityPosition(vehicle, true)
					SetModelAsNoLongerNeeded(element.model)

					if element.props then
						ESX.Game.SetVehicleProperties(vehicle, element.props)
					end
				end)

				local elements3 = {
					{unselectable = true, icon = "fas fa-car", title = element.title},
					{icon = "fas fa-check-double", title = "Buy", value = "buy"},
					{icon = "fas fa-eye", title = "Stop Viewing", value = "stop"}
				}

				ESX.OpenContext("right", elements3, function(_,element3)
					if element3.value == 'stop' then
						isInShopMenu = false
						ESX.CloseContext()

						DeleteSpawnedVehicles()
						FreezeEntityPosition(playerPed, false)
						SetEntityVisible(playerPed, true)

						ESX.Game.Teleport(playerPed, restoreCoords)
					elseif element3.value == "buy" then
						local newPlate = exports['esx_vehicleshop']:GeneratePlate()
						local vehicle  = GetVehiclePedIsIn(playerPed, false)
						local props    = ESX.Game.GetVehicleProperties(vehicle)
						props.plate    = newPlate

						ESX.TriggerServerCallback('esx_ambulancejob:buyJobVehicle', function (bought)
							if bought then
								ESX.ShowNotification(_U('vehicleshop_bought', element.name, ESX.Math.GroupDigits(element.price)))

								isInShopMenu = false
								ESX.CloseContext()
								DeleteSpawnedVehicles()
								FreezeEntityPosition(playerPed, false)
								SetEntityVisible(playerPed, true)

								ESX.Game.Teleport(playerPed, restoreCoords)
							else
								ESX.ShowNotification(_U('vehicleshop_money'))
								ESX.CloseContext()
							end
						end, props, element.type)
					end
				end)
			end
		end)
	end)
end

CreateThread(function()
	while true do
		Wait(0)

		if isInShopMenu then
			DisableControlAction(0, 75, true)  -- Disable exit vehicle
			DisableControlAction(27, 75, true) -- Disable exit vehicle
		else
			Wait(500)
		end
	end
end)

function DeleteSpawnedVehicles()
	while #spawnedVehicles > 0 do
		local vehicle = spawnedVehicles[1]
		ESX.Game.DeleteVehicle(vehicle)
		table.remove(spawnedVehicles, 1)
	end
end

function WaitForVehicleToLoad(modelHash)
	modelHash = (type(modelHash) == 'number' and modelHash or GetHashKey(modelHash))

	if not HasModelLoaded(modelHash) then
		RequestModel(modelHash)

		BeginTextCommandBusyspinnerOn('STRING')
		AddTextComponentSubstringPlayerName(_U('vehicleshop_awaiting_model'))
		EndTextCommandBusyspinnerOn(4)

		while not HasModelLoaded(modelHash) do
			Wait(0)
			DisableAllControlActions(0)
		end

		BusyspinnerOff()
	end
end
