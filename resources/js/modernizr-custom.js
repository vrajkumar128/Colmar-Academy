/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssgradients-setclasses !*/
!function(e,n,t){function s(e,n){return typeof e===n}function o(){var e,n,t,o,a,i,l;for(var c in f)if(f.hasOwnProperty(c)){if(e=[],n=f[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=s(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),r.push((o?"":"no-")+l.join("-"))}}function a(e){var n=c.className,t=Modernizr._config.classPrefix||"";if(u&&(n=n.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(s,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),u?c.className.baseVal=n:c.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var r=[],f=[],l={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){f.push({name:e,fn:n,options:t})},addAsyncTest:function(e){f.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var c=n.documentElement,u="svg"===c.nodeName.toLowerCase(),g=l._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];l._prefixes=g,Modernizr.addTest("cssgradients",function(){for(var e,n="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",s="",o=0,a=g.length-1;a>o;o++)e=0===o?"to ":"",s+=n+g[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(s+=n+"-webkit-"+t);var r=i("a"),f=r.style;return f.cssText=s,(""+f.backgroundImage).indexOf("gradient")>-1}),o(),a(r),delete l.addTest,delete l.addAsyncTest;for(var d=0;d<Modernizr._q.length;d++)Modernizr._q[d]();e.Modernizr=Modernizr}(window,document);