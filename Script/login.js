gsap.registerPlugin(SplitText);

let mainTitle = document.querySelector(".main-title");
let subTitle = document.querySelector(".sub-title");

let splitMainTitle = new SplitText(mainTitle, {type: "chars"});

//let splitSubTitle = new SplitText(subTitle, {type: "words"});

let tl = gsap.timeline();

tl.from(splitMainTitle.chars, {
  duration: 0.3,
  y: 60,
  rotationX: 90,
  opacity: 0,
  color: "#6c63ff",
  stagger: 0.07,
  transformOrigin: "center top",
  perspective: 700  
}).to(splitMainTitle.chars, {
  color: "#ffff",
  duration: 20,
  stagger: 0.5,
  ease: "power2.in",
  delay: 2
});