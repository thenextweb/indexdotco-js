!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(1),i=r(o),a=n(2),l=r(a),c=n(3),d=r(c),f=document.createElement("style");f.type="text/css",f.innerHTML=i["default"],(0,l["default"])(function(){window.jQuery(function(){document.body.appendChild(f),(0,d["default"])(["icon","card","list"])})})},function(t,e){t.exports='.idc-card *, .idc-popover, .idc-card, .idc-cardStandalone {\n\tclear: none;\n\tfloat: none;\n\tmargin: 0;\n\tpadding: 0;\n\tbox-shadow: none;\n\tborder: none;\n\ttext-align: inherit;\n\tlist-style: none;\n\ttext-decoration: none;\n\tfont-family: inherit;\n\tbox-sizing: border-box;\n\tcolor: inherit;\n}\n\n.idc-hasIcon {\n\ttext-decoration: none!important;\n\tborder: none!important;\n\tcursor: pointer!important;\n\tbox-shadow:none!important;\n\twidth: 16px;\n\theight: 16px;\n\tbackground: url("https://index.tnwcdn.com/favicon.png") center center no-repeat;\n\tbackground-size: 16px 16px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tmargin-right: .1em;\n\tmargin-right: .2em;\n\tmargin-left: .2em;\n\tposition: relative;\n\ttop: -2px;\n}\n\n.idc-popover {\n\tposition: absolute;\n\tborder-radius: 2px;\n\tbackground-color: #000;\n\tbackground-color: rgba(51, 51, 51, 0.98);\n\tcolor: #fff;\n\ttext-align: center;\n\tline-height: 1.2;\n\tz-index: 99999;\n\twidth: 18em;\n\tpointer-events: none;\n}\n.idc-popover:before {\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tmargin: auto;\n\tmargin-bottom: -5px;\n\twidth: 0;\n\tborder-top: 5px solid #000;\n\tborder-top: 5px solid rgba(51, 51, 51, 0.98);\n\tborder-right: 5px solid transparent;\n\tborder-left: 5px solid transparent;\n\tcontent: " ";\n\tfont-size: 0;\n\tline-height: 0;\n}\n\n.idc-popover.idc-popover--in {\n\tanimation: idc-hovercardFade 100ms forwards ease-in-out;\n}\n\n.idc-popover.idc-popover--out {\n\tanimation: idc-hovercardFade 100ms forwards ease-in-out reverse;\n}\n\n.idc-cardStandalone {\n\tborder: 1px solid rgba(0,0,0,.075);\n\tborder-radius: 2px;\n\twidth: 18em;\n\theight: 17em;\n\tdisplay: inline-block;\n}\n\n.idc-cardStandalone .idc-card {\n\theight: 100%;\n\twidth: 100%;\n}\n\n.idc-card {\n\tfont-family: sans-serif;\n\tcolor: inherit;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.idc-card.idc-card--dark {\n\tbackground-color: #111;\n\tcolor: #fff;\n}\n\n.idc-card-header {\n\theight: 5.7em;\n\tpadding: 1em;\n\tborder-bottom: 1px solid rgba(0,0,0,.075);\n\ttext-align: left;\n\toverflow: hidden;\n\tflex: 0 0 auto;\n}\n\n.idc-card-header-avatar {\n\twidth: 3.8em;\n\theight: 3.8em;\n\tmin-width: 3.8em;\n\tmin-height: 3.8em;\n\tmax-width: 3.8em;\n\tmax-height: 3.8em;\n\n\tborder-radius: 2px;\n\tmargin-right: 1em;\n\tdisplay: block;\n\tfloat: left;\n\tbox-shadow: 0 0 0 1px rgba(0,0,0,.075);\n}\n.idc-card-header-meta {\n\tdisplay: block;\n\tfloat: left;\n}\n.idc-card-header-title {\n\tfont-size: 1em;\n\tfont-weight: bold;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.idc-card-header-tags {\n\tmax-height: 1.2em;\n\tfont-size: .7em;\n\toverflow: hidden;\n\tmargin-top: .33em;\n\twhite-space: nowrap;\n}\n.idc-card-header-tags li {\n\tdisplay: block;\n\tfloat: left;\n\tmargin-right: .25em;\n\theight: 1.2em;\n\tline-height: 1.2em;\n\tfont-style: normal;\n\topacity: .5;\n}\n.idc-card-header-tags li:not(:last-child):after {\n\tcontent:\', \';\n}\n.idc-card-header-tags li:before {\n\tfont-size: .8em;\n}\n\n.idc-card-header:hover .idc-card-header-title {\n\tcolor: #3af;\n}\n\n.idc-card-tagline {\n\tmargin: 1em;\n\tfont-size: 0.9em;\n\tline-height: 1.4em;\n\tmax-height: 8.8em;\n\ttext-align: left;\n\tfont-weight: 300;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n\n.idc-card-expando {\n\tflex: 1 1 0;\n\tdisplay: block;\n}\n\n.idc-card-facts {\n\tfont-size: .7em;\n\tmax-height: 2em;\n\toverflow: hidden;\n\tmargin-left: -.2rem;\n\tmargin-top: .5em;\n}\n\n.idc-card-facts li {\n\tbackground: #3af;\n\tcolor: #fff;\n\tborder-radius: 999999em;\n\topacity: .9;\n\ttext-align: left;\n\tfloat: left;\n\tpadding: .2rem .4rem;\n\tmargin: .1rem;\n\theight: 1.6em;\n\tline-height: 1em;\n}\n\n.idc-card-footer {\n\ttext-transform: uppercase;\n\tfont-size: 0.7em;\n\tpadding: 1em;\n\tborder-top: 1px solid rgba(0,0,0,.075);\n}\n\n.idc-card-footer {\n\ttext-align: left;\n}\n\n.idc-card-footer-blurrable {\n\topacity: .5;\n}\n\n.idc-card-footer-logo {\n\tfont-weight: 800;\n\tcolor: #3af;\n}\n\n@keyframes idc-hovercardFade {\n\t0% {\n\t\ttransform: translateY(1em);\n\t\topacity: 0;\n\t}\n\t100% {\n\t\ttransform: translateY(0);\n\t\topacity: 1;\n\t}\n}\n'},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){if(window.jQuery)t();else{var e=document.createElement("script");e.type="text/javascript",e.readyState?e.onreadystatechange=function(){"loaded"!=e.readyState&&"complete"!=e.readyState||(e.onreadystatechange=null,t())}:e.onload=function(){t()},e.src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js",document.getElementsByTagName("head")[0].appendChild(e)}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},i=n(4),a=r(i),l=n(5),c=r(l),d=n(9),f=r(d),s=n(10),u=r(s),p=n(11),h=r(p),m=n(12),v=r(m),y=new Event(a["default"].prefix+"elementCreated",{bubbles:!0}),g=new Event(a["default"].prefix+"popoverCreated",{bubbles:!0}),b=function(t){var e=(0,u["default"])(t),n=(0,h["default"])(e.entity),r=window.jQuery("<div></div>").addClass(a["default"].prefix+"cardStandalone");t.replaceWith(r),t=r,n.done(function(n){try{var o=new c["default"]({data:n,actionable:!0,dark:t.hasClass(a["default"].prefix+"hasCard--dark")});r.append(o.domElement),t[0].dispatchEvent(y)}catch(i){console.error("[index] error building card for "+e.entity)}})},w=function(t){var e=(0,u["default"])(t),n=(0,v["default"])(e.entity),r=window.jQuery("<div></div>").addClass(a["default"].prefix+"cardStandalone");t.replaceWith(r),n.done(function(t){try{var n=r.clone(),o=!0,i=!1,a=void 0;try{for(var l,d=t[Symbol.iterator]();!(o=(l=d.next()).done);o=!0){var f=l.value,s=new c["default"]({data:f,actionable:!0});r.append(s.domElement);var u=n.clone();r.after(u),r=u}}catch(p){i=!0,a=p}finally{try{!o&&d["return"]&&d["return"]()}finally{if(i)throw a}}r.remove()}catch(h){console.error("[index] error building list for "+e.entity)}})},x=function(t){var e=(0,u["default"])(t),n=(0,h["default"])(e.entity);t.attr("target","_blank").attr({href:e.href+"?utm_source=thenextweb.com&utm_medium=referral&utm_campaign=hover-"+e.entity}),t.on("mouseover",function(r){!t.data(a["default"].prefix+"hasIndexPopover")==!0&&(t.data(a["default"].prefix+"hasIndexPopover",!0),n.done(function(n){try{var r=new c["default"]({data:n}),o=new f["default"]({html:r.domElement,top:t.offset().top,left:t.offset().left+t.outerWidth()/2});o.on("close",function(){t.data(a["default"].prefix+"hasIndexPopover",!1)}),o.place(),t[0].dispatchEvent(y)}catch(i){console.error("[index] error building popover for "+e.entity)}}))}),t.on("mouseout",function(e){"resolved"!==n.state()&&(t.data(a["default"].prefix+"hasIndexPopover",!1),n.abort())}),t[0].dispatchEvent(g),"function"==typeof window.callPhantom&&t.trigger("mouseover")},k=function j(t){if("object"===("undefined"==typeof t?"undefined":o(t)))t.map(function(t){j(t)});else{var e=t;if("icon"===e)window.jQuery("a."+a["default"].prefix+"hasIcon").each(function(){x(window.jQuery(this))});else if("card"===e)window.jQuery("a."+a["default"].prefix+"hasCard").each(function(){b(window.jQuery(this))});else{if("list"!==e)throw"Invalid object type ("+e+")";window.jQuery("a."+a["default"].prefix+"hasList").each(function(){w(window.jQuery(this))})}}};e["default"]=k},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={};n.prefix="idc-",n.cardPrefix=n.prefix+"card-",n.version="0.0.2",n.endpoint="https://index.co/api/",e["default"]=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(4),d=r(c),f=n(6),s=r(f),u=n(7),p=r(u),h=n(8),m=r(h),v=function(t){function e(){return o(this,e),i(this,Object.getPrototypeOf(e).apply(this,arguments))}return a(e,t),l(e,[{key:"makeElement",value:function(t){var e=t.data;if(!e||!e.profile||!e.info)throw"BAD_STRUCTURE";var n=p["default"].render(m["default"],{data:e,config:d["default"],params:t});return n}}]),e}(s["default"]);e["default"]=v},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(4),l=r(a),c=function(){function t(e){if(o(this,t),!e)var e={};this.$element=this.makeElement(e)}return i(t,[{key:"on",value:function(t,e){this.$element.on("internal-"+l["default"].prefix+t,e)}},{key:"trigger",value:function(t,e){this.$element.trigger("internal-"+l["default"].prefix+t,e)}},{key:"makeElement",value:function(t){return window.jQuery("<div></div>")}},{key:"place",value:function(t){t||(t=window.jQuery("body")),t.append(this.domElement)}},{key:"domElement",get:function(){return this.$element}}]),t}();e["default"]=c},function(t,e,n){var r,o,i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(n,l){"object"===a(e)&&e&&"string"!=typeof e.nodeName?l(e):(o=[e],r=l,i="function"==typeof r?r.apply(e,o):r,!(void 0!==i&&(t.exports=i)))}(void 0,function(t){function e(t){return"function"==typeof t}function n(t){return v(t)?"array":"undefined"==typeof t?"undefined":a(t)}function r(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(t,e){return null!=t&&"object"===("undefined"==typeof t?"undefined":a(t))&&e in t}function i(t,e){return y.call(t,e)}function l(t){return!i(g,t)}function c(t){return String(t).replace(/[&<>"'`=\/]/g,function(t){return b[t]})}function d(e,n){function o(){if(y&&!g)for(;m.length;)delete h[m.pop()];else m=[];y=!1,g=!1}function i(t){if("string"==typeof t&&(t=t.split(x,2)),!v(t)||2!==t.length)throw new Error("Invalid tags: "+t);a=new RegExp(r(t[0])+"\\s*"),c=new RegExp("\\s*"+r(t[1])),d=new RegExp("\\s*"+r("}"+t[1]))}if(!e)return[];var a,c,d,p=[],h=[],m=[],y=!1,g=!1;i(n||t.tags);for(var b,_,P,O,S,C,T=new u(e);!T.eos();){if(b=T.pos,P=T.scanUntil(a))for(var M=0,Q=P.length;M<Q;++M)O=P.charAt(M),l(O)?m.push(h.length):g=!0,h.push(["text",O,b,b+1]),b+=1,"\n"===O&&o();if(!T.scan(a))break;if(y=!0,_=T.scan(E)||"name",T.scan(w),"="===_?(P=T.scanUntil(k),T.scan(k),T.scanUntil(c)):"{"===_?(P=T.scanUntil(d),T.scan(j),T.scanUntil(c),_="&"):P=T.scanUntil(c),!T.scan(c))throw new Error("Unclosed tag at "+T.pos);if(S=[_,P,b,T.pos],h.push(S),"#"===_||"^"===_)p.push(S);else if("/"===_){if(C=p.pop(),!C)throw new Error('Unopened section "'+P+'" at '+b);if(C[1]!==P)throw new Error('Unclosed section "'+C[1]+'" at '+b)}else"name"===_||"{"===_||"&"===_?g=!0:"="===_&&i(P)}if(C=p.pop())throw new Error('Unclosed section "'+C[1]+'" at '+T.pos);return s(f(h))}function f(t){for(var e,n,r=[],o=0,i=t.length;o<i;++o)e=t[o],e&&("text"===e[0]&&n&&"text"===n[0]?(n[1]+=e[1],n[3]=e[3]):(r.push(e),n=e));return r}function s(t){for(var e,n,r=[],o=r,i=[],a=0,l=t.length;a<l;++a)switch(e=t[a],e[0]){case"#":case"^":o.push(e),i.push(e),o=e[4]=[];break;case"/":n=i.pop(),n[5]=e[2],o=i.length>0?i[i.length-1][4]:r;break;default:o.push(e)}return r}function u(t){this.string=t,this.tail=t,this.pos=0}function p(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function h(){this.cache={}}var m=Object.prototype.toString,v=Array.isArray||function(t){return"[object Array]"===m.call(t)},y=RegExp.prototype.test,g=/\S/,b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},w=/\s*/,x=/\s+/,k=/\s*=/,j=/\s*\}/,E=/#|\^|\/|>|\{|&|=|!/;u.prototype.eos=function(){return""===this.tail},u.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var n=e[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},u.prototype.scanUntil=function(t){var e,n=this.tail.search(t);switch(n){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=e.length,e},p.prototype.push=function(t){return new p(t,this)},p.prototype.lookup=function(t){var n,r=this.cache;if(r.hasOwnProperty(t))n=r[t];else{for(var i,a,l=this,c=!1;l;){if(t.indexOf(".")>0)for(n=l.view,i=t.split("."),a=0;null!=n&&a<i.length;)a===i.length-1&&(c=o(n,i[a])),n=n[i[a++]];else n=l.view[t],c=o(l.view,t);if(c)break;l=l.parent}r[t]=n}return e(n)&&(n=n.call(this.view)),n},h.prototype.clearCache=function(){this.cache={}},h.prototype.parse=function(t,e){var n=this.cache,r=n[t];return null==r&&(r=n[t]=d(t,e)),r},h.prototype.render=function(t,e,n){var r=this.parse(t),o=e instanceof p?e:new p(e);return this.renderTokens(r,o,n,t)},h.prototype.renderTokens=function(t,e,n,r){for(var o,i,a,l="",c=0,d=t.length;c<d;++c)a=void 0,o=t[c],i=o[0],"#"===i?a=this.renderSection(o,e,n,r):"^"===i?a=this.renderInverted(o,e,n,r):">"===i?a=this.renderPartial(o,e,n,r):"&"===i?a=this.unescapedValue(o,e):"name"===i?a=this.escapedValue(o,e):"text"===i&&(a=this.rawValue(o)),void 0!==a&&(l+=a);return l},h.prototype.renderSection=function(t,n,r,o){function i(t){return l.render(t,n,r)}var l=this,c="",d=n.lookup(t[1]);if(d){if(v(d))for(var f=0,s=d.length;f<s;++f)c+=this.renderTokens(t[4],n.push(d[f]),r,o);else if("object"===("undefined"==typeof d?"undefined":a(d))||"string"==typeof d||"number"==typeof d)c+=this.renderTokens(t[4],n.push(d),r,o);else if(e(d)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");d=d.call(n.view,o.slice(t[3],t[5]),i),null!=d&&(c+=d)}else c+=this.renderTokens(t[4],n,r,o);return c}},h.prototype.renderInverted=function(t,e,n,r){var o=e.lookup(t[1]);if(!o||v(o)&&0===o.length)return this.renderTokens(t[4],e,n,r)},h.prototype.renderPartial=function(t,n,r){if(r){var o=e(r)?r(t[1]):r[t[1]];return null!=o?this.renderTokens(this.parse(o),n,r,o):void 0}},h.prototype.unescapedValue=function(t,e){var n=e.lookup(t[1]);if(null!=n)return n},h.prototype.escapedValue=function(e,n){var r=n.lookup(e[1]);if(null!=r)return t.escape(r)},h.prototype.rawValue=function(t){return t[1]},t.name="mustache.js",t.version="2.2.1",t.tags=["{{","}}"];var _=new h;t.clearCache=function(){return _.clearCache()},t.parse=function(t,e){return _.parse(t,e)},t.render=function(t,e,r){if("string"!=typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+n(t)+'" was given as the first argument for mustache#render(template, view, partials)');return _.render(t,e,r)},t.to_html=function(n,r,o,i){var a=t.render(n,r,o);return e(i)?void i(a):a},t.escape=c,t.Scanner=u,t.Context=p,t.Writer=h})},function(t,e){t.exports='<div class="\n\t{{config.prefix}}card\n\t{{#params.actionable}}\n\t\t{{config.prefix}}card--actionable\n\t{{/params.actionable}}\n\t{{#params.dark}}\n\t\t{{config.prefix}}card--dark\n\t{{/params.dark}}\n">\n\t<a\n\t\tclass="{{config.cardPrefix}}header"\n\t\thref="{{data.profile.index_url}}"\n\t\ttarget="_blank"\n\t>\n\t\t<div class="{{config.cardPrefix}}header-meta">\n\t\t\t<h2 class="{{config.cardPrefix}}header-title">{{data.profile.name}}</h2>\n\t\t\t{{#data.info.markets.length}}\n\t\t\t\t<ul class="{{config.cardPrefix}}header-tags">\n\t\t\t\t\t{{#data.info.markets}}\n\t\t\t\t\t\t<li>{{.}}</li>\n\t\t\t\t\t{{/data.info.markets}}\n\t\t\t\t</ul>\n\t\t\t{{/data.info.markets.length}}\n\t\t\t<div class="{{config.cardPrefix}}facts">\n\t\t\t\t<ul class="{{config.cardPrefix}}facts-tags">\n\t\t\t\t\t{{#data.info.founded}}\n\t\t\t\t\t\t<li>Founded in {{.}}</li>\n\t\t\t\t\t{{/data.info.founded}}\n\t\t\t\t\t{{#data.info.raised}}\n\t\t\t\t\t\t<li>Raised {{.}}</li>\n\t\t\t\t\t{{/data.info.raised}}\n\t\t\t\t\t{{#data.info.employees}}\n\t\t\t\t\t\t<li>{{.}} employees</li>\n\t\t\t\t\t{{/data.info.employees}}\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</a>\n\t<div class="{{config.cardPrefix}}tagline">\n\t\t<img\n\t\t\tclass="{{config.cardPrefix}}header-avatar"\n\t\t\tsrc="{{data.profile.avatar}}"\n\t\t>\n\t\t<p>{{data.profile.tagline}}</p>\n\t</div>\n\t<div class="{{config.cardPrefix}}expando"></div>\n\t<a\n\t\tclass="{{config.cardPrefix}}footer"\n\t\thref= "{{data.profile.index_url}}"\n\t\ttarget="_blank"\n\t>\n\t\t{{#params.actionable}}\n\t\t\t<span class="{{config.cardPrefix}}footer-blurrable">\n\t\t\t\tView this company on\n\t\t\t</span>\n\t\t\t<span class="{{config.cardPrefix}}footer-logo">Index</span>\n\t\t{{/params.actionable}}\n\t\t{{^params.actionable}}\n\t\t\t<span class="{{config.cardPrefix}}footer-blurrable">\n\t\t\t\tClick to view this company on\n\t\t\t</span>\n\t\t\t<span class="{{config.cardPrefix}}footer-logo">Index</span>\n\t\t{{/params.actionable}}\n\t</a>\n</div>\n'},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function h(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:h(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},d=n(4),f=r(d),s=n(6),u=r(s),p=function(t){function e(){return o(this,e),i(this,Object.getPrototypeOf(e).apply(this,arguments))}return a(e,t),l(e,[{key:"calculateShouldClose",value:function(){var t,e=this,n=function(t,e,n){return Math.floor(Math.sqrt(Math.pow(e-(t.offset().left+t.width()/2),2)+Math.pow(n-(t.offset().top+t.height()/2),2)))},r=0,o=e.$element;window.jQuery(document).on("mousemove.popoverCloser",function(i){var a=n(o,i.pageX,i.pageY);a=Math.round(a/5),0===r?r=a:r-a<-4&&!o.is(window.jQuery(i.target))&&!o.has(window.jQuery(i.target)).length>0&&(t=setTimeout(function(){e.remove()},100))}),o.on("mouseenter.popoverCloser",function(e){try{clearTimeout(t)}catch(n){}}),o.on("mouseleave.popoverCloser",function(n){t=setTimeout(function(){e.remove()},300)})}},{key:"remove",value:function(){var t=this;this.$element.addClass(f["default"].prefix+"popover--out"),this.$element.one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",function(){t.trigger("close"),t.$element.remove()})}},{key:"place",value:function(){var t=this;t.domElement.css({visibility:"hidden"}),c(Object.getPrototypeOf(e.prototype),"place",this).call(this),t.domElement.css({top:this.position.top-t.domElement.outerHeight()-5,left:this.position.left-t.domElement.outerWidth()/2,visibility:"visible"}),t.domElement.addClass(f["default"].prefix+"popover--in"),t.domElement.one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",function(){t.domElement.removeClass(f["default"].prefix+"popover--in")}),t.calculateShouldClose()}},{key:"makeElement",value:function(t){var e=window.jQuery("<div></div>");return this.position={top:t.top,left:t.left},e.attr("class",f["default"].prefix+"popover"),e.html(t.html),e}}]),e}(u["default"]);e["default"]=p},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){var e=document.createElement("a");return e.href=t.attr("href"),{entity:e.pathname.split("/")[2].split("-")[0],href:e.href}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){var e=i["default"].endpoint+"company/"+t+"?version="+i["default"].version;window.jQuery.support.cors=!0;var n=window.jQuery.ajax({dataType:"json",type:"GET",url:e});return n.fail(function(n,r){"abort"!==r&&console.error("[index Popovers] http error ("+r+') loading Popover for "'+t+'" at endpoint "'+e+'"')}),n};var o=n(4),i=r(o)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){var e=i["default"].endpoint+"list/"+t+"?version="+i["default"].version,n=window.jQuery.ajax({dataType:"json",type:"GET",url:e});return n.fail(function(n,r){"abort"!==r&&console.error("[index Popovers] http error ("+r+') loading Popover for "'+t+'" at endpoint "'+e+'"')}),n};var o=n(4),i=r(o)}]);