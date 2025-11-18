const projects = [
    {
        name: "Hangman Classic",
        desc: "The famous game where you have to find a word under a certain amount of tries!<br>In Golang.",
        projectKey: "hangman",
        github: "https://github.com/xLuuxx/Hangman-Classic.git",
        demo: null,
        type: "Team Project",
        icon: "team.png"
    },
    {
        name: "Groupie Tracker",
        desc: "Become a groupie and follow your favorite group anytime!<br>HTML, CSS, API & Golang.",
        projectKey: "groupieTracker",
        github: "https://github.com/xLuuxx/Groupie-Tracker.git",
        demo: "https://groupie-tracker.devbyluu.me",
        type: "Team Project",
        icon: "team.png"
    },
    {
        name: "L'affaire Jacques le Fendeur",
        desc: "Will you find out why your colleague went to?<br>HTML, CSS & JS.",
        projectKey: "jacquesLeFendeur",
        github: "https://github.com/xLuuxx/escape-game",
        demo: null,
        type: "Team Project",
        icon: "team.png"
    },
    {
        name: "Cards",
        desc: "Want to play? Let's play.<br>JAVA.",
        projectKey: "cards",
        github: "https://github.com/xLuuxx/cards-java",
        demo: null,
        type: "Solo Project",
        icon: "solo.png"
    },
    {
        name: "adventure_hero",
        desc: "Will you survive?<br>Python.",
        projectKey: "adventure_hero",
        github: "https://github.com/xLuuxx/adventure_hero",
        demo: null,
        type: "Solo Project",
        icon: "solo.png"
    },
    {
        name: "LuuMusicPlayer",
        desc: "Let's listen to some music!<br>GO, HTML, CSS.",
        projectKey: "LuuMusicPlayer",
        github: "https://github.com/xLuuxx/LuuMusicPlayer",
        demo: null,
        type: "Solo Project",
        icon: "solo.png"
    }
];

function createProjectCard(project) {
    return `
    <div class="project-card bg-[#FFFFF0] rounded-2xl shadow-lg p-8 flex flex-col justify-between">
        <div>
            <h3 class="text-xl font-bold text-[#000000] mb-2">${project.name}</h3>
            <p class="mb-4 text-[#000000]">${project.desc}</p>
        </div>
        <div class="flex items-center gap-4 mt-2">
            <a href="project.html?project=${project.projectKey}" 
               class="bg-[#000000] text-white px-4 py-2 rounded hover:bg-[#67A07D] transition inline-block text-center" 
               aria-label="See more about ${project.name}">
               See more
            </a>
            <a href="${project.github}" target="_blank" aria-label="GitHub">
                <img src="../static/images/github.png" alt="GitHub" class="w-8 h-8 rounded" />
            </a>
            ${project.demo ? `
            <a href="${project.demo}" target="_blank" aria-label="Demo">
                <img src="../static/images/click.png" alt="Demo" class="w-8 h-8 rounded" />
            </a>
            ` : ''}
            <div class="flex items-center gap-2 ml-auto">
                <img src="../static/images/${project.icon}" alt="team" class="w-7 h-7" />
                <span class="text-base text-[#000000]">${project.type}</span>
            </div>
        </div>
    </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("projects-grid");
    grid.innerHTML = projects.map(createProjectCard).join("");
});