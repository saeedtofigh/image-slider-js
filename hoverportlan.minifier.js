const images=document.querySelectorAll(".imgs"),img=document.querySelectorAll(".img"),imgstitle=document.querySelectorAll(".img-title"),imgsdetail=document.querySelectorAll(".img-detail");function slider(){images.forEach((l,e)=>{l.addEventListener("mouseover",()=>{l.classList.add("full"),img[e].classList.add("full"),imgsdetail[e].classList.add("full"),imgstitle[e].classList.add("full")}),l.addEventListener("mouseout",()=>{img[e].classList.remove("full"),imgsdetail[e].classList.remove("full"),imgstitle[e].classList.remove("full"),l.classList.remove("full")})})}slider();