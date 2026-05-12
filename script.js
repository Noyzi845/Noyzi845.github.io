// SCROLL REVEAL ANIMATION

const hiddenElements = document.querySelectorAll(".hidden");

const revealObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach(el => revealObserver.observe(el));



// SKILLS ANIMATION

const skillsSection = document.querySelector(".skills-section");
const progressBars = document.querySelectorAll(".skill-progress");
const percents = document.querySelectorAll(".percent");

let skillsAnimated = false;

function animateSkills(){

progressBars.forEach((bar, index)=>{

let value = bar.getAttribute("data-width");

bar.style.width = value + "%";

let percentElement = percents[index];
let count = 0;

let interval = setInterval(()=>{

if(count >= value){

clearInterval(interval);

}else{

count++;
percentElement.textContent = count + "%";

}

},20);

});

}

const skillsObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting && !skillsAnimated){

animateSkills();
skillsAnimated = true;

}

});

});

skillsObserver.observe(skillsSection);