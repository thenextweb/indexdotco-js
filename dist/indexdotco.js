!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(1),i=o(r),a=n(2),d=o(a),l=n(3),u=o(l),c=document.createElement("style");c.type="text/css",c.innerHTML=i["default"],(0,d["default"])(function(){window.jQuery(function(){document.body.appendChild(c),(0,u["default"])(["icon","card","list"])})})},function(e,t){e.exports='.idc-card *, .idc-popover, .idc-card, .idc-cardStandalone {\n\tclear: none;\n\tdisplay: block;\n\tfloat: none;\n\tmargin: 0;\n\tpadding: 0;\n\tbox-shadow: none;\n\tborder: none;\n\ttext-align: inherit;\n\tlist-style: none;\n\tcolor: inherit;\n\ttext-decoration: none;\n}\n\n.idc-hasIcon {\n\ttext-decoration: none!important;\n\tborder: none!important;\n\tcursor: pointer!important;\n\tbox-shadow:none!important;\n\twidth: 16px;\n\theight: 16px;\n\tbackground: url("https://index.tnwcdn.com/favicon.png") center center no-repeat;\n\tbackground-size: 16px 16px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tmargin-right: .1em;\n\tmargin-right: .2em;\n\tmargin-left: .2em;\n\tposition: relative;\n\ttop: -2px;\n}\n\n.idc-popover {\n\tposition: absolute;\n\tborder-radius: 2px;\n\tbackground-color: #000;\n\tbackground-color: rgba(51, 51, 51, 0.98);\n\tcolor: #fff;\n\ttext-align: center;\n\tline-height: 1.2;\n\tz-index: 99999;\n\twidth: 18em;\n\tpointer-events: none;\n}\n.idc-popover:before {\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tmargin: auto;\n\tmargin-bottom: -5px;\n\twidth: 0;\n\tborder-top: 5px solid #000;\n\tborder-top: 5px solid rgba(51, 51, 51, 0.98);\n\tborder-right: 5px solid transparent;\n\tborder-left: 5px solid transparent;\n\tcontent: " ";\n\tfont-size: 0;\n\tline-height: 0;\n}\n\n.idc-popover.idc-popover--in {\n\tanimation: idc-hovercardFade 100ms forwards ease-in-out;\n}\n\n.idc-popover.idc-popover--out {\n\tanimation: idc-hovercardFade 100ms forwards ease-in-out reverse;\n}\n\n.idc-cardStandalone {\n\tborder: 1px solid rgba(0,0,0,.075);\n\tborder-radius: 2px;\n\twidth: 18em;\n\theight: 16em;\n\tdisplay: inline-block;\n}\n\n.idc-cardStandalone .idc-card {\n\theight: 100%;\n\twidth: 100%;\n}\n\n.idc-card {\n\tfont-family: sans-serif;\n\tcolor: inherit;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.idc-card-header {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 1em;\n\tborder-bottom: 1px solid rgba(0,0,0,.075);\n\ttext-align: left;\n\toverflow: hidden;\n}\n\n.idc-card-header-avatar {\n\twidth: 3.8em;\n\theight: 3.8em;\n\tborder-radius: 2px;\n\tmargin-right: 1em;\n\tdisplay: block;\n\tfloat: left;\n\tbox-shadow: 0 0 0 1px rgba(0,0,0,.075);\n}\n.idc-card-header-meta {\n\tdisplay: block;\n\tfloat: left;\n}\n.idc-card-header-title {\n\tfont-size: 1em;\n\tfont-weight: bold;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.idc-card-header-tags {\n\tmax-height: 2.4em;\n\tfont-size: .7em;\n\toverflow: hidden;\n\tmargin-top: .5em;\n}\n.idc-card-header-tags li {\n\tdisplay: block;\n\tfloat: left;\n\tmargin-right: .25em;\n\theight: 1.2em;\n\tline-height: 1.2em;\n\tfont-style: normal;\n\topacity: .5;\n}\n.idc-card-header-tags li:not(:last-child):after {\n\tcontent:\', \';\n}\n.idc-card-header-tags li:before {\n\tfont-size: .8em;\n}\n\n.idc-card-header:hover .idc-card-header-title {\n\tcolor: #3af;\n}\n\n.idc-card-tagline {\n\tpadding: 1em 1em 0;\n\tline-height: 1.4em;\n\tmax-height: 2.8em;\n\ttext-align: left;\n\tfont-weight: 300;\n\toverflow: hidden;\n\tflex: 1 .1 0;\n}\n\n.idc-card-facts {\n\tpadding: 1em;\n\tfont-size: .7em;\n\tmax-height: 4.1em;\n\toverflow: hidden;\n}\n\n.idc-card-facts li {\n\tbackground: rgba(51,170,255,.1);\n\tborder-radius: 999999em;\n\tpadding: .25em 0;\n\topacity: .9;\n\ttext-align: left;\n\tfloat: left;\n\tpadding: .2rem .4rem;\n\tmargin: .1rem;\n}\n\n.idc-card-footer {\n\ttext-transform: uppercase;\n\ttext-align: center;\n\tfont-size: 8px;\n\tpadding: 1.5em 1em;\n\tborder-top: 1px solid rgba(0,0,0,.075);\n}\n\n.idc-card-footer p {\n\tpadding-bottom: 0!important;\n\topacity: .45;\n\ttext-align: center;\n}\n\n.idc-card--actionable .idc-card-footer p {\n\tfont-weight: 800;\n\tcolor: #3af;\n\topacity: 1;\n}\n\n@keyframes idc-hovercardFade {\n\t0% {\n\t\ttransform: translateY(1em);\n\t\topacity: 0;\n\t}\n\t100% {\n\t\ttransform: translateY(0);\n\t\topacity: 1;\n\t}\n}\n'},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){if(window.jQuery)e();else{var t=document.createElement("script");t.type="text/javascript",t.readyState?t.onreadystatechange=function(){"loaded"!=t.readyState&&"complete"!=t.readyState||(t.onreadystatechange=null,e())}:t.onload=function(){e()},t.src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js",document.getElementsByTagName("head")[0].appendChild(t)}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},i=n(4),a=o(i),d=n(5),l=o(d),u=n(7),c=o(u),f=n(8),p=o(f),s=n(9),m=o(s),h=n(10),y=o(h),v=new Event(a["default"].prefix+"elementCreated",{bubbles:!0}),w=new Event(a["default"].prefix+"popoverCreated",{bubbles:!0}),b=function(e){var t=(0,p["default"])(e),n=(0,m["default"])(t.entity),o=window.jQuery("<div></div>").addClass(a["default"].prefix+"cardStandalone");e.replaceWith(o),e=o,n.done(function(n){try{var r=new l["default"]({data:n,actionable:!0});o.append(r.domElement),e[0].dispatchEvent(v)}catch(i){console.error("[index] error building card for "+t.entity)}})},g=function(e){var t=(0,p["default"])(e),n=(0,y["default"])(t.entity),o=window.jQuery("<div></div>").addClass(a["default"].prefix+"cardStandalone");e.replaceWith(o),n.done(function(e){try{var n=o.clone(),r=!0,i=!1,a=void 0;try{for(var d,u=e[Symbol.iterator]();!(r=(d=u.next()).done);r=!0){var c=d.value,f=new l["default"]({data:c,actionable:!0});o.append(f.domElement);var p=n.clone();o.after(p),o=p}}catch(s){i=!0,a=s}finally{try{!r&&u["return"]&&u["return"]()}finally{if(i)throw a}}o.remove()}catch(m){console.error("[index] error building list for "+t.entity)}})},x=function(e){var t=(0,p["default"])(e),n=(0,m["default"])(t.entity);e.attr("target","_blank").attr({href:t.href+"?utm_source=thenextweb.com&utm_medium=referral&utm_campaign=hover-"+t.entity}),e.on("mouseover",function(o){!e.data(a["default"].prefix+"hasIndexPopover")==!0&&(e.data(a["default"].prefix+"hasIndexPopover",!0),n.done(function(n){try{var o=new l["default"]({data:n}),r=new c["default"]({html:o.domElement,top:e.offset().top,left:e.offset().left+e.outerWidth()/2});r.on("close",function(){e.data(a["default"].prefix+"hasIndexPopover",!1)}),r.place(),e[0].dispatchEvent(v)}catch(i){console.error("[index] error building popover for "+t.entity)}}))}),e.on("mouseout",function(t){"resolved"!==n.state()&&(e.data(a["default"].prefix+"hasIndexPopover",!1),n.abort())}),e[0].dispatchEvent(w),"function"==typeof window.callPhantom&&e.trigger("mouseover")},j=function _(e){if("object"===("undefined"==typeof e?"undefined":r(e)))e.map(function(e){_(e)});else{var t=e;if("icon"===t)window.jQuery("a."+a["default"].prefix+"hasIcon").each(function(){x(window.jQuery(this))});else if("card"===t)window.jQuery("a."+a["default"].prefix+"hasCard").each(function(){b(window.jQuery(this))});else{if("list"!==t)throw"Invalid object type ("+t+")";window.jQuery("a."+a["default"].prefix+"hasList").each(function(){g(window.jQuery(this))})}}};t["default"]=j},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={};n.prefix="idc-",n.cardPrefix=n.prefix+"card-",n.version="0.0.2",n.endpoint="https://index.co/api/",t["default"]=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(4),u=o(l),c=n(6),f=o(c),p=function(e){function t(){return r(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),d(t,[{key:"makeElement",value:function(e){var t=e.data;if(!t||!t.profile||!t.info)throw"BAD_STRUCTURE";var n=window.jQuery("<a></a>");n.addClass(u["default"].cardPrefix+"header"),n.attr("href",t.profile.index_url),n.append(window.jQuery("<img></img>").attr({src:t.profile.avatar,"class":u["default"].cardPrefix+"header-avatar"}));var o=window.jQuery("<div></div>").addClass(u["default"].cardPrefix+"header-meta");n.append(o),o.append(window.jQuery("<h2></h2>").attr({"class":u["default"].cardPrefix+"header-title"}).text(t.profile.name));var r=window.jQuery("<ul></ul>").attr({"class":u["default"].cardPrefix+"header-tags"});t.info.markets&&t.info.markets.map(function(e){r.append(window.jQuery("<li></li>").text(e))}),t.info.country&&r.append(window.jQuery("<li></li>").text(t.info.country)),o.append(r);var i=window.jQuery("<div></div>").addClass(u["default"].cardPrefix+"tagline");t.profile.tagline&&i.text(t.profile.tagline);var a=window.jQuery("<div></div>").addClass(u["default"].cardPrefix+"facts"),d=window.jQuery("<ul></ul>").attr({"class":u["default"].cardPrefix+"facts-tags"});t.info.founded&&d.append(window.jQuery("<li></li>").text("Founded in "+t.info.founded)),t.info.raised&&d.append(window.jQuery("<li></li>").text("Raised "+t.info.raised)),t.info.employees&&d.append(window.jQuery("<li></li>").text(t.info.employees+" employees")),a.append(d);var l=window.jQuery("<a></a>");l.addClass(u["default"].cardPrefix+"footer"),l.attr("href",t.profile.index_url),e.actionable?l.html("<p>View this company on index</p>"):l.html("<p>Click the icon below to view profile</p>");var c=window.jQuery("<div></div>").addClass(u["default"].prefix+"card").append(n).append(i).append(a).append(l);return e.actionable&&c.addClass(u["default"].prefix+"card--actionable"),c}}]),t}(f["default"]);t["default"]=p},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(4),d=o(a),l=function(){function e(t){if(r(this,e),!t)var t={};this.$element=this.makeElement(t)}return i(e,[{key:"on",value:function(e,t){this.$element.on("internal-"+d["default"].prefix+e,t)}},{key:"trigger",value:function(e,t){this.$element.trigger("internal-"+d["default"].prefix+e,t)}},{key:"makeElement",value:function(e){return window.jQuery("<div></div>")}},{key:"place",value:function(e){e||(e=window.jQuery("body")),e.append(this.domElement)}},{key:"domElement",get:function(){return this.$element}}]),e}();t["default"]=l},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=function m(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:m(r,t,n)}if("value"in o)return o.value;var i=o.get;if(void 0!==i)return i.call(n)},u=n(4),c=o(u),f=n(6),p=o(f),s=function(e){function t(){return r(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),d(t,[{key:"calculateShouldClose",value:function(){var e,t=this,n=function(e,t,n){return Math.floor(Math.sqrt(Math.pow(t-(e.offset().left+e.width()/2),2)+Math.pow(n-(e.offset().top+e.height()/2),2)))},o=0,r=t.$element;window.jQuery(document).on("mousemove.popoverCloser",function(i){var a=n(r,i.pageX,i.pageY);a=Math.round(a/5),0===o?o=a:o-a<-4&&!r.is(window.jQuery(i.target))&&!r.has(window.jQuery(i.target)).length>0&&(e=setTimeout(function(){t.remove()},100))}),r.on("mouseenter.popoverCloser",function(t){try{clearTimeout(e)}catch(n){}}),r.on("mouseleave.popoverCloser",function(n){e=setTimeout(function(){t.remove()},300)})}},{key:"remove",value:function(){var e=this;this.$element.addClass(c["default"].prefix+"popover--out"),this.$element.one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",function(){e.trigger("close"),e.$element.remove()})}},{key:"place",value:function(){var e=this;e.domElement.css({visibility:"hidden"}),l(Object.getPrototypeOf(t.prototype),"place",this).call(this),e.domElement.css({top:this.position.top-e.domElement.outerHeight()-5,left:this.position.left-e.domElement.outerWidth()/2,visibility:"visible"}),e.domElement.addClass(c["default"].prefix+"popover--in"),e.domElement.one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",function(){e.domElement.removeClass(c["default"].prefix+"popover--in")}),e.calculateShouldClose()}},{key:"makeElement",value:function(e){var t=window.jQuery("<div></div>");return this.position={top:e.top,left:e.left},t.attr("class",c["default"].prefix+"popover"),t.html(e.html),t}}]),t}(p["default"]);t["default"]=s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=document.createElement("a");return t.href=e.attr("href"),{entity:t.pathname.split("/")[2].split("-")[0],href:t.href}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=i["default"].endpoint+"company/"+e+"?version="+i["default"].version;window.jQuery.support.cors=!0;var n=window.jQuery.ajax({dataType:"json",type:"GET",url:t});return n.fail(function(n,o){"abort"!==o&&console.error("[index Popovers] http error ("+o+') loading Popover for "'+e+'" at endpoint "'+t+'"')}),n};var r=n(4),i=o(r)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=i["default"].endpoint+"list/"+e+"?version="+i["default"].version,n=window.jQuery.ajax({dataType:"json",type:"GET",url:t});return n.fail(function(n,o){"abort"!==o&&console.error("[index Popovers] http error ("+o+') loading Popover for "'+e+'" at endpoint "'+t+'"')}),n};var r=n(4),i=o(r)}]);