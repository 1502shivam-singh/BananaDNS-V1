let elements = document.querySelectorAll('.heroSection-cta-head, .heroSection-cta-subhead, .signup-wrapper');
elements.forEach(function(element) {
    element.innerHTML = element.textContent.replace(/\b(\w+)\b/g, "<span class='word'>$1</span>");
});

let words = document.querySelectorAll('.word');
words.forEach(function(word, index) {
    word.style.animationDelay = `${index * 0.15}s`;
});

let subhead = document.querySelector('.heroSection-cta-subhead');
let button = document.querySelector('.signup-wrapper');
let lastWord = words[words.length - 1];

// Wait for the last word of the heading to finish animating before starting the subhead and button animations
let delay = parseFloat(getComputedStyle(lastWord).animationDelay) + parseFloat(getComputedStyle(lastWord).animationDuration);

subhead.style.animationDelay = `${delay - 1.5}s`;
button.style.animationDelay = `${delay + 0.5}s`;  // Add an additional delay for the button

let buttonDelay = parseFloat(getComputedStyle(button).animationDelay) + parseFloat(getComputedStyle(button).animationDuration);

document.addEventListener('DOMContentLoaded', function() {
  // Use a MutationObserver to wait until the button is added to the DOM
  let observer = new MutationObserver(function(mutations) {
    let buttonHover = document.querySelector('.signup-btn');
    let logo = document.querySelector('.logo-banana-svg');

    if (buttonHover) {
      setTimeout(function() {
        buttonHover.classList.add('hover');
        logo.classList.add('hover');

        setTimeout(function() {
            buttonHover.classList.remove('hover');
            logo.classList.remove('hover');
        }, 800);
      }, (buttonDelay+0.3)*1000);  

      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});

gsap.registerPlugin(ScrollTrigger);

let featuresTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".heroSection-feat",
    start: "top bottom-=20%",
    toggleActions: "play none none none",
  },
  ease: "power4.inOut"
});

featuresTl.from(".feat-desc-anim1", {
  opacity: 0,
  y: 20,
  duration: 0.4
})
.from(".feat-svg-anim1", {
  opacity: 0,
  duration: 0.5
}, "-=0.1")
.from(".feat-desc-anim2", {
  opacity: 0,
  y: 20,
  duration: 0.4
}, "-=0.1")
.from(".feat-svg-anim2", {
  opacity: 0,
  duration: 0.5
}, "-=0.1");

let benefitsTl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".benefits-box-1",
    start: "top bottom-=50%",
    toggleActions: "play none none none",
  },
  ease: "power4.inOut"
});

benefitsTl1.from(".anim-text-head1", {
    opacity: 0,
    y: 10,
    duration: 0.5
})
.from(".anim-text-subhead1", {
    opacity: 0,
    y: 10,
    duration: 0.5
}, "-=0.1")
.from(".anim-svg-1", {
    opacity: 0,
    duration: 0.5
}, "-=0.1")

let benefitsTl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".benefits-box-2",
    start: "top bottom-=50%",
    toggleActions: "play none none none",
  },
  ease: "power4.inOut"
});

benefitsTl2.from(".anim-text-head2", {
    opacity: 0,
    y: 10,
    duration: 0.5
})
.from(".anim-text-subhead2", {
    opacity: 0,
    y: 10,
    duration: 0.5
}, "-=0.1")
.from(".anim-svg-2", {
    opacity: 0,
    duration: 0.5
}, "-=0.1")

let bottomCTATl = gsap.timeline({
  scrollTrigger: {
    trigger: ".bottom-cta-box",
    start: "top bottom-=50%",
    toggleActions: "play none none none",
  },
  ease: "power4.out"
});

bottomCTATl.from(".bottom-cta-box", {
    opacity: 0,
    duration: 0.5
})

document.querySelector('.round').addEventListener('click', (e) => {
    window.scrollBy(0, 300);
})

let HostingSVGTl = gsap.timeline({ 
    repeat: -1,
    yoyo: true,
    ease: "power4.out"
});

HostingSVGTl.from(".hosting-circ-1", {
    fill: "red",
    duration: 0.5
})
.from(".hosting-circ-2", {
    fill: "red",
    duration: 0.5
}, "-=0.1")
.from(".hosting-circ-3", {
    fill: "red",
    duration: 0.5
}, "-=0.1")

gsap.to(".hosting-link", {
  duration: 1,
  css: {fill: "rgb(0 255 0)"},
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

gsap.fromTo(".anim-svg-2", 
  {rotationY: -15, transformOrigin: "center center"}, 
  {duration: 3, y: 20, rotationY: 15, repeat: -1, yoyo: true, ease: "power1.inOut"}
);
gsap.fromTo(".feat-svg-anim2", 
  {rotationZ: -10 }, 
  {duration: 2, y: 15, rotationZ: 10, repeat: -1, yoyo: true, ease: "power1.inOut"}
);
