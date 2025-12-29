import OrderBtn from './OrderBtn'

export default function SectionRight(){
    return(
        <div className="proffesional-info-container">
            <div className="achivement-container">
                <GenerateHTML num={200} text={'Projects Completed'} />
                <GenerateHTML num={150} text={'Client orders'} />
            </div>
            <OrderBtn />
        </div>
    )
}

function GenerateHTML({num, text}){
    return(
        <>
            <h1>+{num}</h1>
            <p>{text}</p>
        </>
    )
}