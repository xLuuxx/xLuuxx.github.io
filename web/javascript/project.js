const projectsData = {
    "hangman": {
        title: "Hangman Classic",
        summary: "The famous game where you have to find a word under a certain amount of tries! In Golang.",
        github: "https://github.com/xLuuxx/Hangman-Classic.git",
        details: [
            { label: "Description", value: "Classic hangman game played in the terminal. Try to guess the word before you run out of attempts!" },
            { label: "Technologies", value: "• Golang" },
            { label: "Characteristics", value: "• Terminal game<br>• Random word picking<br>" }
        ]
    },
    "groupieTracker": {
        title: "Groupie Tracker",
        summary: "Become a groupie and follow your favorite group anytime! HTML, CSS, API & Golang.",
        github: "https://github.com/xLuuxx/Groupie-Tracker.git",
        demo: "https://groupie-tracker.devbyluu.me",
        details: [
            { label: "Description", value: "Website that lets you discover and track musical groups, with data fetched from an API." },
            { label: "Technologies", value: "• Golang<br>• HTML/CSS<br>• API" },
            { label: "Characteristics", value: "• Interactive maps (removed for confidentiality) <br>• API integration<br>" }
        ]
    },
    "jacquesLeFendeur": {
        title: "L'affaire Jacques le Fendeur",
        summary: "Will you find out where your colleague disappeared?<br>HTML, CSS & JS.",
        github: "https://github.com/xLuuxx/escape-game",
        details: [
            { label: "Description", value: "Escape game website! Unravel clues and find out the mystery behind murders." },
            { label: "Technologies", value: "• HTML<br>• CSS<br>• JavaScript" },
            { label: "Characteristics", value: "• Story-driven<br>• Puzzles<br>" }
        ]
    },
    "cards": {
        title: "Cards",
        summary: "Want to play? Let's play.<br>JAVA.",
        github: "https://github.com/xLuuxx/cards-java",
        details: [
            { label: "Description", value: "My first JAVA program. The goal is to win against a computer, first one to get 7 points." },
            { label: "Technologies", value: "• JAVA" },
            { label: "Characteristics", value: "• Basic GUI<br>" }
        ]
    },
    "adventure_hero": {
        title: "adventure_hero",
        summary: "Will you survive?<br>Python.",
        github: "https://github.com/xLuuxx/adventure_hero",
        details: [
            { label: "Description", value: "An adventure game in Python. Face choices, survive events and see how far you get." },
            { label: "Technologies", value: "• Python" },
            { label: "Characteristics", value: "• Terminal gameplay<br>• Processing resources <br>• Random events" }
        ]
    },
    "LuuMusicPlayer": {
        title: "LuuMusicPlayer",
        summary: "Let's listen to some music! GO, HTML, CSS.",
        github: "https://github.com/xLuuxx/LuuMusicPlayer",
        details: [
            { label: "Description", value: "A simple web music player built in Go with a frontend interface. Objective : practice good practices." },
            { label: "Technologies", value: "• GO<br>• HTML<br>• CSS" },
            { label: "Characteristics", value: "• Local playback<br>• Web interface<br>• Minimalist design" }
        ]
    }
};

function getProjectKey() {
    const params = new URLSearchParams(window.location.search);
    return params.has('project') ? params.get('project') : null;
}

function renderProject(key) {
    const project = projectsData[key];
    const container = document.getElementById('project-container');
    if (!project) {
        container.innerHTML = '<p class="text-[#000000]">Projet non trouvé.</p>';
        document.getElementById('pageTitle').textContent = 'Projet';
        return;
    }

    document.getElementById('pageTitle').textContent = project.title;

    container.innerHTML = `
        <div class="project-header text-center mb-6">
            <h1 class="text-2xl text-[#67A07D] sm:text-3xl font-bold mb-4">${project.title}</h1>
            <p class="mb-4 text-[#000000]">${project.summary}</p>
            <div class="flex justify-center gap-4">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <img src="../static/images/github.png" alt="GitHub" class="w-8 h-8 rounded hover:scale-110 transition">
                </a>
                ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" aria-label="Demo"><img src="../static/images/click.png" alt="Demo" class="w-8 h-8 rounded hover:scale-110 transition"></a>` : ''}
            </div>
        </div>
        <div class="project-details flex flex-col gap-6 mt-10">
            ${project.details.map(detail => `
            <div class="detail-card bg-[#FFFFF0]/70 rounded-xl p-6 shadow">
                <h2 class="text-xl font-bold text-[#67A07D] mb-2">${detail.label}</h2>
                <p class="text-[#000000]">${detail.value}</p>
            </div>
            `).join('')}
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    renderProject(getProjectKey());
});
