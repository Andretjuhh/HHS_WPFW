const filterButtons = document.querySelectorAll(".project-filter button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", "false");
    });

    button.setAttribute("aria-pressed", "true");

    if (filter === "all") {
      renderProjects(projects);
      return;
    }

    const filteredProjects = projects.filter((project) => {
      return project.category === filter;
    });

    renderProjects(filteredProjects);
  });
});
