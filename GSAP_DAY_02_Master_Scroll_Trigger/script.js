// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:1,
//     rotate:360
// })

// gsap.from("#page2 h1",{
//         opacity:0,
//         x:500,
//         duration:2,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//           start:"top 20%",
//         end:"top 40%",
//         markers:true,
//         scrub:2
//     }
// })


// gsap.from("#page2 h2",{
//         opacity:0,
//         x:-500,
//         duration:2,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//        start:"top 20%",
//         end:"top 30%",
//         markers:true,
//         scrub:2
//     }
// })

// gsap.from("#page3 #box",{
//     scale:0,
//     delay:1,
//     duration:1,
//     rotate:360
// })

// Using PIN

gsap.to("#page2 h1",{
    transform:"translateX(-200%)",
    scrollTrigger:{
        trigger:"#page2", // Jab bhi hum pin property ka use karenge tab hum uske parent ko hi trigger karenge
        start:"top 0%",
        end:"top -100%",
        markers:true,
        scrub:2,
        pin:true
    }
})