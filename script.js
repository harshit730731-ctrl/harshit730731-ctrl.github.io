const projects = [
    {
        icon: "📊",
        title: "Data Analysis Project",
        description: "Analyzing data to find useful insights and create meaningful reports and visualizations.",
        link: "project-data-analysis.html"
    },
    {
        icon: "📈",
        title: "Sales Dashboard",
        description: "Created a dashboard to analyze sales performance, trends and key business metrics.",
        link: "project-sales-dashboard.html"
    }
];

const projectsContainer = document.querySelector(".projects-container");

if (projectsContainer) {
    projectsContainer.innerHTML = "";

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project";

        projectCard.innerHTML = `
            <div class="project-icon">${project.icon}</div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">
                <button>View Project →</button>
            </a>
        `;

        projectsContainer.appendChild(projectCard);
    });
}