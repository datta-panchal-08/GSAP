var initialPath = "M 5 80 Q 500 80 990 80";

var finalPath = "M 5 80 Q 500 90 990 80";

var string = document.querySelector("#string");

string.addEventListener("mousemove",(dets)=>{
    initialPath = `M 5 80 Q ${dets.x} ${dets.y} 990 80`;
    gsap.to("svg path",{
        attr:{
            d:initialPath
        },
        duration:0.3,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})

