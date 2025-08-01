var tl = gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.3
});

tl.from("h3",{
    y:-30,
    opacity:0,
    duration:0.7,
    delay:0.5,
    stagger:0.2
});

tl.from("h1",{
    opacity:0,
    y:-20,
    scale:0.4,
    duration:1,
    delay:1
});

tl.from("h4",{
    x:-600,
    duration:1,
    opacity:0,
    delay:0.5,
});

tl.from("h5",{
     x:400,
    duration:1,
    opacity:0,
    delay:0.5,
})
