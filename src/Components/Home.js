import "../Styles/Home.css"
function Home(){
    return(
        <section id="home">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
                <div class="menu-left">
                <ol class="profiles-left">
                    <li><a class="profile" rel="noreferrer" href="https://www.instagram.com/houssem_janfaoui/" target="_blank"><img src="https://img.icons8.com/3d-fluency/40/000000/instagram-new.png"/></a></li>
                    <li><a class="profile" rel="noreferrer" href="https://www.linkedin.com/in/houssem-janfaoui-a0b687103/" target="_blank"><img src="https://img.icons8.com/3d-fluency/40/000000/linkedin.png"/></a></li>
                    <li><a class="profile" rel="noreferrer" href="https://github.com/hoss90" target="_blank"><img src="https://img.icons8.com/3d-fluency/40/000000/github.png"/></a></li>
                </ol>
            </div>
            <div className="menu-right">
                <ol className="profiles-right">
                    <li ><a href="mailto:hossjanfaoui@outlook.fr" className="mail"> hossjanfaoui@outlook.fr</a></li>
                </ol>
            </div>
            <div class="description">
                    <p class="sans">Hello, I’m </p>
                    <p class="serif">Houssem Janfaoui</p>
                    <p class="sans">Front-End Web Developer</p>

                    <a className="btn" href="https://github.com/hoss90">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Projects
                    </a>
                </div>

              

        </section>
    )
}
export default Home;