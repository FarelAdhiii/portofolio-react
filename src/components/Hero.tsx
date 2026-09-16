type HeroProps = {
    title: string;
    subtitle: string;
};

function Hero({ title, subtitle }: HeroProps) {
    return (
        <section className="hero">
            <div className="hero-content">
                <img
                    src={`${import.meta.env.BASE_URL}images/profil.jpeg`)
                    alt="Foto Profil"
                    className="profile-photo"
                />

                <div className="hero-text">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
