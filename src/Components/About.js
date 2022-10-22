import "../Styles/About.css"
import profilePic from "../Images/pdp.jpg"
function About(){
    return(
        <div id="about">
            <div className="about-text">
        <h1 className="about-title">About</h1>
        <p className="about-paragraph">
        “Hey! My Name Is Houssem !<br/>
I am a front-end developer based in Tunisia<br/>
I work to make a better web; one that is fast, easy to use, beautiful, accessible to all.<br/>
I use HTML, CSS, and JavaScript to produce responsive websites and web apps that provide users the best and most appropriate experience suited to their device and browser !”
        </p>
        </div>
        <div className="profile-picture">
                <img src={profilePic} alt="profile-pic" className="picture"/>
        </div>
        </div>
    )
}
export default About;