import reactLogo from './assets/react.svg'
import htmlLogo from './assets/HTML.svg'
import cssLogo from './assets/CSS.svg'
import jsLogo from './assets/JS.svg'
import githubLogo from './assets/github.svg'
import threadsLogo from './assets/threads.png'
import xLogo from './assets/x.png'


export default function personalInfo() {
    return(
        <div className="personal-info-container">
            <fieldset className="about-me">
                <legend>About me</legend>
                <p>Hi, I'm Ridma <br />I'm a Front-end developer. <br />I excel in creaing interactive websites with user friendly designs :]</p>
            </fieldset>
            <fieldset>
                <legend>Tech Stack</legend>
                <div className="logo-list">
                    <img src={reactLogo} alt="react" />
                    <img src={htmlLogo} alt="html" />
                    <img src={cssLogo} alt="css" />
                    <img src={jsLogo} alt="javascript" />
                </div>
            </fieldset>
            <div className="social-links">
                <a href="#"><img src={githubLogo} alt="" /></a>
                <a href="#"><img src={threadsLogo} alt="" /></a>
                <a href="#"><img src={xLogo} alt="" id="x-logo" /></a>
            </div>
        </div>
    )
}