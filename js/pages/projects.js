const projectList = document.querySelector("#project-list");

function renderProjects(items) {
  projectList.innerHTML = "";

  items.forEach((project) => {
    const article = document.createElement("article");
    article.classList.add("project-card");

    const title = document.createElement("h2");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const tags = document.createElement("div");
    tags.classList.add("project-tags");

    project.technologies.forEach((technology) => {
      const tag = document.createElement("span");
      tag.classList.add("project-tag");
      tag.textContent = technology;

      tags.appendChild(tag);
    });

    const link = document.createElement("a");
    link.classList.add("project-link");
    link.href = project.link;
    link.textContent = "Bekijk project →";

    article.appendChild(title);
    article.appendChild(description);
    article.appendChild(tags);
    article.appendChild(link);

    projectList.appendChild(article);
  });
}

renderProjects(projects);
