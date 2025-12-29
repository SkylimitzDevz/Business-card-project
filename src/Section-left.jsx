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
                    <img src="/src/assets/react.svg" alt="react" />
                    <img src="/src/assets/HTML.svg" alt="html" />
                    <img src="/src/assets/CSS.svg" alt="css" />
                    <img src="/src/assets/JS.svg" alt="javascript" />
                </div>
            </fieldset>
            <div className="social-links">
                <a href="#"><img src="/src/assets/github.svg" alt="" /></a>
                <a href="#"><img src="/src/assets/threads.png" alt="" /></a>
                <a href="#"><img src="/src/assets/x.png" alt="" id="x-logo" /></a>
            </div>
        </div>
    )
}