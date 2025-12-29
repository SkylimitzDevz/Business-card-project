import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function OrderBtn(){
    return(
        <button className='order-btn'><p className="text">Order now!</p><span><FontAwesomeIcon icon={faArrowRight} /></span></button>
    )
}

//<i class="fa-solid "></i>