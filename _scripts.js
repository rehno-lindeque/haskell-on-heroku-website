!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";window.cannotH=n(1)},function(e,t,n){"use strict";window.easeScroll=n(6),window.cannot=n(4),t.tweakListings=function(){var e=document.querySelectorAll("pre");[].forEach.call(e,function(e){var t=e.firstChild;if("CODE"===t.tagName){var n,o=t.firstChild,i=o.textContent.indexOf("$ ");if(-1===i)return;if(0!==i){var a=o.splitText(i),r=document.createElement("span");r.className="input",r.appendChild(a.previousSibling),a.parentElement.insertBefore(r,a),o=a}for(;;){if(i=o.textContent.indexOf("$ "),-1===i)break;n=o.textContent.indexOf("\n",i),-1===n&&(n=o.textContent.length);var c=o.splitText(i),l=c.splitText(1),s=document.createElement("span");s.className="prompt",s.appendChild(l.previousSibling),l.parentElement.insertBefore(s,l);var d=l.splitText(1),u=d.splitText(n-i-2),m=document.createElement("span");m.className="input",m.appendChild(u.previousSibling),u.parentElement.insertBefore(m,u),o=u}}})},function(){addEventListener("load",function(){t.tweakListings()})}()},function(e,t){"use strict";t.ease=function(e){if(0>=e)return 0;if(e>=1)return 1;var t=1.0042954579734844,n=-6.404173895841566,o=-7.290824133098134;return t*Math.exp(n*Math.exp(o*e))}},function(e,t,n){"use strict";var o=n(2).ease;!function(){var e=!1;t.scrollToOffset=function(t,n,i){if(!e){if(void 0===t)throw new Error("missing scroll offset");void 0===n&&(n=500);var a=scrollY,r=document.body.scrollHeight-innerHeight,c=Math.min(t,r),l=c-a,s=Date.now(),d=s+n,u=function(){if(e){if(Date.now()>=d)return e=!1,scrollTo(scrollX,c),void(void 0!==i&&(location.hash=i));var t=(Date.now()-s)/n,r=a+l*o(t);scrollTo(scrollX,r),requestAnimationFrame(u)}};e=!0,requestAnimationFrame(u)}},document.addEventListener("mousewheel",function(){e=!1}),document.addEventListener("touchstart",function(){e=!1})}(),t.getElementOffsetById=function(e){var t=document.getElementById(e);if(!t)return void 0;var n=0;do n+=t.offsetTop,t=t.offsetParent;while(t);return n},t.scrollToElementById=function(e,n){var o=t.getElementOffsetById(e);void 0!==o&&t.scrollToOffset(o,n,e)},t.applyToLocalLinks=function(e,n){void 0===e&&(e=500),void 0===n&&(n=!0);var o=location.origin+location.pathname,i=document.links;[].forEach.call(i,function(i){var a=i.getAttribute("href");if("#"===a[0]){var r=a.slice(1);n&&(i.href=o+a),i.addEventListener("click",function(n){n.preventDefault(),t.scrollToElementById(r,e)}),i.classList.add("local-link")}})}},function(e,t,n){"use strict";var o=n(3);t.rot13=function(e){return e.replace(/&lt;/g,"<").replace(/[a-zA-Z]/g,function(e){return String.fromCharCode(("Z">=e?90:122)>=(e=e.charCodeAt(0)+13)?e:e-26)})},t.restartAnimation=function(e){var t=e.style.display;e.style.display="none",function(e){return e}(e.offsetHeight),e.style.display=t},t.detectTouch=function(){document.documentElement.classList.add("ontouchstart"in window?"touch":"no-touch")},t.detectHairline=function(){var e=!1;if(window.devicePixelRatio&&devicePixelRatio>=2){var t=document.createElement("div");t.style.border=".5px solid transparent",document.body.appendChild(t),1===t.offsetHeight&&(e=!0),document.body.removeChild(t)}e?(document.documentElement.classList.remove("no-hairline"),document.documentElement.classList.add("hairline")):(document.documentElement.classList.remove("hairline"),document.documentElement.classList.add("no-hairline"))},t.disableTransitionsDuringResize=function(){var e;addEventListener("resize",function(){if(e=Date.now(),!document.documentElement.classList.contains("no-transition")){document.documentElement.classList.add("no-transition");var n=function(){Date.now()-e<100?setTimeout(n,100):(document.documentElement.classList.remove("no-transition"),t.detectHairline())};setTimeout(n,100)}})},t.createBacklinkButton=function(e,t){var n=document.createElement("span");n.className="backlink-button";var o=document.createElement("a");return o.className="backlink",o.href="#"+e,o.title=t,o.appendChild(document.createTextNode("↩")),n.appendChild(o),n},t.insertBacklinkButton=function(e){var n=parseInt(e.className.replace(/level/,""));if(n&&!(2>n)){var o=e.parentElement,i=o.getElementsByTagName("h"+(n-1))[0],a=t.createBacklinkButton(o.id,i.textContent),r=e.getElementsByTagName("h"+n)[0];r.nextSibling?e.insertBefore(a,r.nextSibling):e.appendChild(a)}},t.addSectionLinks=function(){for(var e=document.documentElement.dataset.minSectionLinkLevel||1,n=document.documentElement.dataset.maxSectionLinkLevel||6,o=[],i=e;n>=i;i+=1)o.push(i);o.forEach(function(e){var n=document.getElementsByClassName("level"+e);[].forEach.call(n,function(n){var o=n.getElementsByTagName("h"+e)[0];if(o){var i=document.createElement("a");i.className="section-link",i.href="#"+n.id,i.title=o.textContent,i.appendChild(o.replaceChild(i,o.firstChild)),t.insertBacklinkButton(n)}})})},t.insertSectionToc=function(e){if(e){var n=parseInt(e.className.replace(/level/,"")),o=document.documentElement.dataset.maxSectionTocLevel||3;if(n&&!(n>o)){var i=document.createElement("ul");i.className="toc toc"+n+" menu open";var a=0,r=e.getElementsByClassName("level"+(n+1));if([].forEach.call(r,function(e){var o=e.getElementsByTagName("h"+(n+1))[0];if(o){var r=o.textContent,c=document.createElement("li"),l=document.createElement("a");if(l.href="#"+e.id,l.title=r,"CODE"===o.firstChild.tagName){var s=document.createElement("code");s.appendChild(document.createTextNode(r)),l.appendChild(s)}else l.appendChild(document.createTextNode(r));c.appendChild(l),i.appendChild(c),a+=1,t.insertSectionToc(e)}}),a){var c=document.createElement("nav");c.appendChild(i),e.classList.add("with-toc"),e.insertBefore(c,r[0])}}}},t.addSectionToc=function(){var e=document.documentElement.dataset.minSectionTocLevel||1;t.insertSectionToc(document.querySelectorAll("section.level"+e)[0])},t.enableHeaderMenuButton=function(){var e=document.getElementById("header-menu-bar"),t=document.getElementById("header-button"),n=document.getElementById("header-menu");e&&t&&n&&t.addEventListener("click",function(o){o.preventDefault(),e.classList.toggle("open"),n.classList.toggle("open"),t.classList.toggle("open");var i="true"===localStorage["header-menu-open"];i?localStorage.removeItem("header-menu-open"):localStorage["header-menu-open"]="true"})},function(){t.detectTouch(),t.detectHairline(),t.disableTransitionsDuringResize(),addEventListener("load",function(){document.documentElement.classList.remove("no-transition"),document.documentElement.classList.contains("add-section-toc")&&t.addSectionToc(),t.addSectionLinks(),t.enableHeaderMenuButton(),o.applyToLocalLinks()})}()},function(e,t){"use strict";t.ease=function(e){if(0>=e)return 0;if(e>=1)return 1;var t=1.0042954579734844,n=-6.404173895841566,o=-7.290824133098134;return t*Math.exp(n*Math.exp(o*e))}},function(e,t,n){"use strict";var o=n(5).ease;!function(){var e=!1;t.scrollToOffset=function(t,n,i){if(!e){if(void 0===t)throw new Error("missing scroll offset");void 0===n&&(n=500);var a=scrollY,r=document.body.scrollHeight-innerHeight,c=Math.min(t,r),l=c-a,s=Date.now(),d=s+n,u=function(){if(e){if(Date.now()>=d)return e=!1,scrollTo(scrollX,c),void(void 0!==i&&(location.hash=i));var t=(Date.now()-s)/n,r=a+l*o(t);scrollTo(scrollX,r),requestAnimationFrame(u)}};e=!0,requestAnimationFrame(u)}},document.addEventListener("mousewheel",function(){e=!1}),document.addEventListener("touchstart",function(){e=!1})}(),t.getElementOffsetById=function(e){var t=document.getElementById(e);if(!t)return void 0;var n=0;do n+=t.offsetTop,t=t.offsetParent;while(t);return n},t.scrollToElementById=function(e,n){var o=t.getElementOffsetById(e);void 0!==o&&t.scrollToOffset(o,n,e)},t.applyToLocalLinks=function(e,n){void 0===e&&(e=500),void 0===n&&(n=!0);var o=location.origin+location.pathname,i=document.links;[].forEach.call(i,function(i){var a=i.getAttribute("href");if("#"===a[0]){var r=a.slice(1);n&&(i.href=o+a),i.addEventListener("click",function(n){n.preventDefault(),t.scrollToElementById(r,e)}),i.classList.add("local-link")}})}}]);