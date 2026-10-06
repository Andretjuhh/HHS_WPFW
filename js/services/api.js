async function loadGitHub() {
  const status = document.querySelector("#github-status");
  const githubData = document.querySelector("#github-data");

  try {
    const response = await fetch("https://api.github.com/users/Andretjuhh");

    if (!response.ok) {
      throw new Error("Git werkt niet");
    }

    const data = await response.json();

    status.textContent = "";

    const username = document.createElement("p");
    username.textContent = `@${data.login}`;

    const repos = document.createElement("p");
    repos.textContent = `${data.public_repos} publieke repositories`;

    githubData.appendChild(username);
    githubData.appendChild(repos);
  } catch (error) {
    console.error(error);

    status.textContent = "GitHub gegevens konden niet worden geladen.";
  }
}

loadGitHub();
