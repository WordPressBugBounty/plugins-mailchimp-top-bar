(()=>{"use strict";function t(t,e,n){var i=n?";max-age="+24*n*60*60:"";document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+i+";path=/;SameSite=lax"}const e={exists:function(t){return new RegExp(t+"=").test(document.cookie)},create:t,erase:function(e){t(e,"",-1)}};function n(t){return t.innerHTML?t.innerHTML:t.value}function i(t,e){t.innerHTML?t.innerHTML=e:t.value=e}function o(t){this.form=t,this.button=t.querySelector('input[type="submit"],button[type="submit"]'),this.char="·",this.button&&(this.originalButton=this.button.cloneNode(!0)),this.start()}o.prototype.setCharacter=function(t){this.char=t},o.prototype.start=function(){if(this.button){var t=this.button.getAttribute("data-loading-text");if(t)return void i(this.button,t);var e=window.getComputedStyle(this.button);this.button.style.width=e.width,i(this.button,this.char),this.loadingInterval=window.setInterval(this.tick.bind(this),500)}else this.form.style.opacity="0.5"},o.prototype.tick=function(){var t=n(this.button),e=this.char;i(this.button,t.length>=5?e:t+" "+e)},o.prototype.stop=function(){if(this.button){this.button.style.width=this.originalButton.style.width;var t=n(this.originalButton);i(this.button,t),window.clearInterval(this.loadingInterval)}else this.form.style.opacity=""};const s=o;var r="mctb_bar_hidden";function d(){var t,n,i,o,d=document.getElementById("mailchimp-top-bar"),a=window.mctb,c=d.querySelector(".mctb-bar"),l=document.createElement("span"),u=c.querySelector("form"),h=d.querySelector(".mctb-response"),m=!e.exists(r),p=0,g=0,y="bottom"===a.position,b=a.state,f=c.querySelector('input[name="_mctb_no_js"]');function w(){m||(c.style.visibility="hidden"),c.style.display="",c.style.height="",c.style.paddingTop="",c.style.paddingBottom="";var e=window.getComputedStyle(c);t=e.height,n=e.paddingTop,g=p+c.clientHeight+"px",m&&(document.body.style[y?"paddingBottom":"paddingTop"]=g),d.className=d.className.replace("mctb-icon-inside-bar",""),function(){for(var t=0,e=0;e<c.firstElementChild.children.length;e++)t+=c.firstElementChild.children[e].clientWidth;return t+l.clientWidth+200<c.clientWidth}()&&(d.className+=" mctb-icon-inside-bar",y&&(d.style.minHeight=l.clientHeight+"px")),h&&(h.style.height=c.clientHeight+"px",h.style.lineHeight=c.clientHeight+"px"),c.style.visibility="",c.style.height=m?t:0,c.style.paddingTop=m?n:0,c.style.paddingBottom=m?n:0}function v(t){t.target.style.transition="",t.target.removeEventListener("transitionend",v)}function T(t,e){t.style.transition="all 0.6s ease",t.addEventListener("transitionend",v),window.requestAnimationFrame((function(){return E(t,e)}))}function E(t,e){for(var n in e)t.style[n]=e[n]}function L(i){if(m)return!1;var o={height:t,paddingTop:n,paddingBottom:n},s={};return s[y?"paddingBottom":"paddingTop"]=g,i?(T(c,o),T(document.body,s),e.erase(r)):(E(c,o),E(document.body,s)),l.innerHTML=a.icons.hide,m=!0,!0}function B(t){if(!m)return!1;var n={height:0,paddingBottom:0,paddingTop:0},i={};return i[y?"paddingBottom":"paddingTop"]=p+"px",t?(T(c,n),T(document.body,i),e.create(r,b.success?"used":"hidden",a.cookieLength)):(E(c,n),E(document.body,i)),m=!1,l.innerHTML=a.icons.show,!0}function x(){h&&(h.style.opacity="0",window.setTimeout((function(){h.parentElement.removeChild(h),b.submitted&&b.success&&B(!0)}),1e3))}function H(){return m?B(!0):L(!0)}return f.parentElement.removeChild(f),u.addEventListener("submit",(function(t){t.preventDefault();var e=new s(u),n=new FormData(u),i=new XMLHttpRequest;i.onload=function(){var t;if(e.stop(),this.status>=200&&this.status<400){try{t=JSON.parse(this.responseText)}catch(t){return void console.log('MailChimp Top Bar: failed to parse AJAX response.\n\nError: "'+t+'"')}if(b.success=!!t.success,b.submitted=!0,t.success&&t.redirect_url)return void(window.location.href=t.redirect_url);!function(t){h&&h.parentNode.removeChild(h),(h=document.createElement("div")).className="mctb-response";var e=document.createElement("label");e.className="mctb-response-label",e.innerText=t,h.appendChild(e),u.parentNode.insertBefore(h,u.nextElementSibling),w(),window.setTimeout(x,4e3)}(t.message),b.success&&u.reset()}else console.log(this.responseText)},i.open("POST",window.location.href,!0),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.send(n)})),y?(d.insertBefore(l,c),p=parseInt(document.body.style.paddingBottom)||0):(d.insertBefore(l,c.nextElementSibling),p=parseInt(document.body.style.paddingTop)||0),l.className="mctb-close",l.innerHTML=m?a.icons.hide:a.icons.show,l.addEventListener("click",H),c.querySelectorAll('input:not([type="hidden"])').length>3&&(d.className+=" multiple-input-fields"),window.requestAnimationFrame(w),window.addEventListener("load",w),window.addEventListener("resize",(i=w,function(){clearTimeout(o),o=setTimeout(i,100)})),h&&window.setTimeout(x,4e3),{element:d,toggle:H,show:L,hide:B}}document.addEventListener("DOMContentLoaded",(function(){window.MailChimpTopBar=new d}))})();