(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{692:function(e,t,n){"use strict";n.r(t);n(3),n(4),n(2),n(7),n(6);var r=n(1),o=n(0),i=n.n(o),c=n(702),a=(n(59),n(86),n(28),n(37),n(32),n(14),n(128),n(16),n(47)),u=n(5),s=n(704),l=n(705),f=n.n(l),p=n(48),d=n.n(p),b=(n(161),n(38)),h=n(82),y=n(154),v=39,m=37,O=32,g=80,j=79,w=71,T=27,x=33,A=34,S=function(e){return function(t){return t.mode===e?{mode:h.a.normal}:{mode:e}}},C=["input","select","textarea","a","button"],_=function(){var e=Object(b.a)();Object(o.useEffect)(function(){var t=function(t){var n=t.metaKey,r=t.ctrlKey,o=t.shiftKey,i=t.altKey;if(!n&&!r){var c=document.activeElement.tagName.toLowerCase();if(!C.includes(c))if(o)switch(t.keyCode){case O:Object(y.b)(e);break;case g:e.setState(S(h.a.print)),Object(a.navigate)(e.slug+"/print")}else if(i)switch(t.keyCode){case g:e.setState(S(h.a.presenter));break;case j:e.setState(S(h.a.overview));break;case w:e.setState(S(h.a.grid))}else switch(t.keyCode){case v:case A:case O:Object(y.a)(e);break;case m:case x:Object(y.b)(e);break;case T:e.setState({mode:h.a.normal})}}};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}},[e])},E="mdx-deck-slide",k="mdx-deck-step",P=function(){var e=Object(b.a)(),t=Object(o.useState)(!1),n=t[0],r=t[1],i=function(){return r(!0)},c=function(){return r(!1)},u=function(t){var n=parseInt(t.newValue,10);if(!isNaN(n))switch(t.key){case E:Object(a.navigate)([e.slug,n].join("/"));break;case k:e.setState({step:n})}};Object(o.useEffect)(function(){r(document.hasFocus())},[]),Object(o.useEffect)(function(){return n||window.addEventListener("storage",u),window.addEventListener("focus",i),window.addEventListener("blur",c),function(){n||window.removeEventListener("storage",u),window.removeEventListener("focus",i),window.removeEventListener("blur",c)}},[n]),Object(o.useEffect)(function(){n&&(localStorage.setItem(E,e.index),localStorage.setItem(k,e.step))},[n,e.index,e.step])},L=n(83);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var R=function(e){return i.a.createElement(o.Fragment,null,e.children)},N=function(e){var t=Object(o.useState)("100vh"),n=t[0],r=t[1],i=Object(b.a)(),c=i.mode,a=i.theme;Object(o.useEffect)(function(){r(window.innerHeight);var e=function(e){r(window.innerHeight)},t=function(e){c===h.a.normal&&e.preventDefault()};return window.addEventListener("resize",e),document.body.addEventListener("touchstart",t),function(){window.removeEventListener("resize",e),document.body.removeEventListener("touchstart",t)}},[c]);var s=a.Provider,l=void 0===s?R:s;return Object(u.c)(l,null,Object(u.c)("div",I({},e,{sx:{width:"100vw",height:c!==h.a.print?n:"100vh",variant:"styles.root","*":{boxSizing:"border-box"}}})))},D=n(102),F=n(101),M=n(162),H=n(163),z=function(e){var t=Object(b.a)(),n=t.index,r=t.length;return Object(u.c)(i.a.Fragment,null,Object(u.c)("div",null,n," / ",r-1),Object(u.c)("div",{sx:{mx:4}},Object(u.c)("a",{href:a.globalHistory.location.href,rel:"noopener noreferrer",target:"_blank",sx:{color:"inherit",textDecoration:"none"}},"Open in New Window ↗︎")),Object(u.c)("div",{sx:{mx:"auto"}}),Object(u.c)("div",{sx:{display:"flex",alignItems:"center",mx:4}},Object(u.c)(H.a,null)),Object(u.c)("div",null,Object(u.c)(M.a,null)))},q=function(e){var t=e.slides,n=e.children,r=Object(b.a)(),o=t[r.index+1],c=!!r.notes&&i.a.Children.toArray(r.notes);return Object(u.c)("div",{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(u.c)("div",{sx:{display:"flex",flex:"1 1 auto",height:"60vh"}},Object(u.c)("div",{sx:{width:"75%",p:3}},Object(u.c)(F.a,{zoom:.75},n)),Object(u.c)("div",{sx:{width:"25%",p:3}},Object(u.c)(F.a,{ratio:4/3,zoom:.25},Object(u.c)(D.a,{slide:o,preview:!0})),c&&Object(u.c)("div",{sx:{my:3}},c))),Object(u.c)("div",{sx:{height:96,p:3,display:"flex",alignItems:"center",fontSize:1,fontWeight:"bold",fontVariantNumeric:"tabular-nums"}},Object(u.c)(z,null)))};function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var K=function(){},B=function(e){var t=e.slides,n=void 0===t?[]:t,r=e.ratio,c=void 0===r?16/9:r,a=e.zoom,s=void 0===a?.25:a,l=e.onClick,f=void 0===l?K:l,p=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["slides","ratio","zoom","onClick"]),d=Object(b.a)().index,h=Object(o.useRef)(null);return Object(o.useEffect)(function(){var e=h.current;e&&"function"==typeof e.scrollIntoViewIfNeeded&&e.scrollIntoViewIfNeeded()}),Object(u.c)(i.a.Fragment,null,n.map(function(e,t){return Object(u.c)("div",Y({},p,{key:t,role:"link",ref:t===d?h:null,onClick:function(e){f(t)},style:d===t?{position:"relative",zIndex:1}:null,sx:{m:2,cursor:"pointer",outline:d===t?"4px solid cyan":null}}),Object(u.c)(F.a,{zoom:s,ratio:c},Object(u.c)(D.a,{slide:e,preview:!0})))}))},$=function(e){var t=e.slides,n=e.children,r=Object(b.a)(),o=r.slug,i=r.index,c=r.length;return Object(u.c)("div",{sx:{display:"flex",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(u.c)("div",{sx:{width:100/6+"%",minWidth:0,flex:"none",height:"100vh",overflowY:"auto",WebkitOverflowScrolling:"touch",p:2}},Object(u.c)(B,{slides:t,zoom:1/6,onClick:function(e){Object(a.navigate)([o,e].join("/"))}})),Object(u.c)("div",{sx:{width:500/6+"%",py:3,pr:3,display:"flex",flexDirection:"column",height:"100vh"}},Object(u.c)("div",{sx:{flex:"1 1 auto"}},Object(u.c)(F.a,{zoom:5/6},n)),Object(u.c)("div",{sx:{py:3}},i," / ",c-1)))},W=function(e){var t=e.slides,n=Object(b.a)(),r=n.slug,o=n.setState;return Object(u.c)("div",{sx:{minHeight:"100vh",color:"white",bg:"black"}},Object(u.c)("div",{sx:{display:"flex",flexWrap:"wrap"}},Object(u.c)(B,{slides:t,onClick:function(e){Object(a.navigate)([r,e].join("/")),o({mode:h.a.normal})},sx:{width:"25%",m:0}})))};function V(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function X(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach(function(t){G(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=function(){return _(),!1},Z=function(){return P(),!1},ee=function(e){var t=e.slides,n=J({},Object(b.a)(),{mode:h.a.print});return Object(r.d)(L.a.Provider,{value:n},t.map(function(e,t){return Object(r.d)(D.a,{key:t,slide:e,preview:!0})}))},te=function(e){var t=e.theme;return!!t.googleFont&&Object(r.d)(s.Helmet,null,Object(r.d)("link",{rel:"stylesheet",href:t.googleFont}))},ne=function(e){var t,n,o=e.slides,c=void 0===o?[]:o,l=e.pageContext,p=l.title,y=l.slug,v=e.theme,m=void 0===v?{}:v,O=e.themes,g=void 0===O?[]:O,j=(X(e,["slides","pageContext","theme","themes"]),Object(b.a)()),w=(t=a.globalHistory.location.pathname.split("/"),n=Number(t[t.length-1]),isNaN(n)?0:n),T=c.head.children,x=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return"function"==typeof t?t(e):d()(e,t)},{})}.apply(void 0,[m].concat(V(g))),A=x.components,S=X(x,["components"]),C=J({},j,{slug:y,length:c.length,index:w,steps:f()(j,"metadata."+w+".steps"),notes:f()(j,"metadata."+w+".notes"),theme:S}),_=function(e){var t=e.children;return Object(r.d)(i.a.Fragment,{children:t})};switch(C.mode){case h.a.presenter:_=q;break;case h.a.overview:_=$;break;case h.a.grid:_=W}return Object(r.d)(i.a.Fragment,null,Object(r.d)(s.Helmet,null,Object(r.d)("title",null,p),T),Object(r.d)(te,{theme:S}),Object(r.d)(L.a.Provider,{value:C},Object(r.d)(u.b,{components:A,theme:S},Object(r.d)(r.a,{styles:{body:{margin:0,overflow:C.mode===h.a.normal?"hidden":null}}}),Object(r.d)(Q,null),Object(r.d)(Z,null),Object(r.d)(N,null,Object(r.d)(_,{slides:c},Object(r.d)(a.Router,{basepath:y,style:{height:"100%"}},Object(r.d)(D.a,{index:0,path:"/",slide:c[0]}),c.map(function(e,t){return Object(r.d)(D.a,{key:t,index:t,path:t+"/*",slide:e})}),Object(r.d)(ee,{path:"/print",slides:c})))))))},re=n(211);function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"pageQuery",function(){return ie});var ie="2133597988",ce={wrapper:function(e){var t=Object(re.a)(e);return Object(r.d)(ne,oe({},e,{slides:t}))}};t.default=function(e){var t=e.data.deck,n=(t.id,t.body),o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["data"]);return Object(r.d)(function(e){return Object(r.d)(c.MDXRenderer,oe({},e,{children:n}))},oe({},o,{components:ce}))}},700:function(e,t,n){var r=n(10),o=n(73),i=n(60),c=n(25),a=n(23),u=n(24),s=n(236),l=(n(15).Reflect||{}).construct,f=u(function(){function e(){}return!(l(function(){},[],e)instanceof e)}),p=!u(function(){l(function(){})});r(r.S+r.F*(f||p),"Reflect",{construct:function(e,t){i(e),c(t);var n=arguments.length<3?e:i(arguments[2]);if(p&&!f)return l(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(s.apply(e,r))}var u=n.prototype,d=o(a(u)?u:Object.prototype),b=Function.apply.call(e,d,t);return a(b)?b:d}})},702:function(e,t,n){var r=n(703);e.exports={MDXRenderer:r}},703:function(e,t,n){function r(e,t,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&o(i,n.prototype),i}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(32),n(4),n(7),n(59),n(86),n(37),n(14),n(3),n(100),n(28),n(2),n(700),n(700),n(100),n(59),n(86),n(28),n(37),n(32),n(14),n(3),n(4),n(2),n(7);var s=n(0),l=n(96),f=l.useMDXComponents,p=l.mdx,d=n(187).useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,c=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),u=f(n),l=d(t),b=s.useMemo(function(){if(!o)return null;var e=a({React:s,mdx:p},l),t=Object.keys(e),n=t.map(function(t){return e[t]});return r(Function,["_fn"].concat(i(t),[""+o])).apply(void 0,[{}].concat(i(n)))},[o,t]);return s.createElement(b,a({components:u},c))}},704:function(e,t,n){"use strict";(function(e){function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n(16),n(8),n(100),n(6),n(37),n(14),n(3),n(4),n(2),n(7),Object.defineProperty(t,"__esModule",{value:!0});var o,i,c,a,u=r(n(21)),s=r(n(237)),l=r(n(238)),f=r(n(0)),p=r(n(127)),d="bodyAttributes",b="htmlAttributes",h="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(y).map(function(e){return y[e]}),"charset"),m="cssText",O="href",g="http-equiv",j="innerHTML",w="itemprop",T="name",x="property",A="rel",S="src",C={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",E="defer",k="encodeSpecialCharacters",P="onChangeClientState",L="titleTemplate",I=Object.keys(C).reduce(function(e,t){return e[C[t]]=t,e},{}),R=[y.NOSCRIPT,y.SCRIPT,y.STYLE],N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=V(e,y.TITLE),n=V(e,L);if(n&&t)return n.replace(/%s/g,function(){return Array.isArray(t)?t.join(""):t});var r=V(e,_);return t||r||void 0},K=function(e){return V(e,P)||function(){}},B=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return M({},e,t)},{})},$=function(e,t){return t.filter(function(e){return void 0!==e[y.BASE]}).map(function(e){return e[y.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t},[])},W=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Q("Helmet: "+e+' should be of type "Array". Instead found type "'+N(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),c=0;c<i.length;c++){var a=i[c],u=a.toLowerCase();-1===t.indexOf(u)||n===A&&"canonical"===e[n].toLowerCase()||u===A&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(a)||a!==j&&a!==m&&a!==w||(n=a)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),c=0;c<i.length;c++){var a=i[c],u=p({},r[a],o[a]);r[a]=u}return e},[]).reverse()},V=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(o=Date.now(),function(e){var t=Date.now();t-o>16?(o=t,e(t)):setTimeout(function(){X(e)},0)}),U=function(e){return clearTimeout(e)},J="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,G="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||U:e.cancelAnimationFrame||U,Q=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Z=null,ee=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,c=e.metaTags,a=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;re(y.BODY,r),re(y.HTML,o),ne(f,p);var d={baseTag:oe(y.BASE,n),linkTags:oe(y.LINK,i),metaTags:oe(y.META,c),noscriptTags:oe(y.NOSCRIPT,a),scriptTags:oe(y.SCRIPT,s),styleTags:oe(y.STYLE,l)},b={},h={};Object.keys(d).forEach(function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(b[e]=n),r.length&&(h[e]=d[e].oldTags)}),t&&t(),u(e,b,h)},te=function(e){return Array.isArray(e)?e.join(""):e},ne=function(e,t){void 0!==e&&document.title!==e&&(document.title=te(e)),re(y.TITLE,t)},re=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),c=Object.keys(t),a=0;a<c.length;a++){var u=c[a],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==c.join(",")&&n.setAttribute("data-react-helmet",c.join(","))}},oe=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],c=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===m)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[r]?"":t[r];n.setAttribute(r,a)}n.setAttribute("data-react-helmet","true"),o.some(function(e,t){return c=t,n.isEqualNode(e)})?o.splice(c,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},ie=function(e){return Object.keys(e).reduce(function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[C[n]||n]=e[n],t},t)},ae=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=ce(n,r),[f.createElement(y.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ie(n),i=te(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+q(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case d:case b:return{toComponent:function(){return ce(t)},toString:function(){return ie(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach(function(e){var n=C[e]||e;if(n===j||n===m){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),f.createElement(e,o)})}(e,t)},toString:function(){return function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===j||e===m)}).reduce(function(e,t){var o=void 0===r[t]?t:t+'="'+q(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",c=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(c?"/>":">"+i+"</"+e+">")},"")}(e,t,n)}}}},ue=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,c=e.metaTags,a=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:ae(y.BASE,t,r),bodyAttributes:ae(d,n,r),htmlAttributes:ae(b,o,r),link:ae(y.LINK,i,r),meta:ae(y.META,c,r),noscript:ae(y.NOSCRIPT,a,r),script:ae(y.SCRIPT,u,r),style:ae(y.STYLE,s,r),title:ae(y.TITLE,{title:f,titleAttributes:p},r)}},se=s(function(e){return{baseTag:$([O],e),bodyAttributes:B(d,e),defer:V(e,E),encode:V(e,k),htmlAttributes:B(b,e),linkTags:W(y.LINK,[A,O],e),metaTags:W(y.META,[T,v,g,x,w],e),noscriptTags:W(y.NOSCRIPT,[j],e),onChangeClientState:K(e),scriptTags:W(y.SCRIPT,[S,j],e),styleTags:W(y.STYLE,[m],e),title:Y(e),titleAttributes:B(h,e)}},function(e){Z&&G(Z),e.defer?Z=J(function(){ee(e,function(){Z=null})}):(ee(e),Z=null)},ue)(function(){return null}),le=(i=se,a=c=function(e){function t(){return D(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!l(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return M({},r,((t={})[n.type]=[].concat(r[n.type]||[],[M({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(r.type){case y.TITLE:return M({},o,((t={})[r.type]=c,t.titleAttributes=M({},i),t));case y.BODY:return M({},o,{bodyAttributes:M({},i)});case y.HTML:return M({},o,{htmlAttributes:M({},i)})}return M({},o,((n={})[r.type]=M({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=M({},t);return Object.keys(e).forEach(function(t){var r;n=M({},n,((r={})[t]=e[t],r))}),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[I[n]||n]=e[n],t},t)}(H(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=H(e,["children"]),r=M({},n);return t&&(r=this.mapChildrenToProps(t,r)),f.createElement(i,r)},F(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(f.Component),c.propTypes={base:u.object,bodyAttributes:u.object,children:u.oneOfType([u.arrayOf(u.node),u.node]),defaultTitle:u.string,defer:u.bool,encodeSpecialCharacters:u.bool,htmlAttributes:u.object,link:u.arrayOf(u.object),meta:u.arrayOf(u.object),noscript:u.arrayOf(u.object),onChangeClientState:u.func,script:u.arrayOf(u.object),style:u.arrayOf(u.object),title:u.string,titleAttributes:u.object,titleTemplate:u.string},c.defaultProps={defer:!0,encodeSpecialCharacters:!0},c.peek=i.peek,c.rewind=function(){var e=i.rewind();return e||(e=ue({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);le.renderStatic=le.rewind,t.Helmet=le}).call(this,n(85))},705:function(e,t,n){(function(t){n(20),n(12),n(8),n(9),n(3),n(4),n(28),n(39),n(2);var r="Expected a function",o="__lodash_hash_undefined__",i=1/0,c="[object Function]",a="[object GeneratorFunction]",u="[object Symbol]",s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,l=/^\w*$/,f=/^\./,p=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,d=/\\(\\)?/g,b=/^\[object .+?Constructor\]$/,h="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,v=h||y||Function("return this")();var m,O=Array.prototype,g=Function.prototype,j=Object.prototype,w=v["__core-js_shared__"],T=(m=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||""))?"Symbol(src)_1."+m:"",x=g.toString,A=j.hasOwnProperty,S=j.toString,C=RegExp("^"+x.call(A).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_=v.Symbol,E=O.splice,k=q(v,"Map"),P=q(Object,"create"),L=_?_.prototype:void 0,I=L?L.toString:void 0;function R(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function N(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function D(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function F(e,t){for(var n,r,o=e.length;o--;)if((n=e[o][0])===(r=t)||n!=n&&r!=r)return o;return-1}function M(e,t){for(var n,r=0,o=(t=function(e,t){if($(e))return!1;var n=typeof e;if("number"==n||"symbol"==n||"boolean"==n||null==e||V(e))return!0;return l.test(e)||!s.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:$(n=t)?n:Y(n)).length;null!=e&&r<o;)e=e[K(t[r++])];return r&&r==o?e:void 0}function H(e){return!(!W(e)||(t=e,T&&T in t))&&(function(e){var t=W(e)?S.call(e):"";return t==c||t==a}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?C:b).test(function(e){if(null!=e){try{return x.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e));var t}function z(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function q(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return H(n)?n:void 0}R.prototype.clear=function(){this.__data__=P?P(null):{}},R.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},R.prototype.get=function(e){var t=this.__data__;if(P){var n=t[e];return n===o?void 0:n}return A.call(t,e)?t[e]:void 0},R.prototype.has=function(e){var t=this.__data__;return P?void 0!==t[e]:A.call(t,e)},R.prototype.set=function(e,t){return this.__data__[e]=P&&void 0===t?o:t,this},N.prototype.clear=function(){this.__data__=[]},N.prototype.delete=function(e){var t=this.__data__,n=F(t,e);return!(n<0||(n==t.length-1?t.pop():E.call(t,n,1),0))},N.prototype.get=function(e){var t=this.__data__,n=F(t,e);return n<0?void 0:t[n][1]},N.prototype.has=function(e){return F(this.__data__,e)>-1},N.prototype.set=function(e,t){var n=this.__data__,r=F(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},D.prototype.clear=function(){this.__data__={hash:new R,map:new(k||N),string:new R}},D.prototype.delete=function(e){return z(this,e).delete(e)},D.prototype.get=function(e){return z(this,e).get(e)},D.prototype.has=function(e){return z(this,e).has(e)},D.prototype.set=function(e,t){return z(this,e).set(e,t),this};var Y=B(function(e){var t;e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(V(e))return I?I.call(e):"";var t=e+"";return"0"==t&&1/e==-i?"-0":t}(t);var n=[];return f.test(e)&&n.push(""),e.replace(p,function(e,t,r,o){n.push(r?o.replace(d,"$1"):t||e)}),n});function K(e){if("string"==typeof e||V(e))return e;var t=e+"";return"0"==t&&1/e==-i?"-0":t}function B(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError(r);var n=function n(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var c=e.apply(this,r);return n.cache=i.set(o,c),c};return n.cache=new(B.Cache||D),n}B.Cache=D;var $=Array.isArray;function W(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function V(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&S.call(e)==u}e.exports=function(e,t,n){var r=null==e?void 0:M(e,t);return void 0===r?n:r}}).call(this,n(85))}}]);
//# sourceMappingURL=10-da612c249bb06594998d.js.map