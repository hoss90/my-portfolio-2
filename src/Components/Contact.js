import "../Styles/Contact.css"
function Contact(){
    return(
        <div id="contact">
            <div className="left-contact">
                <h1 className="title">Get In Touch</h1>
                <img src="https://img.icons8.com/color/48/000000/apple-phone.png" alt="phone"/>
                <span ><a href="tel:+21622999664" className="phone">+216 22 999 664 </a><br/><a href="tel:+26666492" className="phonee">+216 26 666 492 </a></span><br/><br/>
                <img src="https://img.icons8.com/office/40/000000/worldwide-location.png" alt="location"/>
                <span className="location">Sfax, Tunisia</span>
            </div>
<div id="form-div">
    <form class="form" id="form1" method="POST"
              action=
    "mailto: hossjanfaoui@outlook.fr"
              enctype="multipart/form-data">
      
      <p class="name">
        <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
      </p>
      
      <p class="email">
        <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
      </p>
      
      <p class="text">
        <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Message"></textarea>
      </p>
      
      
      <div class="submit">
        <input type="submit" value="Envoyer" id="button-blue"/>
      </div>
    </form>
    </div>
    
        </div>
    )
}
export default Contact;
