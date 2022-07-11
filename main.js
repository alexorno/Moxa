// scroll top

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

// smoothscroll
const smoothscroll = new SmoothScroll('a[href*="#"]',
{
    speed: 700,
    speedAsDuration:true
});

// scrolllock
const body = document.querySelector("body");

window.addEventListener("load", noscroll);
function noscroll(){
    body.classList.add("noscroll");
}


const loadingTimeout = setTimeout(scroll, 5000);
function scroll(){
    window.removeEventListener("loaded", noscroll);
}
const loadingTimeoutrem = setTimeout(remscroll, 5000);
function remscroll(){
    body.classList.remove("noscroll");
}

  


// firstanimation
const tl = gsap.timeline({defaults: {ease:"power3.inout"}});


tl.to('.txt', {y:'0%', duration:1, stagger:0.2})
tl.to('.introslide', {y:'-100%', duration:2, delay:2.5})
tl.to('.intro', {y:'-100%', duration:1}, '-=1.4')

tl.fromTo('.hero-section .left', {x:"-50", opacity:'0'}, {x:'0',opacity:'1', duration:1}, '-=0.75')
tl.fromTo('.hero-section img', {x:"50", opacity:'0'}, {x:'0',opacity:'1', duration:1}, '-=0.75')
tl.fromTo('nav', {y:"-50", opacity:'0'}, {y:'0',opacity:'1', duration:0.5}, '-=0.75')
tl.fromTo('.line',{opacity:'0'},{opacity:'1', duration:0.5},'-=0.75')


// scrollanimation
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({ toggleActions: "restart complete restart reset", start: "0% bottom", end: "100% top" });


gsap.timeline({ scrollTrigger: { trigger: ".desc .left" } })
.fromTo(".desc .left", { x:'-50', opacity:0 }, { x:'0', opacity:'1', duration:1 });

gsap.timeline({ scrollTrigger: { trigger: ".desc .right" } })
.fromTo(".desc .right", { x:'70', opacity:0 }, { x:'0', opacity:'1', duration:1 });

gsap.timeline({ scrollTrigger: { trigger: ".bottom .frame" } })
.fromTo(".bottom #left", { x:'-70', opacity:0 }, { x:'0', opacity:'1', duration:1 });

gsap.timeline({ scrollTrigger: { trigger: ".bottom .frame" } })
.fromTo(".bottom #right", { x:'50', opacity:0 }, { x:'0', opacity:'1', duration:1 });

gsap.timeline({ scrollTrigger: { trigger: ".services .card" } })
.fromTo(".services .card:nth-child(1),.services .card:nth-child(3)", { x:'-50', opacity:0 }, { x:'0', opacity:'1', duration:1 });

gsap.timeline({ scrollTrigger: { trigger: ".services .card" } })
.fromTo(".services .card:nth-child(2),.services .card:nth-child(4)", { x:'50', opacity:0 }, { x:'0', opacity:'1', duration:1 });


gsap.timeline({ scrollTrigger: { trigger: ".customers .cards" } })
.fromTo(".customers .card:nth-child(even)", { y:'50', opacity:0 }, { y:'0', opacity:'1', duration:1 });

gsap.timeline({ scrollTrigger: { trigger: ".customers .cards" } })
.fromTo(".customers .card:nth-child(odd)", { y:'-50', opacity:0 }, { y:'0', opacity:'1', duration:1 });





const awards = gsap.utils.toArray('.articles .card');
awards.forEach(card => {
  gsap.from(card, { 
    y: 50,
    scrollTrigger: {
      trigger: card,
      start:'bottom bottom',
      end: "-200px center",
      scrub: -1,

    }
  })
});

const cards = gsap.utils.toArray('.awards .card');
cards.forEach(card => {
  gsap.from(card, { 
    y: 50,
    scrollTrigger: {
      trigger: card,
      start:'bottom bottom',
      end: "-200px center",
      scrub: -1,

    }
  })
});

const portfolio = gsap.utils.toArray('.portfolio .card .right');
portfolio.forEach(card => {
  gsap.from(card, { 
    x: 70,
    scrollTrigger: {
      trigger: card,
      start:'top bottom',
      end: "-100px center",
      scrub:-1,

    }
  })
});









