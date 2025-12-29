import './App.css'
import Header from './Top-section'
import RightSection from './Section-right'
import LeftSection from './Section-left'

function CreateCard(){
    return(
        <div className="cardElement">
            <Header />
            <hr />
            <div className="bottom-container">
                <LeftSection />
                <RightSection />
            </div>
        </div>
    )
}

export default CreateCard