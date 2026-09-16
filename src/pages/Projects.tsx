import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        id: 1,
        title: "Website Portofolio Pribadi",
        desc: "Aplikasi SPA yang menampilkan profil, daftar proyek, dan formulir kontak.",
        image: `${import.meta.env.BASE_URL}images/project-portofolio.png`,
        tech: ["React", "TypeScript", "CSS"],
        githuburl: "https://github.com/osc4rmk/Private-Portfolio",
        demourl: "https://portofolio-fa.netlify.app"
    },
    {
        id: 2,
        title: "Aplikasi Resepsi Hotel",
        desc: "Aplikasi untuk mengelola reservasi dan informasi hotel.",
        image: `${import.meta.env.BASE_URL}images/project-resepsi.png`,
        tech: ["React", "JavaScript", "Tailwind CSS"],
        githuburl: "https://github.com/osc4rmk/wip",
        demourl: "https://github.com/osc4rmk/wip"
    }
];

function Projects() {
    return (
        <section className="projects">
            <h2>Proyek Saya</h2>
            <div className="projects-grid">
                {projects.map((p) => (
                    <ProjectCard
                        key={p.id}
                        title={p.title}
                        desc={p.desc}
                        image={p.image}
                        tech={p.tech}
                        githuburl={p.githuburl}
                        demourl={p.demourl}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;
