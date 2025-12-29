// eslint-disable react-refresh/only-export-components 
import pfp from './assets/pfp.png'

function Header(){
    return(
        <div className="profile-container">
            <div className="pfp-container">
                <img src={pfp} alt="" />
            </div>
            <div className="info-container">
                <h1>Ridma Pawan</h1>
                <h2>FRONT END DEVELOPER</h2>
            </div>
        </div>
    )
}

export default Header