(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(t,e,n){},"4eR4":function(t,e){var n=document.querySelector(".btnCalc-js"),i=document.querySelector(".btnClosePaintCalc-js");n.addEventListener("click",(function(){document.body.classList.add("show-modal")})),i.addEventListener("click",(function(){document.body.classList.remove("show-modal")}))},"5+yu":function(t,e){var n=document.querySelector(".js-btn-menu");n.classList.add("unToggled"),n.addEventListener("click",(function(){n.classList.toggle("toggled"),n.classList.toggle("unToggled")}))},GjR0:function(t){t.exports=JSON.parse('[{"id":1,"imgUrl":"https://i.ibb.co/WW06DDp/IMG-0958-3.jpg","smallImg":"https://i.ibb.co/qRnvP8r/ppainting-wall-1x.jpg","alt":""},{"id":2,"imgUrl":"https://i.ibb.co/rkZ2LsM/IMG-8216.jpg","smallImg":"https://i.ibb.co/p1QT58X/ppainting-wall-2-1x.jpg","alt":""},{"id":3,"imgUrl":"https://i.ibb.co/nzV7qCW/IMG-8286.jpg","smallImg":"https://i.ibb.co/7v5YPt4/ppainting-wall-3-1x.jpg","alt":""},{"id":4,"imgUrl":"https://i.ibb.co/7VHQBjP/image.jpg","smallImg":"https://i.ibb.co/Jqxrhqr/ppainting-wall-4-1x.jpg","alt":""},{"id":5,"imgUrl":"https://i.ibb.co/D17ZSCh/1.jpg","smallImg":"https://i.ibb.co/mRGLd0s/ppainting-wall-5-1x.jpg","alt":""},{"id":6,"imgUrl":"https://i.ibb.co/Ch5BgXX/2.jpg","smallImg":"https://i.ibb.co/6vBdcNj/ppainting-wall-6-1x.jpg","alt":""},{"id":7,"imgUrl":"https://i.ibb.co/x7cktjZ/image.jpg","smallImg":"https://i.ibb.co/Fg0zL1d/ppainting-wall-7-1x.jpg","alt":""},{"id":8,"imgUrl":"https://i.ibb.co/1nSQ9Bd/image.jpg","smallImg":"https://i.ibb.co/82tBTV8/ppainting-wall-8-1x.jpg","alt":""},{"id":9,"imgUrl":"https://i.ibb.co/WW06DDp/IMG-0958-3.jpg","smallImg":"https://i.ibb.co/qRnvP8r/ppainting-wall-1x.jpg","alt":""},{"id":10,"imgUrl":"https://i.ibb.co/rkZ2LsM/IMG-8216.jpg","smallImg":"https://i.ibb.co/p1QT58X/ppainting-wall-2-1x.jpg","alt":""},{"id":11,"imgUrl":"https://i.ibb.co/nzV7qCW/IMG-8286.jpg","smallImg":"https://i.ibb.co/7v5YPt4/ppainting-wall-3-1x.jpg","alt":""},{"id":12,"imgUrl":"https://i.ibb.co/7VHQBjP/image.jpg","smallImg":"https://i.ibb.co/Jqxrhqr/ppainting-wall-4-1x.jpg","alt":""}]')},QfWi:function(t,e,n){"use strict";n.r(e);n("1DEj"),n("Muwe"),n("y89P"),n("JBxO"),n("3dw1");var i=document.querySelector('button[data-action="open-modal"]'),o=document.querySelector(".js-backdrop"),l=document.querySelector(".js-btn-menu"),r=document.querySelectorAll('.nav__Link[href*="#"]'),a=document.querySelectorAll('.navLink[href*="#"]');function s(){document.body.classList.toggle("show-modal")}i.addEventListener("click",s),o.addEventListener("click",(function(t){t.target===t.currentTarget&&(l.classList.replace("toggled","unToggled"),document.body.classList.remove("show-modal"))})),a.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault();var n=t.getAttribute("href");document.querySelector(""+n).scrollIntoView({block:"start",behavior:"smooth"})}))})),r.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault();var n=t.getAttribute("href");document.querySelector(""+n).scrollIntoView({block:"start",behavior:"smooth"}),l.classList.replace("toggled","unToggled"),s()}))}));n("5+yu");var c=n("NUwR"),d=document.querySelector('input[data-number="number"]');Object(c.a)(d,{mask:"+{38}(000)000-00-00",lazy:!1});n("WB5j"),n("lmye");var u=n("GjR0"),p=document.querySelector(".block-portfolio"),m=document.createElement("ul"),g=document.createElement("ul"),b=document.querySelector(".btn-slider-prev"),f=document.querySelector(".btn-slider-next");m.classList.add("block-portfolio__list-one","js-active"),g.classList.add("block-portfolio__list-two","js-active");var v=u.length/2,h=u.slice(0,v),y=u.slice(v);p.addEventListener("mouseover",(function(){b.style.opacity="1",f.style.opacity="1"})),p.addEventListener("mouseout",(function(){b.style.opacity="0",f.style.opacity="0"}));var L=h.map((function(t){return function(t,e){var n=document.createElement("li");n.classList.add("block-portfolio__item","js-item-slide-top");var i=document.createElement("img");return i.classList.add("block-portfolio__link"),i.setAttribute("src",t),i.setAttribute("alt",e),n.appendChild(i),n}(t.smallImg,t.alt)})),k=y.map((function(t){return function(t,e){var n=document.createElement("li");n.classList.add("block-portfolio__item","js-item-slide-bottom");var i=document.createElement("img");return i.classList.add("block-portfolio__link"),i.setAttribute("src",t),i.setAttribute("alt",e),n.appendChild(i),n}(t.smallImg,t.alt)}));m.append.apply(m,L),g.append.apply(g,k),p.prepend(m,g);var j=!0,w=L[0].offsetWidth,E=0,q=0,S=w+(w<637?10:15),x=window.innerWidth;function I(t,e,n,i){m.style.transform="translateX("+(t?-n-e:-n+e)+"px)",g.style.transform="translateX("+(t?-i-e:-i+e)+"px)"}637===w?(E=1226,q=892.5):438===w&&(E=843,q=616.5),x>=768&&(f.addEventListener("click",(function(){return I(j=!0,S,E,q)})),b.addEventListener("click",(function(){return I(j=!1,S,E,q)})),m.addEventListener("transitionend",(function(){t=j,e=t?L.shift():L.pop(),n=t?k.shift():k.pop(),t?L.push(e):L.unshift(e),t?k.push(n):k.unshift(n),m.append.apply(m,L),g.append.apply(g,k),m.style.transition="none",m.style.transform="translate(-"+E+"px)",g.style.transition="none",g.style.transform="translate(-"+q+"px)",setTimeout((function(){m.style.transition="transform 0.5s ease-in-out",g.style.transition="transform 0.5s ease-in-out"}),0);var t,e,n})));n("RipG"),n("IlJM"),n("uQK7"),document.querySelector(".backdrop-slider");var _,W=document.querySelector(".block-portfolio__list-one"),U=document.querySelector(".block-portfolio__list-two"),A=document.querySelector(".list-slider"),G=document.querySelector(".btn-close"),T=document.querySelector(".js-btn-next-img"),D=document.querySelector(".js-btn-prev-img"),M=document.createElement("li");M.classList.add("item-gallery");var C=document.createElement("img");function R(t){t.preventDefault();var e=t.target;if("IMG"===e.nodeName){var n=e.src,i=u.find((function(t){return t.smallImg===n}));return _=u.indexOf(i),C.setAttribute("src",u[_].smallImg),M.append(C),A.append(M),document.body.classList.add("show-modal-slider")}}function B(t,e){t.preventDefault(),"left"===e?_>0?_--:_=u.length-1:"right"===e&&(_<u.length-1?_++:_=0),C.setAttribute("src",u[_].smallImg),M.replaceWith(C)}C.classList.add("img-slider"),W.addEventListener("click",R),U.addEventListener("click",R),G.addEventListener("click",(function(){return M.remove(),void document.body.classList.remove("show-modal-slider")})),T.addEventListener("click",(function(t){B(t,"right")})),D.addEventListener("click",(function(t){B(t,"left")}));var P=document.querySelector(".block-portfolio"),Q=document.createElement("ul"),J=document.querySelector(".btn-slider-prev"),V=document.querySelector(".btn-slider-next");Q.classList.add("block-portfolio__list");var X=u.map((function(t){return function(t,e){var n=document.createElement("li");n.classList.add("block-portfolio__item","js-item-slide-top");var i=document.createElement("img");return i.classList.add("block-portfolio__link"),i.setAttribute("src",t),i.setAttribute("alt",e),n.appendChild(i),n}(t.smallImg,t.alt)}));Q.append.apply(Q,X),P.prepend(Q);var O=!0,z=X[0].offsetWidth,N=z+10;function Z(t,e,n){return Q.style.transform="translateX("+(t?-n-e:-n+e)+"px)"}window.innerWidth<=767&&(V.addEventListener("click",(function(){return Z(O=!0,N,770)})),J.addEventListener("click",(function(){return Z(O=!1,N,770)})),Q.addEventListener("transitionend",(function(){t=O,e=t?X.shift():X.pop(),t?X.push(e):X.unshift(e),Q.append.apply(Q,X),Q.style.transition="none",Q.style.transform="translate(-770px)",setTimeout((function(){Q.style.transition="transform 0.5s ease-in-out"}),0);var t,e})));n("ul0e"),n("4eR4")},RipG:function(t,e){var n=document.querySelector('[data-back-up="btn-back-up"]');console.log(n);var i=window.innerHeight;window.addEventListener("scroll",(function(){var t=window.pageYOffset;if(t>i)return n.classList.add("btn-back-active");if(t<i)return n.classList.remove("btn-back-active");return})),n.addEventListener("click",(function(){return window.scrollTo({top:0,behavior:"smooth"})}))},ul0e:function(t,e){var n=document.querySelector(".text-iwp");console.log(n),setTimeout((function(){n.classList.add("active")}),750)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.a860379b4a2e29718bb5.js.map