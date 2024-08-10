let heading = `<a href="#" class="btn-project">view</a>`;
let projects =[`
    <div class="project">
      <a href="https://al-hamed-group.github.io/ALhamed/index.html" class="btn-project">view</a>
      <img src="images/logo.png" alt="">
    </div>`,
    `
    <div class="project"> 
   <a href="https://mahemoud2000.github.io/Food-/" class="btn-project">view</a>
    <img src="images/food.jpg" alt="">
    </div>`,
    `
    <div class="project">
   <a href="https://p-fresh.github.io/P-fresh/" class="btn-project">view</a>
    <img src="images/P-fresh.png" alt="">
    </div>`,
    `
    <div class="project">
      <a href="https://mahemoud2000.github.io/Web/" class="btn-project">view</a>
      <img src="images/learn-alhamed.jpeg" alt="">
    </div>`,
    `
      <div class="project">
     <a href="https://broccolistore.github.io/broccolii/" class="btn-project">view</a>
      <img src="images/logo-broocli.WebP" alt="">
    </div>`,
    `
    <div class="project">
   <a href="#" class="btn-project">view</a>
    <img src="images/protfolio.png" alt="">
    </div>`,
    `
      <div class="project">
     <a href="#" class="btn-project">view</a>
      <img src="images/project-3.png" alt="">
    </div>`,
    `
    <div class="project">
    ${heading}
    <img src="images/project-4.png" alt="">
    </div>`];
let shoCount = projects.length;
document.getElementById('all-projects').innerHTML = `<h2 class="main-heading">My Projects Is  ${shoCount}</h2><div class="child-projects">${projects.join("")}</div>`;
