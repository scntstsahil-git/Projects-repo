//===============================================
//--------------Portfolio-JavaScript-------------
//===============================================
//========== Access Function ==========
function Access(element){
    const Element = document.querySelector(element);
    return Element;
}

//==========GO To Element Scroll Function ==========
function Goto(clickElement,goToId){
    clickElement.addEventListener("click",()=>{
      let element = document.getElementById(goToId);
      element.scrollIntoView({
          behavior: "smooth",
          block: "center"
      });
    });    
}

//===== Header element bottom border glow function =====
function GlowBotoBorder(){
    let menu = document.querySelectorAll(".menu");
    for ( let item of menu){
        item.addEventListener("click",()=>{
            for (let item of menu){
                item.classList.remove("glow-bottom-border");
            }
            item.classList.add("glow-bottom-border");
        });
    }
    
    const home = Access("#home");
    const about = Access("#about");
    const skills = Access("#skills");
    const projects = Access("#projects");
    const contact = Access("#contact");
    
    Goto(home,"my-image");
    Goto(about,"about-box");
    Goto(skills,"skills-box");
    Goto(projects,"project-contener");
    Goto(contact,"contact-icon");
    
}
//=============== Contect Function ===============
function Contact(){
    const form = Access("#contact-box");
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        
        const name = Access("#name").value;
        const email = Access("#email").value;
        const message = Access("#message").value;
        
        const WhatsAppNumber = "918573847432";
        const WhatsAppMessage = `New Contect Form Message
        name: ${name}
        email: ${email}
        message: ${message}`;
        
        const encodedmessage = encodeURIComponent(WhatsAppMessage);
        
        const WhatsAppURL = `https://wa.me/${WhatsAppNumber}?text=${encodedmessage}`;
        
        window.location.href = WhatsAppURL;
    });
}

//=============== Function Calls ===============

//----- Goto Function Calls -----
const ViewWork = Access("#view-work-btn");
const ViewContact = Access("#contact-btn");

Goto(ViewWork,"project-contener");
Goto(ViewContact,"contact-icon");

GlowBotoBorder();
Contact();
