// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//     item.addEventListener("click", function () {
//         this.classList.toggle("collapsible--expanded");
//     })
// );
function removeCSSClass(className, excludeId) {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((element) => {
      if (element.id !== excludeId) {
        element.classList.remove(className);
      }
    });
  }
  
  const educationButton = document.getElementById("education--button");
  const educationDiv = document.getElementById("education-section");
  const skillsButton = document.getElementById("skills--button");
  const skillsDiv = document.getElementById("skills-section");
  const projectButton = document.getElementById("project--button");
  const projectDiv = document.getElementById("projects-section");
  const workButton = document.getElementById("work--button");
  const workDiv = document.getElementById("work-section");
  
  educationButton.addEventListener("click", function () {
    removeCSSClass("collapsible--expanded", "education-section");
    educationDiv.classList.toggle("collapsible--expanded");
  });
  skillsButton.addEventListener("click", function () {
    removeCSSClass("collapsible--expanded", "skills-section");
    skillsDiv.classList.toggle("collapsible--expanded");
  });
  projectButton.addEventListener("click", function () {
    removeCSSClass("collapsible--expanded", "projects-section");
    projectDiv.classList.toggle("collapsible--expanded");
  });
  workButton.addEventListener("click", function () {
    removeCSSClass("collapsible--expanded", "work-section");
    workDiv.classList.toggle("collapsible--expanded");
  });
  