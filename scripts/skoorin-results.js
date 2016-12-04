!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};n(1);var l=n(2),u=n(3),c=n(11),f=n(32),d=r(f),p={loading:function(t,e){switch(e.type){case"FETCH_RESULTS_REQ":return!0;case"FETCH_RESULTS_RES":case"FETCH_RESULTS_ERR":return!1;default:return t}},data:function(t,e){switch(e.type){case"FETCH_RESULTS_RES":return s({},t,{results:e.response});case"FETCH_RESULTS_ERR":console.error("FETCH_RESULTS_ERR",e.error);default:return t}},filters:function(t,e){if("FILTER"!=e.type)return t;var n={};for(var r in t)n[r]="all";return s({},n,e.payload)}},h=function t(e){var n=this;i(this,t),this.getInitialState=function(){var t=JSON.parse(n.results.querySelector(".skoorin-results-data").innerHTML);return{loading:!1,data:t,filters:n.initFilters(t.filters)}},this.initFilters=function(t){var e={};n.filters={};var r=function(t){if("competition"!=t){var r=n.results.querySelector('select[name="'+t+'"]');e[t]=r.value,n.filters[t]=r,r.addEventListener("change",function(e){n.store.dispatch({type:"FILTER",payload:o({},t,e.target.value)})})}};for(var i in t)r(i);return e},this.onStateChange=function(){n.state=n.store.getState(),console.log("this.state:",n.state),n.renderTable();for(var t in n.filters)n.renderFilter(t)},this.renderFilter=function(t){var e="all"==n.state.filters[t]?{selected:!0}:{},r=(0,l.html)("select",{name:t},(0,l.html)("option",s({value:"all"},e),window.skoorinResults.l10n.all[t]),n.state.data.filters[t].map(function(t){return(0,l.html)("option",{value:t.id},t.name)}));n.filters[t]instanceof Element&&(n.filters[t].innerHTML=""),n.filters[t]=(0,u.patch)(n.filters[t],r)},this.renderTable=function(){var t=(0,l.html)("div",{className:"skoorin-results-table","class-loading":n.state.loading},(0,l.html)("div",{className:"skoorin-results-table-container table-scroll table-responsive"},(0,l.html)("table",null,(0,l.html)("colgroup",null,(0,l.html)("col",{width:"0%"}),(0,l.html)("col",{width:"100%"})),(0,l.html)("thead",null,(0,l.html)("tr",null,(0,l.html)("th",{className:"hole",colSpan:"2"},window.skoorinResults.l10n.hole),n.state.data.results.holes.map(function(t,e){return(0,l.html)("th",null,e+1)}),(0,l.html)("th",null,window.skoorinResults.l10n.tot),(0,l.html)("th",null,window.skoorinResults.l10n.to_par)),(0,l.html)("tr",{className:"par"},(0,l.html)("th",{className:"par",colSpan:"2"},window.skoorinResults.l10n.par),n.state.data.results.holes.map(function(t,e){return(0,l.html)("th",null,t)}),(0,l.html)("th",null,n.state.data.results.par_total),(0,l.html)("th",null))),n.filterPlayers().map(function(t,e){return(0,l.html)("tbody",null,(0,l.html)("tr",{key:t.id},(0,l.html)("td",{className:"standing"},e+1),(0,l.html)("td",{className:"player"},(0,l.html)("a",{"on-click":n.toggleResultsExtra,href:"https://skoorin.com/?u=player_stat&player_user_id="+t.id,target:"_blank"},(0,l.html)("i",null)," ",t.name)),t.results.throws.map(function(e,r){return(0,l.html)("td",{className:n.getScoreClass(r,t)},e)}),(0,l.html)("td",{className:"total"},t.results.total),(0,l.html)("td",{className:"balance"},(t.results.to_par>=0?"+":"")+t.results.to_par)),t.results.hasOwnProperty("extra")&&t.results.extra instanceof Array&&t.results.extra.map(function(t){return(0,l.html)("tr",{className:"extra "+t.name},(0,l.html)("td",{colSpan:"2"},window.skoorinResults.l10n.extra[t.name]),t.holes.map(function(e){return(0,l.html)("td",null,n.getExtraNotation(e,t.type))}),(0,l.html)("td",{colSpan:"2"},t.total))}))}))),(0,l.html)("span",{className:"spinner"},(0,l.html)("i",null),(0,l.html)("i",null)));n.table instanceof Element&&(n.table.innerHTML=""),n.table=(0,u.patch)(n.table,t)},this.filterPlayers=function(){var t=function(t){if("all"!=n.state.filters[t])return{v:n.state.data.results.players.filter(function(e){return"player"==t?n.state.filters[t]==e.id:e.hasOwnProperty(t)&&n.state.filters[t]==e[t]})}};for(var e in n.state.filters){var r=t(e);if("object"===("undefined"==typeof r?"undefined":a(r)))return r.v}return n.state.data.results.players},this.getScoreClass=function(t,e){var r=e.results.throws[t],o=n.state.data.results.holes[t],i=e.results.hasOwnProperty("ob")&&e.results.ob[t]?" ob":"";if(1==r)return"hole-in-one";switch(r-o){case-2:return"eagle"+i;case-1:return"birdie"+i;case 0:return"par"+i;case 1:return"bogey"+i;case 2:return"double-bogey"+i;default:return"fail"+i}},this.getExtraNotation=function(t,e){switch(e){case"bool":return t?"✔":"";case"number":default:return t}},this.onCompetitionSelect=function(t){n.store.dispatch({type:"API_REQ",payload:{types:["FETCH_RESULTS_REQ","FETCH_RESULTS_RES","FETCH_RESULTS_ERR"],query:"content=result_json&id="+t}})},this.toggleResultsExtra=function(t){t.preventDefault();for(var e=t.target;"TR"!==e.tagName;)e=e.parentNode;e.classList.contains("expanded")?e.classList.remove("expanded"):e.classList.add("expanded")},this.results=e,this.table=e.querySelector(".skoorin-results-table"),this.store=(0,c.createStore)(function(t,e){return{loading:p.loading(t.loading,e),data:p.data(t.data,e),filters:p.filters(t.filters,e)}},this.getInitialState(),(0,c.applyMiddleware)(d.default)),this.store.subscribe(this.onStateChange),this.onStateChange(),new y(e.querySelector(".skoorin-select-competition"),this.onCompetitionSelect)},y=function t(e,n){var r=this;i(this,t),this.getOverlay=function(){var t=document.querySelector(".skoorin-select-competition-overlay");return t||(t=document.createElement("div"),t.setAttribute("class","skoorin-select-competition-overlay"),document.body.insertBefore(t,null)),t},this.onDocumentClick=function(t){for(var e=t.target;null!==e;){if(r.options===e||r.selected===e)return;e=e.parentNode}r.close()},this.onSelect=function(t){r.close(),r.selected.innerHTML=t.target.innerHTML;var e=!0,n=!1,o=void 0;try{for(var i,a=r.competitions[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var s=i.value;s===t.target?s.classList.add("active"):s.classList.remove("active")}}catch(t){n=!0,o=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw o}}"function"==typeof r.onChange&&r.onChange(t.target.dataset.id)},this.open=function(){return r.isVisible(r.options)?r.close():(r.options.style.display="block",r.position(!0),void optimizedResize.add(r.position))},this.close=function(){r.options.style.display="none",r.overlay.style.display="none",optimizedResize.remove(r.position)},this.position=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];window.innerWidth<=640?(r.overlay.style.display="block",r.options.style.position="fixed",r.options.style.left="auto",r.options.style.top="auto",r.options.style.left=(Math.ceil(window.innerWidth)-r.options.offsetWidth)/2+"px",r.options.style.top=(Math.ceil(window.innerHeight)-r.options.offsetHeight)/2+"px"):(r.overlay.style.display="none",r.options.style.position="absolute",r.options.style.left="",r.options.style.top=""),r.prevWinWidth=window.innerWidth},this.isVisible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},this.select=e,this.onChange=n,this.overlay=this.getOverlay(),this.options=e.querySelector(".options"),this.competitions=this.options.querySelectorAll(".competition"),this.selected=e.querySelector(".selected"),this.selected.addEventListener("click",function(t){return r.open()}),document.addEventListener("mousedown",function(t){return r.onDocumentClick(t)}),document.addEventListener("touchend",function(t){return r.onDocumentClick(t)});var o=!0,a=!1,s=void 0;try{for(var l,u=this.competitions[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var c=l.value;c.addEventListener("click",this.onSelect)}}catch(t){a=!0,s=t}finally{try{!o&&u.return&&u.return()}finally{if(a)throw s}}},v=!0,m=!1,b=void 0;try{for(var g,w=document.querySelectorAll(".skoorin-results")[Symbol.iterator]();!(v=(g=w.next()).done);v=!0){var x=g.value;new h(x)}}catch(t){m=!0,b=t}finally{try{!v&&w.return&&w.return()}finally{if(m)throw b}}},function(t,e){"use strict";window.optimizedResize=function(){function t(){o||(o=!0,window.requestAnimationFrame?window.requestAnimationFrame(e):setTimeout(e,66))}function e(){r.forEach(function(t){t()}),o=!1}function n(t){t&&r.push(t)}var r=[],o=!1;return{add:function(e){r.length||window.addEventListener("resize",t),n(e)},remove:function(e){var n=r.indexOf(e);n<0||(r.splice(n,1),r.length||window.removeEventListener("resize",t))}}}()},function(t,e){"use strict";function n(t){return"string"==typeof t||"number"==typeof t||"boolean"==typeof t||"symbol"==typeof t||null===t||void 0===t}function r(t,e,n,r){function o(t,e,n){var r=i[t]||(i[t]={});r[e]=n}for(var i={ns:e},a=0,s=r.length;a<s;a++){var l=r[a];t[l]&&(i[l]=t[l])}for(var u in t)if("key"!==u&&"classNames"!==u&&"selector"!==u){var c=u.indexOf("-");c>0?o(u.slice(0,c),u.slice(c+1),t[u]):i[u]||o(n,u,t[u])}return i}function o(t,e,o,i,a,s){if(a.selector&&(i+=a.selector),a.classNames){var l=a.classNames;i=i+"."+(Array.isArray(l)?l.join("."):l.replace(/\s+/g,"."))}return{sel:i,data:r(a,t,e,o),children:s.map(function(t){return n(t)?{text:t}:t}),key:a.key}}function i(t,e,n,r,o,i){var a;if("function"==typeof r)a=r(o,i);else if(r&&"function"==typeof r.view)a=r.view(o,i);else{if(!r||"function"!=typeof r.render)throw"JSX tag must be either a string, a function or an object with 'view' or 'render' methods";a=r.render(o,i)}return a.key=o.key,a}function a(t,e,n){for(var r=e,o=t.length;r<o;r++){var i=t[r];Array.isArray(i)?a(i,0,n):n.push(i)}}function s(t){if(t)for(var e=0,n=t.length;e<n;e++)if(Array.isArray(t[e])){var r=t.slice(0,e);a(t,e,r),t=r;break}return t}function l(t,e,n,r,a,l){return a=a||{},l=s(l),"string"==typeof r?o(t,e,n,r,a,l):i(t,e,n,r,a,l)}function u(t,e,n){return function(r,o,i){return(arguments.length>3||!Array.isArray(i))&&(i=d.call(arguments,2)),l(t,e||"props",n||f,r,o,i)}}var c="http://www.w3.org/2000/svg",f=["hook","on","style","class","props","attrs"],d=Array.prototype.slice;t.exports={html:u(void 0),svg:u(c,"attrs"),JSX:u}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.patch=void 0;var o=n(4),i=r(o),a=n(8),s=r(a),l=n(9),u=r(l),c=n(10),f=r(c);e.patch=i.default.init([s.default,u.default,f.default])},function(t,e,n){"use strict";function r(t){return void 0===t}function o(t){return void 0!==t}function i(t,e){return t.key===e.key&&t.sel===e.sel}function a(t,e,n){var r,i,a={};for(r=e;r<=n;++r)i=t[r].key,o(i)&&(a[i]=r);return a}function s(t,e){function n(t){var n=t.id?"#"+t.id:"",r=t.className?"."+t.className.split(" ").join("."):"";return l(e.tagName(t).toLowerCase()+n+r,{},[],void 0,t)}function s(t,n){return function(){if(0===--n){var r=e.parentNode(t);e.removeChild(r,t)}}}function p(t,n){var r,i=t.data;o(i)&&o(r=i.hook)&&o(r=r.init)&&(r(t),i=t.data);var a,s=t.children,l=t.sel;if(o(l)){var c=l.indexOf("#"),d=l.indexOf(".",c),h=c>0?c:l.length,y=d>0?d:l.length,v=c!==-1||d!==-1?l.slice(0,Math.min(h,y)):l;if(a=t.elm=o(i)&&o(r=i.ns)?e.createElementNS(r,v):e.createElement(v),h<y&&(a.id=l.slice(h+1,y)),d>0&&(a.className=l.slice(y+1).replace(/\./g," ")),u.array(s))for(r=0;r<s.length;++r)e.appendChild(a,p(s[r],n));else u.primitive(t.text)&&e.appendChild(a,e.createTextNode(t.text));for(r=0;r<x.create.length;++r)x.create[r](f,t);r=t.data.hook,o(r)&&(r.create&&r.create(f,t),r.insert&&n.push(t))}else a=t.elm=e.createTextNode(t.text);return t.elm}function h(t,n,r,o,i,a){for(;o<=i;++o)e.insertBefore(t,p(r[o],a),n)}function y(t){var e,n,r=t.data;if(o(r)){for(o(e=r.hook)&&o(e=e.destroy)&&e(t),e=0;e<x.destroy.length;++e)x.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)y(t.children[n])}}function v(t,n,r,i){for(;r<=i;++r){var a,l,u,c=n[r];if(o(c))if(o(c.sel)){for(y(c),l=x.remove.length+1,u=s(c.elm,l),a=0;a<x.remove.length;++a)x.remove[a](c,u);o(a=c.data)&&o(a=a.hook)&&o(a=a.remove)?a(c,u):u()}else e.removeChild(t,c.elm)}}function m(t,n,o,s){for(var l,u,c,f,d=0,y=0,m=n.length-1,g=n[0],w=n[m],x=o.length-1,E=o[0],S=o[x];d<=m&&y<=x;)r(g)?g=n[++d]:r(w)?w=n[--m]:i(g,E)?(b(g,E,s),g=n[++d],E=o[++y]):i(w,S)?(b(w,S,s),w=n[--m],S=o[--x]):i(g,S)?(b(g,S,s),e.insertBefore(t,g.elm,e.nextSibling(w.elm)),g=n[++d],S=o[--x]):i(w,E)?(b(w,E,s),e.insertBefore(t,w.elm,g.elm),w=n[--m],E=o[++y]):(r(l)&&(l=a(n,d,m)),u=l[E.key],r(u)?(e.insertBefore(t,p(E,s),g.elm),E=o[++y]):(c=n[u],b(c,E,s),n[u]=void 0,e.insertBefore(t,c.elm,g.elm),E=o[++y]));d>m?(f=r(o[x+1])?null:o[x+1].elm,h(t,f,o,y,x,s)):y>x&&v(t,n,d,m)}function b(t,n,a){var s,l;o(s=n.data)&&o(l=s.hook)&&o(s=l.prepatch)&&s(t,n);var u=n.elm=t.elm,c=t.children,f=n.children;if(t!==n){if(!i(t,n)){var d=e.parentNode(t.elm);return u=p(n,a),e.insertBefore(d,u,t.elm),void v(d,[t],0,0)}if(o(n.data)){for(s=0;s<x.update.length;++s)x.update[s](t,n);s=n.data.hook,o(s)&&o(s=s.update)&&s(t,n)}r(n.text)?o(c)&&o(f)?c!==f&&m(u,c,f,a):o(f)?(o(t.text)&&e.setTextContent(u,""),h(u,null,f,0,f.length-1,a)):o(c)?v(u,c,0,c.length-1):o(t.text)&&e.setTextContent(u,""):t.text!==n.text&&e.setTextContent(u,n.text),o(l)&&o(s=l.postpatch)&&s(t,n)}}var g,w,x={};for(r(e)&&(e=c),g=0;g<d.length;++g)for(x[d[g]]=[],w=0;w<t.length;++w)void 0!==t[w][d[g]]&&x[d[g]].push(t[w][d[g]]);return function(t,o){var a,s,l,u=[];for(a=0;a<x.pre.length;++a)x.pre[a]();for(r(t.sel)&&(t=n(t)),i(t,o)?b(t,o,u):(s=t.elm,l=e.parentNode(s),p(o,u),null!==l&&(e.insertBefore(l,o.elm,e.nextSibling(s)),v(l,[t],0,0))),a=0;a<u.length;++a)u[a].data.hook.insert(u[a]);for(a=0;a<x.post.length;++a)x.post[a]();return o}}var l=n(5),u=n(6),c=n(7),f=l("",{},[],void 0,void 0),d=["create","update","remove","destroy","pre","post"];t.exports={init:s}},function(t,e){t.exports=function(t,e,n,r,o){var i=void 0===e?void 0:e.key;return{sel:t,data:e,children:n,text:r,elm:o,key:i}}},function(t,e){t.exports={array:Array.isArray,primitive:function(t){return"string"==typeof t||"number"==typeof t}}},function(t,e){function n(t){return document.createElement(t)}function r(t,e){return document.createElementNS(t,e)}function o(t){return document.createTextNode(t)}function i(t,e,n){t.insertBefore(e,n)}function a(t,e){t.removeChild(e)}function s(t,e){t.appendChild(e)}function l(t){return t.parentElement}function u(t){return t.nextSibling}function c(t){return t.tagName}function f(t,e){t.textContent=e}t.exports={createElement:n,createElementNS:r,createTextNode:o,appendChild:s,removeChild:a,insertBefore:i,parentNode:l,nextSibling:u,tagName:c,setTextContent:f}},function(t,e){function n(t,e){var n,r,o=e.elm,i=t.data.class,a=e.data.class;if(i||a){i=i||{},a=a||{};for(r in i)a[r]||o.classList.remove(r);for(r in a)n=a[r],n!==i[r]&&o.classList[n?"add":"remove"](r)}}t.exports={create:n,update:n}},function(t,e){function n(t,e){var n,r,o,i=e.elm,a=t.data.props,s=e.data.props;if(a||s){a=a||{},s=s||{};for(n in a)s[n]||delete i[n];for(n in s)r=s[n],o=a[n],o===r||"value"===n&&i[n]===r||(i[n]=r)}}t.exports={create:n,update:n}},function(t,e){function n(t,e,r){if("function"==typeof t)t.call(e,r,e);else if("object"==typeof t)if("function"==typeof t[0])if(2===t.length)t[0].call(e,t[1],r,e);else{var o=t.slice(1);o.push(r),o.push(e),t[0].apply(e,o)}else for(var i=0;i<t.length;i++)n(t[i])}function r(t,e){var r=t.type,o=e.data.on;o&&o[r]&&n(o[r],e,t)}function o(){return function t(e){r(e,t.vnode)}}function i(t,e){var n,r=t.data.on,i=t.listener,a=t.elm,s=e&&e.data.on,l=e&&e.elm;if(r!==s){if(r&&i)if(s)for(n in r)s[n]||a.removeEventListener(n,i,!1);else for(n in r)a.removeEventListener(n,i,!1);if(s){var u=e.listener=t.listener||o();if(u.vnode=e,r)for(n in s)r[n]||l.addEventListener(n,u,!1);else for(n in s)l.addEventListener(n,u,!1)}}}t.exports={create:i,update:i,destroy:i}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.compose=e.applyMiddleware=e.bindActionCreators=e.combineReducers=e.createStore=void 0;var o=n(12),i=r(o),a=n(27),s=r(a),l=n(29),u=r(l),c=n(30),f=r(c),d=n(31),p=r(d),h=n(28);r(h);e.createStore=i.default,e.combineReducers=s.default,e.bindActionCreators=u.default,e.applyMiddleware=f.default,e.compose=p.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){function r(){m===v&&(m=v.slice())}function i(){return y}function s(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var e=!0;return r(),m.push(t),function(){if(e){e=!1,r();var n=m.indexOf(t);m.splice(n,1)}}}function c(t){if(!(0,a.default)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(b)throw new Error("Reducers may not dispatch actions.");try{b=!0,y=h(y,t)}finally{b=!1}for(var e=v=m,n=0;n<e.length;n++)e[n]();return t}function f(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");h=t,c({type:u.INIT})}function d(){var t,e=s;return t={subscribe:function(t){function n(){t.next&&t.next(i())}if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");n();var r=e(n);return{unsubscribe:r}}},t[l.default]=function(){return this},t}var p;if("function"==typeof e&&"undefined"==typeof n&&(n=e,e=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var h=t,y=e,v=[],m=v,b=!1;return c({type:u.INIT}),p={dispatch:c,subscribe:s,getState:i,replaceReducer:f},p[l.default]=d,p}e.__esModule=!0,e.ActionTypes=void 0,e.default=o;var i=n(13),a=r(i),s=n(23),l=r(s),u=e.ActionTypes={INIT:"@@redux/INIT"}},function(t,e,n){function r(t){if(!a(t)||o(t)!=s)return!1;var e=i(t);if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==d}var o=n(14),i=n(20),a=n(22),s="[object Object]",l=Function.prototype,u=Object.prototype,c=l.toString,f=u.hasOwnProperty,d=c.call(Object);t.exports=r},function(t,e,n){function r(t){return null==t?void 0===t?l:s:(t=Object(t),u&&u in t?i(t):a(t))}var o=n(15),i=n(18),a=n(19),s="[object Null]",l="[object Undefined]",u=o?o.toStringTag:void 0;t.exports=r},function(t,e,n){var r=n(16),o=r.Symbol;t.exports=o},function(t,e,n){var r=n(17),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},function(t,e,n){function r(t){var e=a.call(t,l),n=t[l];try{t[l]=void 0;var r=!0}catch(t){}var o=s.call(t);return r&&(e?t[l]=n:delete t[l]),o}var o=n(15),i=Object.prototype,a=i.hasOwnProperty,s=i.toString,l=o?o.toStringTag:void 0;t.exports=r},function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},function(t,e,n){var r=n(21),o=r(Object.getPrototypeOf,Object);t.exports=o},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e,n){t.exports=n(24)},function(t,e,n){(function(t,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i,a=n(26),s=o(a);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof t?t:r;var l=(0,s.default)(i);e.default=l}).call(e,function(){return this}(),n(25)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){"use strict";function n(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n=e&&e.type,r=n&&'"'+n.toString()+'"'||"an action";return"Given action "+r+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function i(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:s.ActionTypes.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+s.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function a(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var a=e[r];"function"==typeof t[a]&&(n[a]=t[a])}var s,l=Object.keys(n);try{i(n)}catch(t){s=t}return function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];if(s)throw s;for(var r=!1,i={},a=0;a<l.length;a++){var u=l[a],c=n[u],f=t[u],d=c(f,e);if("undefined"==typeof d){var p=o(u,e);throw new Error(p)}i[u]=d,r=r||d!==f}return r?i:t}}e.__esModule=!0,e.default=a;var s=n(12),l=n(13),u=(r(l),n(28));r(u)},function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw new Error(t)}catch(t){}}e.__esModule=!0,e.default=n},function(t,e){"use strict";function n(t,e){return function(){return e(t.apply(void 0,arguments))}}function r(t,e){if("function"==typeof t)return n(t,e);if("object"!=typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(t),o={},i=0;i<r.length;i++){var a=r[i],s=t[a];"function"==typeof s&&(o[a]=n(s,e))}return o}e.__esModule=!0,e.default=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(n,r,o){var a=t(n,r,o),l=a.dispatch,u=[],c={getState:a.getState,dispatch:function(t){return l(t)}};return u=e.map(function(t){return t(c)}),l=s.default.apply(void 0,u)(a.dispatch),i({},a,{dispatch:l})}}}e.__esModule=!0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=o;var a=n(31),s=r(a)},function(t,e){"use strict";function n(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};if(1===e.length)return e[0];var r=e[e.length-1],o=e.slice(0,-1);return function(){return o.reduceRight(function(t,e){return e(t)},r.apply(void 0,arguments))}}e.__esModule=!0,e.default=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){t.data="action=skoorin_get_results&"+t.query;var n=window.skoorinResults.ajax_url,r={credentials:"same-origin",method:t.verb||(t.data?"POST":"GET"),headers:{Accept:"application/json"}};return t.data&&(s(r.headers,{"Content-Type":"application/x-www-form-urlencoded"}),r.body=t.data),(0,c.default)(n,r).then(i)}function i(t){return t.ok?t.json():t.json().then(function(e){return a(t,e)},function(){return a(t)})}function a(t,e){throw s({status:t.status,statusText:t.statusText,message:t.statusText},e)}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=n(33),c=r(u);e.default=function(t){return function(e){return function(n){if("API_REQ"!==n.type||!n.payload)return e(n);var r=l(n.payload.types,3),i=r[0],a=r[1],s=r[2];return e({type:i,payload:n.payload}),o(n.payload,t).then(function(t){return e({type:a,payload:n.payload,response:t})},function(t){return e({type:s,payload:n.payload,error:t})})}}}},function(t,e){"use strict";function n(t,e){return new Promise(function(n){e=r({method:"GET",headers:{}},e);var o=new XMLHttpRequest,i=function(){return n({ok:200<=o.status&&o.status<300,status:o.status,statusText:o.statusText,json:function(){return new Promise(function(t,e){try{var n=JSON.parse(o.responseText.trim());t(n)}catch(t){e(t)}})}})};o.open(e.method,t),o.withCredentials=!0,Object.keys(e.headers).forEach(function(t){return o.setRequestHeader(t,e.headers[t])}),o.addEventListener("error",i),o.addEventListener("abort",i),o.upload.addEventListener("error",i),o.upload.addEventListener("abort",i),o.addEventListener("readystatechange",function(){o.readyState===XMLHttpRequest.DONE&&i()}),"function"==typeof e.onUploadProgress&&o.upload.addEventListener("progress",e.onUploadProgress),o.send(e.body)})}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=n}]);
//# sourceMappingURL=skoorin-results.js.map