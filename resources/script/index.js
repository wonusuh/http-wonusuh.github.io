const headers = [...document.getElementsByTagName("header")];

headers.forEach((header) => {
  const tags = header.getElementsByClassName("tag");
  const projectTag = tags[0];
  const myInfosTag = tags[1];

  const mySections = document.querySelectorAll(".showTags");
  mySections.forEach((section) => {
    if (section.dataset.value === "projects") {
      section.addEventListener("mouseenter", (e) => {
        projectTag.setAttribute("style", "display : block");
      });

      section.addEventListener("mouseleave", (e) => {
        projectTag.setAttribute("style", "display : none");
      });
    } else {
      section.addEventListener("mouseenter", (e) => {
        myInfosTag.setAttribute("style", "display : block");
      });

      section.addEventListener("mouseleave", (e) => {
        myInfosTag.setAttribute("style", "display : none");
      });
    }
  });
});

const backendDiv = document.querySelector(".backend");
const frontendDiv = document.querySelector(".frontend");

function Project(link, imageUrl, title, description, skills, period) {
  this.link = link;
  this.imageUrl = imageUrl;
  this.title = title;
  this.description = description;
  this.skills = skills;
  this.period = period;
}

function addProject(project, targetContainer, imageSize, imagePosition) {
  let container;
  if (targetContainer === "backend") {
    container = backendDiv;
  } else {
    container = frontendDiv;
  }

  const article = document.createElement("article");
  const a = document.createElement("a");
  const projectImg = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("h6");
  const skills = document.createElement("div");
  const period = document.createElement("span");

  article.setAttribute("class", project.title);
  a.setAttribute("href", project.link);
  a.setAttribute("target", "_blank");
  projectImg.setAttribute("class", "project-img");
  projectImg.setAttribute(
    "style",
    `background: no-repeat ${imagePosition} url('${project.imageUrl}'); background-size: ${imageSize}`
  );
  title.setAttribute("class", "title");
  title.innerText = project.title;
  description.className = "description";
  description.innerText = project.description;
  skills.setAttribute("class", "skills");
  period.className = "period";
  period.innerText = `${project.period[0]} ~ ${project.period[1]}`;

  a.append(projectImg);
  article.append(a);
  article.append(title);
  article.append(description);
  project.skills.forEach((str) => {
    const skill = document.createElement("span");
    skill.innerText = str;
    skills.append(skill);
  });
  article.append(skills);
  article.append(period);

  container.append(article);
}

const bookSearch = new Project(
  "/booksearch",
  "https://em-content.zobj.net/thumbs/240/facebook/65/left-pointing-magnifying-glass_1f50d.png",
  "Book Search",
  "Book Search and Inquiry Service",
  ["VanilaJS", "jQeury", "Kakao Search API"],
  ["2024.04.24", "2024.04.24"]
);

// addProject(bookSearch, "frontend", "contain", "center");
