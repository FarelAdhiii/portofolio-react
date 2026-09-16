import Hero from "../components/Hero";
import SkillCard from "../components/SkillCard";

const skills = [
    {id: 1, title: "Lua & Python", desc: "Mengatur alur dan logika sebuah program"},
    {id: 2, title: "HTML & CSS", desc: "Menyusun struktur dan tampilan halaman web"},
    {id: 3, title: "React.js", desc: "membangun antarmuka web berbasis komponen"},
]

function Home() {
    return (
        <div>
            <Hero title="Halo, Saya Farel" subtitle="Siswa RPL yang belajar membangun aplikasi web dengan React" />
            <section className="skills-grid">
                {skills.map((skill) => (
                    <SkillCard key={skill.id} title={skill.title} desc={skill.desc} />
                ))}
            </section>
        </div>
    );
}

export default Home;