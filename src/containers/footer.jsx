import React from "react";
import Footer from "../Components/Footer";
import TitlesHover from "../Components/Footer/Styles/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Importing the specific icons
import  Clicksound  from '../Assests/Clicksound.wav';

export function FooterContainer() {

   // const ticSound = require('../../Assests/Clicksound').default; // Importing the specific sound file
    /*
    const playSound = () => {
        const audio = new Audio(Clicksound);
        audio.play();
    };
    */
        const playSound = () => {
            const audio = new Audio(Clicksound);
            audio.play().catch((error) => {
                console.error("Audio play failed:", error);
            });
        };
    
        const handleClick = (e) => {
            playSound(); // Play sound on click
            // Optionally, you can also handle the link redirection here
            // e.preventDefault();
            // window.location.href = e.currentTarget.href; // Example for handling navigation
        };
    

    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <TitlesHover Title="About Us" />
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Clients</Footer.Link>
                        <Footer.Link href="#">Contact Us</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <TitlesHover Title="Legal Section" />
                        <Footer.Link href="#">Privacy & Policy</Footer.Link>
                        <Footer.Link href="#">Terms & Conditions</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <TitlesHover Title="Resources" />
                        <Footer.Link href="#">Mental Health Resources</Footer.Link>
                        <Footer.Link href="#">Help</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <TitlesHover Title="More" />
                        <Footer.Link href="#">Feedback</Footer.Link>
                        <Footer.Link href="#">Newsletter Subscription</Footer.Link>
                        <Footer.Link href="#">Language Selection</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <TitlesHover Title="Follow us on:" className="IconColors"/>
                        <Footer.Link href="#" onMouseEnter={playSound}><FontAwesomeIcon icon={faFacebook} /></Footer.Link>
                        <Footer.Link href="#" onMouseEnter={playSound}><FontAwesomeIcon icon={faYoutube} /></Footer.Link>
                        <Footer.Link href="#" onMouseEnter={playSound}><FontAwesomeIcon icon={faInstagram} /></Footer.Link>
                        <Footer.Link href="#" onMouseEnter={playSound}><FontAwesomeIcon icon={faTwitter} /></Footer.Link>
                        <Footer.Link href="#" onMouseEnter={playSound}><FontAwesomeIcon icon={faLinkedin} /></Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    );
}
