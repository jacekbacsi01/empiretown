(self.webpackChunk_npwd_nui=self.webpackChunk_npwd_nui||[]).push([[8891],{21391:function(e,n,t){"use strict";t.r(n),t.d(n,{I18nContext:function(){return S},I18nextProvider:function(){return oe},Trans:function(){return $},Translation:function(){return ie},composeInitialProps:function(){return C},date:function(){return le},getDefaults:function(){return k},getI18n:function(){return D},getInitialProps:function(){return Z},initReactI18next:function(){return R},number:function(){return pe},plural:function(){return ye},select:function(){return de},selectOrdinal:function(){return me},setDefaults:function(){return x},setI18n:function(){return I},time:function(){return fe},useSSR:function(){return ae},useTranslation:function(){return Q},withSSR:function(){return se},withTranslation:function(){return te}});var r=t(93086);function i(e,n){if(null==e)return{};var t,i,o=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var o=t(88483),a=t(54511),c=t(53182),u=t.n(c),s=t(63229),l=t.n(s),f=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function p(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(l()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var i=new RegExp(f),o=null;null!==(o=i.exec(e));)if(o[0].trim())if(o[1]){var a=o[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),n.attrs[c[0]]=c[1],i.lastIndex--}else o[2]&&(n.attrs[o[2]]=o[3].trim().substring(1,o[3].length-1));return n}var d=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,y=/^\s*$/,m=Object.create(null);function g(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(g,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var h={parse:function(e,n){n||(n={}),n.components||(n.components=m);var t,r=[],i=[],o=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(d,(function(c,u){if(a){if(c!=="</"+t.name+">")return;a=!1}var s,l="/"!==c.charAt(1),f=c.startsWith("\x3c!--"),d=u+c.length,m=e.charAt(d);if(f){var g=p(c);return o<0?(r.push(g),r):((s=i[o]).children.push(g),r)}if(l&&(o++,"tag"===(t=p(c)).type&&n.components[t.name]&&(t.type="component",a=!0),t.voidElement||a||!m||"<"===m||t.children.push({type:"text",content:e.slice(d,e.indexOf("<",d))}),0===o&&r.push(t),(s=i[o-1])&&s.children.push(t),i[o]=t),(!l||t.voidElement)&&(o>-1&&(t.voidElement||t.name===c.slice(2,-1))&&(o--,t=-1===o?r:i[o]),!a&&"<"!==m&&m)){s=-1===o?r:i[o].children;var h=e.indexOf("<",d),b=e.slice(d,-1===h?void 0:h);y.test(b)&&(b=" "),(h>-1&&o+s.length>=0||" "!==b)&&s.push({type:"text",content:b})}})),r},stringify:function(e){return e.reduce((function(e,n){return e+g("",n)}),"")}},b=h,v=t(36049),O=t(3001);function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P,E={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},S=u().createContext();function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E=w(w({},E),e)}function k(){return E}var N=function(){function e(){(0,v.Z)(this,e),this.usedNamespaces={}}return(0,O.Z)(e,[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function I(e){P=e}function D(){return P}var R={type:"3rdParty",init:function(e){x(e.options.react),I(e)}};function C(e){return function(n){return new Promise((function(t){var r=Z();e.getInitialProps?e.getInitialProps(n).then((function(e){t(w(w({},e),r))})):t(r)}))}}function Z(){var e=D(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},r={};return e.languages.forEach((function(t){r[t]={},n.forEach((function(n){r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t}function T(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var A={};function z(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&A[n[0]]||("string"==typeof n[0]&&(A[n[0]]=new Date),T.apply(void 0,n))}function L(e,n,t){e.loadNamespaces(n,(function(){e.isInitialized?t():e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}))}function B(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var V=["format"],K=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"];function U(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?U(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function F(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function H(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function _(e){return Array.isArray(e)?e:[e]}function M(e,n){if(!e)return"";var t="",r=_(e),a=n.transKeepBasicHtmlNodesFor||[];return r.forEach((function(e,r){if("string"==typeof e)t+="".concat(e);else if(u().isValidElement(e)){var c=Object.keys(e.props).length,s=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&s&&0===c)t+="<".concat(e.type,"/>");else if(l||s&&0===c)if(e.props.i18nIsDynamicList)t+="<".concat(r,"></").concat(r,">");else if(s&&1===c&&"string"==typeof l)t+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var f=M(l,n);t+="<".concat(r,">").concat(f,"</").concat(r,">")}else t+="<".concat(r,"></").concat(r,">")}else if(null===e)T("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,o.Z)(e)){var p=e.format,d=i(e,V),y=Object.keys(d);if(1===y.length){var m=p?"".concat(y[0],", ").concat(p):y[0];t+="{{".concat(m,"}}")}else T("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else T("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function $(e){var n=e.children,t=e.count,r=e.parent,a=e.i18nKey,s=e.tOptions,l=void 0===s?{}:s,f=e.values,p=e.defaults,d=e.components,y=e.ns,m=e.i18n,g=e.t,h=i(e,K),v=(0,c.useContext)(S)||{},O=v.i18n,j=v.defaultNS,w=m||O||D();if(!w)return z("You will need to pass in an i18next instance by using i18nextReactModule"),n;var P=g||w.t.bind(w)||function(e){return e},E=W(W({},k()),w.options&&w.options.react),x=y||P.ns||j||w.options&&w.options.defaultNS;x="string"==typeof x?[x]:x||["translation"];var N=p||M(n,E)||E.transEmptyNodeValue||a,I=E.hashTransKey,R=a||(I?I(N):N),C=f?l.interpolation:{interpolation:W(W({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},Z=W(W(W(W({},l),{},{count:t},f),C),{},{defaultValue:N,ns:x}),T=function(e,n,t,r,i){if(""===n)return[];var a=r.transKeepBasicHtmlNodesFor||[],c=n&&new RegExp(a.join("|")).test(n);if(!e&&!c)return[n];var s={};!function e(n){_(n).forEach((function(n){"string"!=typeof n&&(F(n)?e(H(n)):"object"!==(0,o.Z)(n)||u().isValidElement(n)||Object.assign(s,n))}))}(e);var l=b.parse("<0>".concat(n,"</0>")),f=W(W({},s),i);function p(e,n,t){var r=H(e),i=y(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return u().isValidElement(e)}))}(r)&&0===i.length?r:i}function d(e,n,t,r,i){e.dummy&&(e.children=n),t.push(u().cloneElement(e,W(W({},e.props),{},{key:r}),i?void 0:n))}function y(n,i,s){var l=_(n);return _(i).reduce((function(n,i,m){var g,h,b,v=i.children&&i.children[0]&&i.children[0].content&&t.services.interpolator.interpolate(i.children[0].content,f,t.language);if("tag"===i.type){var O=l[parseInt(i.name,10)];!O&&1===s.length&&s[0][i.name]&&(O=s[0][i.name]),O||(O={});var j=0!==Object.keys(i.attrs).length?(g={props:i.attrs},(b=W({},h=O)).props=Object.assign(g.props,h.props),b):O,w=u().isValidElement(j),P=w&&F(i,!0)&&!i.voidElement,E=c&&"object"===(0,o.Z)(j)&&j.dummy&&!w,S="object"===(0,o.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,i.name);if("string"==typeof j){var x=t.services.interpolator.interpolate(j,f,t.language);n.push(x)}else if(F(j)||P)d(j,p(j,i,s),n,m);else if(E){var k=y(l,i.children,s);n.push(u().cloneElement(j,W(W({},j.props),{},{key:m}),k))}else if(Number.isNaN(parseFloat(i.name)))if(S)d(j,p(j,i,s),n,m,i.voidElement);else if(r.transSupportBasicHtmlNodes&&a.indexOf(i.name)>-1)if(i.voidElement)n.push(u().createElement(i.name,{key:"".concat(i.name,"-").concat(m)}));else{var N=y(l,i.children,s);n.push(u().createElement(i.name,{key:"".concat(i.name,"-").concat(m)},N))}else if(i.voidElement)n.push("<".concat(i.name," />"));else{var I=y(l,i.children,s);n.push("<".concat(i.name,">").concat(I,"</").concat(i.name,">"))}else if("object"!==(0,o.Z)(j)||w)1===i.children.length&&v?n.push(u().cloneElement(j,W(W({},j.props),{},{key:m}),v)):n.push(u().cloneElement(j,W(W({},j.props),{},{key:m})));else{var D=i.children[0]?v:null;D&&n.push(D)}}else if("text"===i.type){var R=r.transWrapTextNodes,C=t.services.interpolator.interpolate(i.content,f,t.language);R?n.push(u().createElement(R,{key:"".concat(i.name,"-").concat(m)},C)):n.push(C)}return n}),[])}return H(y([{dummy:!0,children:e||[]}],l,_(e||[]))[0])}(d||n,R?P(R,Z):N,w,E,Z),A=void 0!==r?r:E.defaultTransParent;return A?u().createElement(A,h,T):T}var Y=t(23785);function q(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}}(e,n)||(0,Y.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function J(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Q(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,c.useContext)(S)||{},i=r.i18n,o=r.defaultNS,a=t||i||D();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new N),!a){z("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},s=[u,{},!1];return s.t=u,s.i18n={},s.ready=!1,s}a.options.react&&void 0!==a.options.react.wait&&z("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=J(J(J({},k()),a.options.react),n),f=l.useSuspense,p=l.keyPrefix,d=e||o||a.options&&a.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(d);var y=(a.isInitialized||a.initializedStoreOnce)&&d.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return z("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],i=!!n.options&&n.options.fallbackLng,o=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e)||!n.hasResourceBundle(r,e)&&n.services.backendConnector.backend&&(!a(r,e)||i&&!a(o,e)))}(e,a,l)}));function m(){return a.getFixedT(null,"fallback"===l.nsMode?d:d[0],p)}var g=q((0,c.useState)(m),2),h=g[0],b=g[1],v=(0,c.useRef)(!0);(0,c.useEffect)((function(){var e=l.bindI18n,n=l.bindI18nStore;function t(){v.current&&b(m)}return v.current=!0,y||f||L(a,d,(function(){v.current&&b(m)})),e&&a&&a.on(e,t),n&&a&&a.store.on(n,t),function(){v.current=!1,e&&a&&e.split(" ").forEach((function(e){return a.off(e,t)})),n&&a&&n.split(" ").forEach((function(e){return a.store.off(e,t)}))}}),[a,d.join()]);var O=(0,c.useRef)(!0);(0,c.useEffect)((function(){v.current&&!O.current&&b(m),O.current=!1}),[a]);var j=[h,a,y];if(j.t=h,j.i18n=a,j.ready=y,y)return j;if(!y&&!f)return j;throw new Promise((function(e){L(a,d,(function(){e()}))}))}var X=["forwardedRef"];function ee(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ee(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function te(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function r(r){var o=r.forwardedRef,a=i(r,X),c=q(Q(e,a),3),s=c[0],l=c[1],f=c[2],p=ne(ne({},a),{},{t:s,i18n:l,tReady:f});return n.withRef&&o?p.ref=o:!n.withRef&&o&&(p.forwardedRef=o),u().createElement(t,p)}return r.displayName="withI18nextTranslation(".concat(B(t),")"),r.WrappedComponent=t,n.withRef?u().forwardRef((function(e,n){return u().createElement(r,Object.assign({},e,{forwardedRef:n}))})):r}}var re=["ns","children"];function ie(e){var n=e.ns,t=e.children,r=q(Q(n,i(e,re)),3),o=r[0],a=r[1],c=r[2];return t(o,{i18n:a,lng:a.language},c)}function oe(e){var n=e.i18n,t=e.defaultNS,r=e.children,i=(0,c.useMemo)((function(){return{i18n:n,defaultNS:t}}),[n,t]);return(0,c.createElement)(S.Provider,{value:i},r)}function ae(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).i18n,r=((0,c.useContext)(S)||{}).i18n,i=t||r||D();i.options&&i.options.isClone||(e&&!i.initializedStoreOnce&&(i.services.resourceStore.data=e,i.options.ns=Object.values(e).reduce((function(e,n){return Object.keys(n).forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}),i.options.ns),i.initializedStoreOnce=!0,i.isInitialized=!0),n&&!i.initializedLanguageOnce&&(i.changeLanguage(n),i.initializedLanguageOnce=!0))}var ce=["initialI18nStore","initialLanguage"];function ue(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function se(){return function(e){function n(n){var t=n.initialI18nStore,r=n.initialLanguage,o=i(n,ce);return ae(t,r),u().createElement(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ue(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ue(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},o))}return n.getInitialProps=C(e),n.displayName="withI18nextSSR(".concat(B(e),")"),n.WrappedComponent=e,n}}var le=function(){return""},fe=function(){return""},pe=function(){return""},de=function(){return""},ye=function(){return""},me=function(){return""}},63229:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},36049:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,{Z:function(){return r}})},54511:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})},88483:function(e,n,t){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.d(n,{Z:function(){return r}})}}]);