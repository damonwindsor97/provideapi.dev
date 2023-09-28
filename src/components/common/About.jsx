import { Link } from "react-router-dom"
import 'animate.css';

const About = () => {
  return (
    <div className="aboutSection m-5 pb-5">
        <div>
            <h2 align="center">About The Project</h2>
            <p align="center">
                    Provide is here to help users gather information on the best, worst or most appropriate cheat for the game they play.
                    <br />
            <strong>Explore the docs »<Link><span className="text-danger"> *coming soon*...</span></Link></strong>
            </p>
            
            <div align="center">
                <hr class="new4"></hr>
                <p>This API has mainly been built as a passion project for myself and my friends to use; it holds data on Game Enhancer Providers and their correlating Products. Giving a good description and/or chuck of info so they know who to choose next!</p>
                <p>The only Accessable Data for users will be GET requests for Products and Providers, Spoofers sometime down the line too</p>
            </div>

        </div>
        
        <br />

        <div align="center">
            <h3>What is Provide API?</h3>
            <hr class="new4"></hr>
        </div>
        <div>
            <p>Provide API provides their users with common and known providers of game enhancers.
            Will feature a few; Providers, Developers & their products. In the future I may expand to Spoofers, things to expect;</p>
            <ul>
                <li>Providers Featured</li>
                <li>Products Available</li>
            </ul>
            <ul>Features:
                <li>Aimbot</li>
                <li>ESP / Visuals</li>
                <li>MISC</li>
            </ul>
            <ul>
                <li>isUpdated</li>
                <li>isDetected</li>
                <li>detectionHistory</li>
            </ul>
            <p>And much, much more ready and in the works</p>
        </div>

        <br />
        <div align="center">
            <h2>Why should people choose Provide?</h2>
            <hr class="new4"></hr>
            <p>Here at Provide we heavily use Third-Party Applications to improve our gameplay, you can trust myself and the communities I have around me to secure your next best cheat.</p>
            <p>The data I enter is not falsified, though Developers ARE very weird about detection histories but I have eyes and ears in many servers - with that being said I am always happy to be receiving more info so I can keep status' on track!</p>
        </div>
        
    </div>
  )
}

export default About