import "../Styles/Footer.css"
function Footer(){
    return(
        <div className="footer">
            <footer>
      <div className="social-media">
      <a className="social-footer" class="profile" rel="noreferrer" href="https://www.instagram.com/houssem_janfaoui/" target="_blank"><img src="https://img.icons8.com/ios-glyphs/40/000000/instagram-new.png" className="social"/></a>
      <a className="social-footer" rel="noreferrer" href="https://github.com/hoss90" target="_blank"><img src="https://img.icons8.com/material-rounded/40/000000/github.png" className="social"/></a>
      <a className="social-footer" rel="noreferrer" href="https://www.linkedin.com/in/houssem-janfaoui-a0b687103/" target="_blank"><img src="https://img.icons8.com/ios-glyphs/40/000000/linkedin-circled--v1.png" className="social"/></a>
    </div>
    <div className="link-footer">
    <span class="left"> <a href="#home"className="link">Home</a></span>
            <span class="left"><a href="#about" className="link">About</a></span>
            <span class="left"><a href="#contact" className="link">Contact</a></span>
            <span class="right">©2022 Houssem Janfaoui</span>
            </div>
    </footer>
        </div>
    )
}
export default Footer