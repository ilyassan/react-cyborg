import './MostPopularStreamsCard.css'

import {FaCheck} from 'react-icons/fa'


const MostPopularStreamsCard = (props) => {
  return (
    <div className='stream-card col-lg-3 col-md-6 col-sm-12'>
        <div className='stream-card-thumb'>
            <img src={props.image} alt='thumbnail'/>
        </div>
        <div className='stream-card-down'>
            <img src={props.avatar} alt='streamer'/>
            <span className='streamer-name'><FaCheck/>{props.streamer}</span>
        </div>
    </div>
  )
}

export default MostPopularStreamsCard