(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(t,e,o){},"5+yu":function(t,e){var o=document.querySelector(".js-btn-menu");o.classList.add("unToggled"),o.addEventListener("click",(function(){o.classList.toggle("toggled"),o.classList.toggle("unToggled")}))},GjR0:function(t){t.exports=JSON.parse('[{"id":1,"imgUrl":"https://i.ibb.co/WW06DDp/IMG-0958-3.jpg","alt":""},{"id":2,"imgUrl":"https://i.ibb.co/rkZ2LsM/IMG-8216.jpg","alt":""},{"id":3,"imgUrl":"https://i.ibb.co/nzV7qCW/IMG-8286.jpg","alt":""},{"id":4,"imgUrl":"https://i.ibb.co/nzV7qCW/IMG-8286.jpg","alt":""},{"id":5,"imgUrl":"https://i.ibb.co/7VHQBjP/image.jpg","alt":""},{"id":6,"imgUrl":"https://i.ibb.co/D17ZSCh/1.jpg","alt":""},{"id":7,"imgUrl":"https://i.ibb.co/Ch5BgXX/2.jpg","alt":""},{"id":8,"imgUrl":"https://i.ibb.co/x7cktjZ/image.jpg","alt":""},{"id":9,"imgUrl":"https://i.ibb.co/1nSQ9Bd/image.jpg","alt":""},{"id":10,"imgUrl":"https://i.ibb.co/1nSQ9Bd/image.jpg","alt":""}]')},QfWi:function(t,e,o){"use strict";o.r(e);o("1DEj"),o("Muwe"),o("y89P"),o("JBxO"),o("3dw1");var i=document.querySelector('button[data-action="open-modal"]'),l=document.querySelector(".js-backdrop"),r=document.querySelector(".js-btn-menu"),n=document.querySelectorAll('.nav__Link[href*="#"]'),c=document.querySelectorAll('.navLink[href*="#"]');function a(){document.body.classList.toggle("show-modal")}i.addEventListener("click",a),l.addEventListener("click",(function(t){t.target===t.currentTarget&&(r.classList.replace("toggled","unToggled"),document.body.classList.remove("show-modal"))})),c.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault();var o=t.getAttribute("href");document.querySelector(""+o).scrollIntoView({block:"start",behavior:"smooth"})}))})),n.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault();var o=t.getAttribute("href");document.querySelector(""+o).scrollIntoView({block:"start",behavior:"smooth"}),r.classList.replace("toggled","unToggled"),a()}))}));o("5+yu");var s=o("NUwR"),d=document.querySelector('input[data-number="number"]');Object(s.a)(d,{mask:"+{38}(000)000-00-00",lazy:!1});o("WB5j"),o("lmye");var u=o("GjR0");console.log(u);var p=document.querySelector(".block-portfolio"),m=document.createElement("ul");m.classList.add("block-portfolio__list-one");var g=document.createElement("ul");g.classList.add("block-portfolio__list-two");document.querySelector(".block-portfolio__list-one"),document.querySelector(".block-portfolio__list-two");var b=document.querySelector(".btn-slider-prev"),f=document.querySelector(".btn-slider-next"),v=(document.querySelector(".block-portfolio__item"),u.length/2),h=u.length/2,k=u.slice(0,v),y=u.slice(h),L=k.map((function(t){return function(t){var e=t.imgUrl,o=t.alt,i=document.createElement("li");i.classList.add("block-portfolio__item","js-item-slide-top");var l=document.createElement("img");return l.classList.add("block-portfolio__link"),l.setAttribute("src",e),l.setAttribute("alt",o),i.appendChild(l),i}({imgUrl:t.imgUrl,alt:t.alt})})),j=y.map((function(t){return function(t){var e=t.imgUrl,o=t.alt,i=document.createElement("li");i.classList.add("block-portfolio__item","js-item-slide-bottom");var l=document.createElement("img");return l.classList.add("block-portfolio__link"),l.setAttribute("src",e),l.setAttribute("alt",o),i.appendChild(l),i}({imgUrl:t.imgUrl,alt:t.alt})}));console.log(L),m.append.apply(m,L),g.append.apply(g,j),p.prepend(m,g);var w=1;f.addEventListener("click",(function(){w+=1;var t=document.querySelectorAll(".js-item-slide-bottom");if(w<0)for(var e=0;e>w;e--)g.prepend(t[t.length+e-1]);else if(w>0)for(var o=0;o<w;o++)g.append(t[o]);var i=document.querySelectorAll(".js-item-slide-top");if(w<0)for(var l=0;l>w;l--)m.prepend(i[i.length+l-1]);else if(w>0)for(var r=0;r<w;r++)m.append(i[r])})),b.addEventListener("click",(function(){w-=1;var t=document.querySelectorAll(".js-item-slide-top");if(w<0)for(var e=0;e>w;e--)m.prepend(t[t.length+e-1]);else if(w>0)for(var o=0;o<w;o++)m.append(t[o])}));o("RipG")},RipG:function(t,e){var o=document.querySelector('[data-back-up="btn-back-up"]');console.log(o);var i=window.innerHeight;window.addEventListener("scroll",(function(){var t=window.pageYOffset;if(t>i)return o.classList.add("btn-back-active");if(t<i)return o.classList.remove("btn-back-active");return})),o.addEventListener("click",(function(){return window.scrollTo({top:0,behavior:"smooth"})}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.1afffb27e743a4cc0027.js.map