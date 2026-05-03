import { InfoCard } from '../Components';
import { IoMailOpenOutline, IoLogoGithub, IoNewspaperOutline } from "react-icons/io5";

function Contact() {
    return (
        <div className="page-container">
            <h2>연락처 & 링크</h2>
        
            <InfoCard className="contact-project-box"
                icon={<IoMailOpenOutline />} 
                title="Email" 
                content="gm2410470@sookmyung.ac.kr" 
            />

            <InfoCard className="contact-project-box"
                icon={<IoLogoGithub />}
                title="Github" 
                content={<a href="https://github.com/gyeongmedium" target="_blank" rel="noreferrer">github.com/gyeongmedium</a> }
            />

            <InfoCard className="contact-project-box"
                icon={<IoNewspaperOutline />}
                title="Blog" 
                content="-" 
            />
    </div>
    );
}


export default Contact;