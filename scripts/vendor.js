var Zepto=function(){function t(t){return null==t?String(t):V[X.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function a(t){return P.call(t,function(t){return null!=t})}function u(t){return t.length>0?S.fn.concat.apply([],t):t}function l(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function c(t){return t in z?z[t]:z[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||L[l(t)]?e:e+"px"}function h(t){var e,n;return k[t]||(e=N.createElement(t),N.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),k[t]=n),k[t]}function p(t){return"children"in t?O.call(t.children):S.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(E in e)n&&(o(e[E])||Y(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),Y(e[E])&&!Y(t[E])&&(t[E]=[]),d(t[E],e[E],n)):e[E]!==b&&(t[E]=e[E])}function m(t,e){return null==e?S(t):S(t).filter(e)}function g(t,n,r,i){return e(n)?n.call(t,r,i):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function v(t,e){var n=t.className||"",r=n&&n.baseVal!==b;return e===b?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function w(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?S.parseJSON(t):t):t}catch(e){return t}}function x(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)x(t.childNodes[n],e)}var b,E,S,T,A,C,j=[],O=j.slice,P=j.filter,N=window.document,k={},z={},L={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},R=/^\s*<(\w+|!)[^>]*>/,H=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,q=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,D=/^(?:body|html)$/i,W=/([A-Z])/g,_=["val","css","html","text","data","width","height","offset"],F=["after","prepend","before","append"],Z=N.createElement("table"),$=N.createElement("tr"),M={tr:N.createElement("tbody"),tbody:Z,thead:Z,tfoot:Z,td:$,th:$,"*":N.createElement("div")},B=/complete|loaded|interactive/,I=/^[\w-]*$/,V={},X=V.toString,U={},J=N.createElement("div"),Q={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(t){return t instanceof Array};return U.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=J).appendChild(t),r=~U.qsa(i,e).indexOf(t),o&&J.removeChild(t),r},A=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return P.call(t,function(e,n){return t.indexOf(e)==n})},U.fragment=function(t,e,n){var r,i,s;return H.test(t)&&(r=S(N.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(q,"<$1></$2>")),e===b&&(e=R.test(t)&&RegExp.$1),e in M||(e="*"),s=M[e],s.innerHTML=""+t,r=S.each(O.call(s.childNodes),function(){s.removeChild(this)})),o(n)&&(i=S(r),S.each(n,function(t,e){_.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},U.Z=function(t,e){return t=t||[],t.__proto__=S.fn,t.selector=e||"",t},U.isZ=function(t){return t instanceof U.Z},U.init=function(t,n){var r;if(!t)return U.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&R.test(t))r=U.fragment(t,RegExp.$1,n),t=null;else{if(n!==b)return S(n).find(t);r=U.qsa(N,t)}else{if(e(t))return S(N).ready(t);if(U.isZ(t))return t;if(Y(t))r=a(t);else if(i(t))r=[t],t=null;else if(R.test(t))r=U.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==b)return S(n).find(t);r=U.qsa(N,t)}}return U.Z(r,t)},S=function(t,e){return U.init(t,e)},S.extend=function(t){var e,n=O.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},U.qsa=function(t,e){var n,i="#"==e[0],o=!i&&"."==e[0],s=i||o?e.slice(1):e,a=I.test(s);return r(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:O.call(a&&!i?o?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},S.contains=N.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},S.type=t,S.isFunction=e,S.isWindow=n,S.isArray=Y,S.isPlainObject=o,S.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},S.inArray=function(t,e,n){return j.indexOf.call(e,t,n)},S.camelCase=A,S.trim=function(t){return null==t?"":String.prototype.trim.call(t)},S.uuid=0,S.support={},S.expr={},S.map=function(t,e){var n,r,i,o=[];if(s(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return u(o)},S.each=function(t,e){var n,r;if(s(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},S.grep=function(t,e){return P.call(t,e)},window.JSON&&(S.parseJSON=JSON.parse),S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),S.fn={forEach:j.forEach,reduce:j.reduce,push:j.push,sort:j.sort,indexOf:j.indexOf,concat:j.concat,map:function(t){return S(S.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return S(O.apply(this,arguments))},ready:function(t){return B.test(N.readyState)&&N.body?t(S):N.addEventListener("DOMContentLoaded",function(){t(S)},!1),this},get:function(t){return t===b?O.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return j.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):S(P.call(this,function(e){return U.matches(e,t)}))},add:function(t,e){return S(C(this.concat(S(t,e))))},is:function(t){return this.length>0&&U.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==b)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):s(t)&&e(t.item)?O.call(t):S(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return S(n)},has:function(t){return this.filter(function(){return i(t)?S.contains(this,t):S(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:S(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:S(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?S(t).filter(function(){var t=this;return j.some.call(n,function(e){return S.contains(e,t)})}):1==this.length?S(U.qsa(this[0],t)):this.map(function(){return U.qsa(this,t)}):S()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=S(t));n&&!(i?i.indexOf(n)>=0:U.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return S(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=S.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(C(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return O.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return P.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return S.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=S(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){S(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){S(this[0]).before(t=S(t));for(var e;(e=t.children()).length;)t=e.first();S(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=S(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){S(this).replaceWith(S(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=S(this);(t===b?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return S(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return S(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;S(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(E in t)y(this,E,t[E]);else y(this,t,g(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:b},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,e){return t=Q[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(W,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?w(r):b},val:function(t){return 0 in arguments?this.each(function(e){this.value=g(this,t,e,this.value)}):this[0]&&(this[0].multiple?S(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=S(this),r=g(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r,i=this[0];if(!i)return;if(r=getComputedStyle(i,""),"string"==typeof e)return i.style[A(e)]||r.getPropertyValue(e);if(Y(e)){var o={};return S.each(e,function(t,e){o[e]=i.style[A(e)]||r.getPropertyValue(e)}),o}}var s="";if("string"==t(e))n||0===n?s=l(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(l(e))});else for(E in e)e[E]||0===e[E]?s+=l(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(l(E))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(S(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?j.some.call(this,function(t){return this.test(v(t))},c(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){T=[];var n=v(this),r=g(this,t,e,n);r.split(/\s+/g).forEach(function(t){S(this).hasClass(t)||T.push(t)},this),T.length&&v(this,n+(n?" ":"")+T.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===b)return v(this,"");T=v(this),g(this,t,e,T).split(/\s+/g).forEach(function(t){T=T.replace(c(t)," ")}),v(this,T.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=S(this),i=g(this,t,n,v(this));i.split(/\s+/g).forEach(function(t){(e===b?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===b?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===b?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=D.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(S(t).css("margin-top"))||0,n.left-=parseFloat(S(t).css("margin-left"))||0,r.top+=parseFloat(S(e[0]).css("border-top-width"))||0,r.left+=parseFloat(S(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||N.body;t&&!D.test(t.nodeName)&&"static"==S(t).css("position");)t=t.offsetParent;return t})}},S.fn.detach=S.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});S.fn[t]=function(i){var o,s=this[0];return i===b?n(s)?s["inner"+e]:r(s)?s.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){s=S(this),s.css(t,g(this,i,e,s[t]()))})}}),F.forEach(function(e,n){var r=n%2;S.fn[e]=function(){var e,i,o=S.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:U.fragment(n)}),s=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var a=S.contains(N.documentElement,i);o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!i)return S(t).remove();i.insertBefore(t,e),a&&x(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},S.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return S(t)[e](this),this}}),U.Z.prototype=S.fn,U.uniq=C,U.deserializeValue=w,S.zepto=U,S}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,s){if(n=r(n),n.ns)var a=i(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!a.test(t.ns)||o&&e(t.fn)!==e(o)||s&&t.sel!=s)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!v&&t.e in w||!!e}function s(t){return x[t]||v&&w[t]||t}function a(n,i,a,u,c,h,p){var d=e(n),m=g[d]||(g[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(a);var i=r(e);i.fn=a,i.sel=c,i.e in x&&(a=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}),i.del=h;var d=h||a;i.proxy=function(t){if(t=l(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(s(i.e),i.proxy,o(i,p))})}function u(t,r,i,a,u){var l=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,a).forEach(function(e){delete g[l][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,o(e,u))})})}function l(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(T,function(t,r){var i=n[t];e[t]=function(){return this[r]=b,i&&i.apply(n,arguments)},e[r]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function c(t){var e,n={originalEvent:t};for(e in t)S.test(e)||t[e]===f||(n[e]=t[e]);return l(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},y={},v="onfocusin"in window,w={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};y.click=y.mousedown=y.mouseup=y.mousemove="MouseEvents",t.event={add:a,remove:u},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},S=/^([A-Z]|returnValue$|layer[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var s,l,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||i===!1||(i=r,r=n,n=f),(d(r)||r===!1)&&(i=r,r=f),i===!1&&(i=E),h.each(function(f,h){o&&(s=function(t){return u(h,t.type,i),i.apply(this,arguments)}),n&&(l=function(e){var r,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(r=t.extend(c(e),{currentTarget:o,liveFired:h}),(s||i).apply(o,[r].concat(p.call(arguments,1)))):void 0}),a(h,e,i,r,n,l||s)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=E),i.each(function(){u(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):l(e),e._args=n,this.each(function(){e.type in w&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(s,a){i=c(m(e)?t.Event(e):e),i._args=r,i.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(y[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),l(n)}}(Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||v,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,r,"ajaxSend",[t,e])}function s(t,e,r,i){var o=r.context,s="success";r.success.call(o,t,s,e),i&&i.resolveWith(o,[t,s,e]),n(r,o,"ajaxSuccess",[e,r,t]),u(s,e,r)}function a(t,e,r,i,o){var s=i.context;i.error.call(s,r,e,t),o&&o.rejectWith(s,[r,e,t]),n(i,s,"ajaxError",[r,i,t||e]),u(e,r,i)}function u(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function l(){}function c(t){return t&&(t=t.split(";",2)[0]),t&&(t==S?"html":t==E?"json":x.test(t)?"script":b.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function d(e,n,r,i){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?e.add(u.name,u.value):"array"==o||!r&&"object"==o?d(e,u,r,n):e.add(n,u)})}var m,g,y=0,v=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,b=/^(?:text|application)\/xml/i,E="application/json",S="text/html",T=/^\s*$/,A=v.createElement("a");A.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,u=e.jsonpCallback,l=(t.isFunction(u)?u():u)||"jsonp"+ ++y,c=v.createElement("script"),f=window[l],h=function(e){t(c).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(c).on("load error",function(o,u){clearTimeout(i),t(c).off().remove(),"error"!=o.type&&r?s(r[0],p,e,n):a(null,u||"error",p,e,n),window[l]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),o(p,e)===!1?(h("abort"),p):(window[l]=function(){r=arguments},c.src=e.url.replace(/\?(.+)=\?/,"?$1="+l),v.head.appendChild(c),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:l,success:l,error:l,complete:l,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:S,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,i=t.extend({},e||{}),u=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===i[m]&&(i[m]=t.ajaxSettings[m]);r(i),i.crossDomain||(n=v.createElement("a"),n.href=i.url,n.href=n.href,i.crossDomain=A.protocol+"//"+A.host!=n.protocol+"//"+n.host),i.url||(i.url=window.location.toString()),h(i);var p=i.dataType,d=/\?.+=\?/.test(i.url);if(d&&(p="jsonp"),i.cache!==!1&&(e&&e.cache===!0||"script"!=p&&"jsonp"!=p)||(i.url=f(i.url,"_="+Date.now())),"jsonp"==p)return d||(i.url=f(i.url,i.jsonp?i.jsonp+"=?":i.jsonp===!1?"":"callback=?")),t.ajaxJSONP(i,u);var y,w=i.accepts[p],x={},b=function(t,e){x[t.toLowerCase()]=[t,e]},E=/^([\w-]+:)\/\//.test(i.url)?RegExp.$1:window.location.protocol,S=i.xhr(),C=S.setRequestHeader;if(u&&u.promise(S),i.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",w||"*/*"),(w=i.mimeType||w)&&(w.indexOf(",")>-1&&(w=w.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(w)),(i.contentType||i.contentType!==!1&&i.data&&"GET"!=i.type.toUpperCase())&&b("Content-Type",i.contentType||"application/x-www-form-urlencoded"),i.headers)for(g in i.headers)b(g,i.headers[g]);if(S.setRequestHeader=b,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=l,clearTimeout(y);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==E){p=p||c(i.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==p?(1,eval)(e):"xml"==p?e=S.responseXML:"json"==p&&(e=T.test(e)?null:t.parseJSON(e))}catch(r){n=r}n?a(n,"parsererror",S,i,u):s(e,S,i,u)}else a(S.statusText||null,S.status?"error":"abort",S,i,u)}},o(S,i)===!1)return S.abort(),a(null,"abort",S,i,u),S;if(i.xhrFields)for(g in i.xhrFields)S[g]=i.xhrFields[g];var j="async"in i?i.async:!0;S.open(i.type,i.url,j,i.username,i.password);for(g in x)C.apply(S,x[g]);return i.timeout>0&&(y=setTimeout(function(){S.onreadystatechange=l,S.abort(),a(null,"timeout",S,i,u)},i.timeout)),S.send(i.data?i.data:null),S},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,s=e.split(/\s/),a=p(e,n,r),u=a.success;return s.length>1&&(a.url=s[0],i=s[1]),a.success=function(e){o.html(i?t("<div>").html(e.replace(w,"")).find(i):e),u&&u.apply(o,arguments)},t.ajax(a),this};var C=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(C(e)+"="+C(n))},d(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),!function(){"use strict";function t(r){if(!r)throw new Error("No options passed to Waypoint constructor");if(!r.element)throw new Error("No element option passed to Waypoint constructor");if(!r.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,r),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=r.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),n[this.key]=this,e+=1}var e=0,n={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete n[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var r in n)e.push(n[r]);for(var i=0,o=e.length;o>i;i++)e[i][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=i.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+n,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,r[t.waypointContextKey]=this,n+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var n=0,r={},i=window.Waypoint,o=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete r[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,i.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||i.isTouch)&&(e.didScroll=!0,i.requestAnimationFrame(t))})},e.prototype.handleResize=function(){i.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var n in e){var r=e[n],i=r.newScroll>r.oldScroll,o=i?r.forward:r.backward;for(var s in this.waypoints[n]){var a=this.waypoints[n][s],u=r.oldScroll<a.triggerPoint,l=r.newScroll>=a.triggerPoint,c=u&&l,f=!u&&!l;(c||f)&&(a.queueTrigger(o),t[a.group.id]=a.group)}}for(var h in t)t[h].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?i.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?i.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var n in this.waypoints[e])t.push(this.waypoints[e][n]);for(var r=0,i=t.length;i>r;r++)t[r].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,n=e?void 0:this.adapter.offset(),r={};this.handleScroll(),t={horizontal:{contextOffset:e?0:n.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:n.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var o in t){var s=t[o];for(var a in this.waypoints[o]){var u,l,c,f,h,p=this.waypoints[o][a],d=p.options.offset,m=p.triggerPoint,g=0,y=null==m;p.element!==p.element.window&&(g=p.adapter.offset()[s.offsetProp]),"function"==typeof d?d=d.apply(p):"string"==typeof d&&(d=parseFloat(d),p.options.offset.indexOf("%")>-1&&(d=Math.ceil(s.contextDimension*d/100))),u=s.contextScroll-s.contextOffset,p.triggerPoint=g+u-d,l=m<s.oldScroll,c=p.triggerPoint>=s.oldScroll,f=l&&c,h=!l&&!c,!y&&f?(p.queueTrigger(s.backward),r[p.group.id]=p.group):!y&&h?(p.queueTrigger(s.forward),r[p.group.id]=p.group):y&&s.oldScroll>=p.triggerPoint&&(p.queueTrigger(s.forward),r[p.group.id]=p.group)}}return i.requestAnimationFrame(function(){for(var t in r)r[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in r)r[t].refresh()},e.findByElement=function(t){return r[t.waypointContextKey]},window.onload=function(){o&&o(),e.refreshAll()},i.requestAnimationFrame=function(e){var n=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;n.call(window,e)},i.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function n(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),r[this.axis][this.name]=this}var r={vertical:{},horizontal:{}},i=window.Waypoint;n.prototype.add=function(t){this.waypoints.push(t)},n.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},n.prototype.flushTriggers=function(){for(var n in this.triggerQueues){var r=this.triggerQueues[n],i="up"===n||"left"===n;r.sort(i?e:t);
for(var o=0,s=r.length;s>o;o+=1){var a=r[o];(a.options.continuous||o===r.length-1)&&a.trigger([n])}}this.clearTriggerQueues()},n.prototype.next=function(e){this.waypoints.sort(t);var n=i.Adapter.inArray(e,this.waypoints),r=n===this.waypoints.length-1;return r?null:this.waypoints[n+1]},n.prototype.previous=function(e){this.waypoints.sort(t);var n=i.Adapter.inArray(e,this.waypoints);return n?this.waypoints[n-1]:null},n.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},n.prototype.remove=function(t){var e=i.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},n.prototype.first=function(){return this.waypoints[0]},n.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},n.findOrCreate=function(t){return r[t.axis][t.name]||new n(t)},i.Group=n}(),function(){"use strict";function t(t){return t===t.window}function e(e){return t(e)?e:e.defaultView}function n(t){this.element=t,this.handlers={}}var r=window.Waypoint;n.prototype.innerHeight=function(){var e=t(this.element);return e?this.element.innerHeight:this.element.clientHeight},n.prototype.innerWidth=function(){var e=t(this.element);return e?this.element.innerWidth:this.element.clientWidth},n.prototype.off=function(t,e){function n(t,e,n){for(var r=0,i=e.length-1;i>r;r++){var o=e[r];n&&n!==o||t.removeEventListener(o)}}var r=t.split("."),i=r[0],o=r[1],s=this.element;if(o&&this.handlers[o]&&i)n(s,this.handlers[o][i],e),this.handlers[o][i]=[];else if(i)for(var a in this.handlers)n(s,this.handlers[a][i]||[],e),this.handlers[a][i]=[];else if(o&&this.handlers[o]){for(var u in this.handlers[o])n(s,this.handlers[o][u],e);this.handlers[o]={}}},n.prototype.offset=function(){if(!this.element.ownerDocument)return null;var t=this.element.ownerDocument.documentElement,n=e(this.element.ownerDocument),r={top:0,left:0};return this.element.getBoundingClientRect&&(r=this.element.getBoundingClientRect()),{top:r.top+n.pageYOffset-t.clientTop,left:r.left+n.pageXOffset-t.clientLeft}},n.prototype.on=function(t,e){var n=t.split("."),r=n[0],i=n[1]||"__default",o=this.handlers[i]=this.handlers[i]||{},s=o[r]=o[r]||[];s.push(e),this.element.addEventListener(r,e)},n.prototype.outerHeight=function(e){var n,r=this.innerHeight();return e&&!t(this.element)&&(n=window.getComputedStyle(this.element),r+=parseInt(n.marginTop,10),r+=parseInt(n.marginBottom,10)),r},n.prototype.outerWidth=function(e){var n,r=this.innerWidth();return e&&!t(this.element)&&(n=window.getComputedStyle(this.element),r+=parseInt(n.marginLeft,10),r+=parseInt(n.marginRight,10)),r},n.prototype.scrollLeft=function(){var t=e(this.element);return t?t.pageXOffset:this.element.scrollLeft},n.prototype.scrollTop=function(){var t=e(this.element);return t?t.pageYOffset:this.element.scrollTop},n.extend=function(){function t(t,e){if("object"==typeof t&&"object"==typeof e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}for(var e=Array.prototype.slice.call(arguments),n=1,r=e.length;r>n;n++)t(e[0],e[n]);return e[0]},n.inArray=function(t,e,n){return null==e?-1:e.indexOf(t,n)},n.isEmptyObject=function(t){for(var e in t)return!1;return!0},r.adapters.push({name:"noframework",Adapter:n}),r.Adapter=n}();