
// gsap.to("#box1",{
//   x:1000,
//    duration:2,
//    delay:1,
// });
// gsap.to("#box2",{
//   x:1000,
//    duration:2,
//    delay:1.1,
//    scale:0.5,
//    borderRadius:"50%",
//    backgroundColor:"yellowgreen"
// });

// gsap.from("#box1",{
//     x:1000,
//    duration:2,
//    delay:1.1,
// })

// Learned About timeline
var tl = gsap.timeline()

// Learned About Stagger
// gsap.to("#box1",{
//   y:30,
//   x:1000,
//   rotate:360,
//   delay:1,
//   duration:1,
//   stagger:0.3,
//   repeat:-1,
//   yoyo:true
// })

tl.from("h2",{
    opacity:0,
    y:-20,
    duration:1,
    delay:0.5
});

tl.from("h4",{
    opacity:0,
    y:-20,
    duration:1,
    delay:0.5,
    stagger:0.5
})

tl.from("h1",{
    opacity:0,
    y:-20,
    duration:1,
    delay:0.5,
    stagger:0.5,
    scale:0.5
})