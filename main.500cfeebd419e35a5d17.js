(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(t,e,i){},"5+yu":function(t,e){var i=document.querySelector(".js-btn-menu");i.classList.add("unToggled"),i.addEventListener("click",(function(){i.classList.toggle("toggled"),i.classList.toggle("unToggled")}))},GjR0:function(t){t.exports=JSON.parse('[{"id":1,"imgUrl":"https://i.ibb.co/WW06DDp/IMG-0958-3.jpg","smallImg":"https://i.ibb.co/Jqxrhqr/ppainting-wall-4-1x.jpg","alt":""},{"id":2,"imgUrl":"https://i.ibb.co/rkZ2LsM/IMG-8216.jpg","smallImg":"https://i.ibb.co/mRGLd0s/ppainting-wall-5-1x.jpg","alt":""},{"id":3,"imgUrl":"https://i.ibb.co/nzV7qCW/IMG-8286.jpg","smallImg":"https://i.ibb.co/6vBdcNj/ppainting-wall-6-1x.jpg","alt":""},{"id":4,"imgUrl":"https://i.ibb.co/nzV7qCW/IMG-8286.jpg","smallImg":"https://i.ibb.co/6vBdcNj/ppainting-wall-6-1x.jpg","alt":""},{"id":5,"imgUrl":"https://i.ibb.co/7VHQBjP/image.jpg","smallImg":"https://i.ibb.co/Fg0zL1d/ppainting-wall-7-1x.jpg","alt":""},{"id":6,"imgUrl":"https://i.ibb.co/D17ZSCh/1.jpg","smallImg":"https://i.ibb.co/82tBTV8/ppainting-wall-8-1x.jpg","alt":""},{"id":7,"imgUrl":"https://i.ibb.co/rkZ2LsM/IMG-8216.jpg","smallImg":"https://i.ibb.co/mRGLd0s/ppainting-wall-5-1x.jpg","alt":""},{"id":7,"imgUrl":"https://i.ibb.co/Ch5BgXX/2.jpg","smallImg":"https://i.ibb.co/qRnvP8r/ppainting-wall-1x.jpg","alt":""},{"id":8,"imgUrl":"https://i.ibb.co/x7cktjZ/image.jpg","smallImg":"https://i.ibb.co/p1QT58X/ppainting-wall-2-1x.jpg","alt":""},{"id":9,"imgUrl":"https://i.ibb.co/1nSQ9Bd/image.jpg","smallImg":"https://i.ibb.co/7v5YPt4/ppainting-wall-3-1x.jpg","alt":""},{"id":10,"imgUrl":"https://i.ibb.co/1nSQ9Bd/image.jpg","smallImg":"https://i.ibb.co/7v5YPt4/ppainting-wall-3-1x.jpg","alt":""},{"id":7,"imgUrl":"https://i.ibb.co/Ch5BgXX/2.jpg","smallImg":"https://i.ibb.co/qRnvP8r/ppainting-wall-1x.jpg","alt":""}]')},QfWi:function(t,e,i){"use strict";i.r(e);i("1DEj"),i("Muwe"),i("y89P"),i("JBxO"),i("3dw1");var n=document.querySelector('button[data-action="open-modal"]'),l=document.querySelector(".js-backdrop"),o=document.querySelector(".js-btn-menu"),a=document.querySelectorAll('.nav__Link[href*="#"]'),r=document.querySelectorAll('.navLink[href*="#"]');function s(){document.body.classList.toggle("show-modal")}n.addEventListener("click",s),l.addEventListener("click",(function(t){t.target===t.currentTarget&&(o.classList.replace("toggled","unToggled"),document.body.classList.remove("show-modal"))})),r.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault();var i=t.getAttribute("href");document.querySelector(""+i).scrollIntoView({block:"start",behavior:"smooth"})}))})),a.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault();var i=t.getAttribute("href");document.querySelector(""+i).scrollIntoView({block:"start",behavior:"smooth"}),o.classList.replace("toggled","unToggled"),s()}))}));i("5+yu");var c=i("NUwR"),p=document.querySelector('input[data-number="number"]');Object(c.a)(p,{mask:"+{38}(000)000-00-00",lazy:!1});i("WB5j"),i("lmye");var d=i("GjR0"),u=document.querySelector(".block-portfolio"),m=document.createElement("ul");m.classList.add("block-portfolio__list-one","js-active");var g=document.createElement("ul");g.classList.add("block-portfolio__list-two","js-active");var b=document.querySelector(".btn-slider-prev"),f=document.querySelector(".btn-slider-next"),h=d.length/2,v=d.slice(0,h),j=d.slice(h),y=v.map((function(t){return function(t,e){var i=document.createElement("li");i.classList.add("block-portfolio__item","js-item-slide-top");var n=document.createElement("img");return n.classList.add("block-portfolio__link"),n.setAttribute("src",t),n.setAttribute("alt",e),i.appendChild(n),i}(t.smallImg,t.alt)})),k=j.map((function(t){return function(t,e){var i=document.createElement("li");i.classList.add("block-portfolio__item","js-item-slide-bottom");var n=document.createElement("img");return n.classList.add("block-portfolio__link"),n.setAttribute("src",t),n.setAttribute("alt",e),i.appendChild(n),i}(t.smallImg,t.alt)}));m.append.apply(m,y),g.append.apply(g,k),u.prepend(m,g);var w=!0;function L(){m.style.transform="translateX("+(w?-1878:-574)+"px)",g.style.transform="translateX("+(w?-1544.5:-240.5)+"px)"}f.addEventListener("click",(function(){return w=!0,L()})),b.addEventListener("click",(function(){return w=!1,L()})),m.addEventListener("transitionend",(function(){!function(t){var e=t?y.shift():y.pop(),i=t?k.shift():k.pop();t?y.push(e):y.unshift(e),t?k.push(i):k.unshift(i),m.append.apply(m,y),g.append.apply(g,k)}(w),m.style.transition="none",m.style.transform="translate(-1226px)",g.style.transition="none",g.style.transform="translate(-892.5px)",setTimeout((function(){m.style.transition="transform 0.5s ease-in-out",g.style.transition="transform 0.5s ease-in-out"}),0)}));i("RipG"),document.querySelector(".backdrop-slider");var q=document.querySelector(".block-portfolio__list-one"),E=(document.querySelector(".modal-slider"),document.querySelector(".btn-close"));document.createElement("img");q.addEventListener("click",(function(t){t.preventDefault();var e=t.target;if(console.log(e),"IMG"!==e.nodeName)return;return void document.body.classList.add("show-modal-slider")})),E.addEventListener("click",(function(){document.body.classList.remove("show-modal-slider")}))},RipG:function(t,e){var i=document.querySelector('[data-back-up="btn-back-up"]');console.log(i);var n=window.innerHeight;window.addEventListener("scroll",(function(){var t=window.pageYOffset;if(t>n)return i.classList.add("btn-back-active");if(t<n)return i.classList.remove("btn-back-active");return})),i.addEventListener("click",(function(){return window.scrollTo({top:0,behavior:"smooth"})}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.500cfeebd419e35a5d17.js.map