// // landing page animation------------------------------------------------------------

// // landing page animation-------------------------------------------------------------------
// window.addEventListener("DOMContentLoaded", () => {
//   const animations = [
//     { selector: ".title", x: -100, opacity: 0, delay: 0.5 },
//     { selector: ".category", x: -100, opacity: 0, delay: 0.7 },
//     { selector: ".container button", y: 40, opacity: 0, delay: 0.9 },
//     { selector: ".phone", x: 50, opacity: 0, delay: 1.1 },
//     { selector: ".mail", x: 50, opacity: 0, delay: 1.3 },
//   ];

//   animations.forEach((animation) => {
//     gsap.from(animation.selector, {
//       x: animation.x,
//       y: animation.y,
//       opacity: animation.opacity,
//       delay: animation.delay,
//     });
//   });
// });

// function pageAnimation() {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#about",
//       scroller: "body",
//       start: "top 65%",
//       end: "top -15%",
//       scrub: 2,
//       markers: false,
//     },
//   });

//   ScrollTrigger.create({
//     trigger: '#about',
//     start: 'top top',
//     endTrigger: 'body',
//     end: 'bottom 50%+=100px',
//     onToggle: (self) => console.log('toggled, isActive:', self.isActive),
//     onUpdate: (self) => {
//         console.log(
//             'progress:',
//             self.progress.toFixed(3),
//             'direction:',
//             self.direction,
//             'velocity',
//             self.getVelocity()
//         );
//     }
// });

//   tl.add([
//     gsap.from(".about-title", { x: -500, opacity: 0, duration: 2, delay: 0.5 }),
//     gsap.from(".about-profile, .about-profile-layout , .about-experience", {
//       scale: 0,
//       duration: 5,
//       delay: 0.2,
//     }),
//     gsap.from(".content > h3", {
//       x: -500,
//       opacity: 0,
//       duration: 1,
//       delay: 0.4,
//     }),
//     gsap.from(".content p", {
//       y: 40,
//       opacity: 0,
//       duration: 2,
//       delay: 5,
//       stagger: 5,
//     }),
//     gsap.from(".content h2", {
//       x: 100,
//       opacity: 0,
//       duration: 1,
//       delay: 0.6,
//       stagger: 2,
//     }),
//   ]);
// }

// pageAnimation();

let wrapWidth = document.querySelector(".marquee__inner").offsetWidth;

gsap.to(".marquee__inner", {
  duration: 90,
  ease: "none",
  repeat: -1,
  immediateRender: false,
  x: `-=${wrapWidth / 2}`,
});

gsap.to(".marquee__inner", {
  x: `-=300`,
  immediateRender: false,
  opacity: 0.25,
  duration: 9,
  scrollTrigger: {
    toggleActions: "play none reset none",
    trigger: ".marquee__inner",
    start: "70%",
    end: "50",
  },
});

// function pageAnimation2() {
//   var lastTimeLine = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#outdoor",
//       scroller: "body",
//       start: "top 75%",
//       end: "top 45%",
//       scrub: 2,
//     },
//   });

//   lastTimeLine.from(".outdoor-title", {
//     x: -100,
//     opacity: 0,
//     duration: 1,
//     delay: 0.5,
//   });

//   lastTimeLine.from(".outdoor-container", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     delay: 1,
//   });
// }

// pageAnimation2();

const swiperOptions = {
  loop: true,
  direction: "vertical",
  mousewheel: {
    control: true,
    releaseOnEdges: true,
  },
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

const swiper = new Swiper(".vertical-slide-carousel", swiperOptions);

// function pageAnimation3() {
//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".slider",
//       scroller: "body",
//       start: "top 95%",
//       end: "top 45%",
//       scrub: 2,
//     },
//   });

//   timeline.from(".patient", {
//     x: -500,
//     opacity: 0,
//     duration: 2,
//     delay: 0.5,
//   });
// }

// pageAnimation3();

// function pageAnimation4() {
//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#pages",
//       scroller: "body",
//       start: "top 55%",
//       end: "top -35%",
//       scrub: 2,
//     },
//   });

//   timeline
//     .from(".page-title", {
//       x: -500,
//       opacity: 0,
//       duration: 2,
//       delay: 0.5,
//     })
//     .from(".card-holder", {
//       y: 50,
//       opacity: 0,
//       duration: 5,
//       delay: 2,
//       stagger: 4,
//     });
// }

// pageAnimation4();

// function pageAnimation5() {
//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#blog",
//       scroller: "body",
//       start: "top 75%",
//       end: "top -35%",
//       scrub: 2,
//     },
//   });

//   timeline
//     .from(".blog-title", {
//       x: -100,
//       opacity: 0,
//       duration: 2,
//       delay: 0.5,
//     })
//     .from(".blog-item", {
//       y: 100,
//       opacity: 0,
//       duration: 2,
//       delay: 1,
//       stagger: 0.5, // reduced stagger value for a more subtle effect
//     })
//     .from(".blog-button", {
//       y: 100,
//       opacity: 0,
//       duration: 2,
//       delay: 5,
//     });
// }

// pageAnimation5();

// function pageAnimation6() {
//   const contactSection = document.getElementById("contact");
//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: contactSection,
//       scroller: "body",
//       start: "top 65%",
//       end: "top 35%",
//       scrub: 2,
//     },
//   });

//   timeline
//     .from(".contact-title", {
//       x: -200,
//       opacity: 0,
//       duration: 1,
//       delay: 0.5,
//     })
//     .from(".contact-details", {
//       y: 40,
//       opacity: 0,
//       duration: 1,
//       delay: 0.5,
//       stagger: 0.3, // instead of 3, use a smaller value for a more subtle stagger effect
//     })
//     .from(".form-input", {
//       y: 40,
//       opacity: 0,
//       duration: 2,
//       delay: 2,
//       stagger: 0.3, // same here
//     });
// }

// pageAnimation6();

// function pageAnimation7() {
//   const footerTimeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#footer",
//       scroller: "body",
//       start: "top 95%",
//       end: "top 80%",
//       scrub: 2,
//     },
//   });

//   footerTimeline
//     .from("#footer", {
//       y: 80,
//       opacity: 0,
//       duration: 2,
//       delay: 0.5,
//     })
//     .from(".footer-item", {
//       scale: 0,
//       opacity: 0,
//       duration: 1,
//       delay: 1,
//       stagger: 1,
//     });
// }

// pageAnimation7();



let count = document.querySelectorAll(".count")
let arr = Array.from(count)



arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},10)

})