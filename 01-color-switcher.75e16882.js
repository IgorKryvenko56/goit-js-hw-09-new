const t=document.getElementsByTagName("button")[0],e=document.getElementsByTagName("button")[1];let n;function a(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(()=>{n=setInterval(a,1e3)})),e.addEventListener("click",(()=>{clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.75e16882.js.map
