const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const imageDiv = document.querySelector("#image");

main.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
    })
});

imageDiv.addEventListener("mouseenter",()=>{
    cursor.innerHTML = "view more"
    gsap.to(cursor,{
        scale:3
    });
})

imageDiv.addEventListener("mouseleave",()=>{
     cursor.innerHTML = "";
       gsap.to(cursor,{
        scale:1
    });
})