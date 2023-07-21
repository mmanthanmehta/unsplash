var tl = gsap.timeline()


tl.from(".nav img, .nav h3, .nav button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})
tl.from(".main-center h1",{
    y:300,
    opacity:0,
    stagger:0.2
})
tl.from(".page1>img",{
    scale:0,
    opacity:0,
    stagger:0.5
})
tl.from("h5",{
    scale:0,
    opacity:0
})
tl.to("h5",{
    y:40,
    repeat:-1,
    yoyo:true,
    duration:0.7
})