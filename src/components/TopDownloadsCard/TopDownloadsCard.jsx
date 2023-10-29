import './TopDownloadsCard.css'

import{FaStar, FaDownload} from 'react-icons/fa'

const TopDownloadsCard = (props) => {
  
  return (
    <div className='top-downloads-card'>
        <ul>

            <li> <img src={props.image} alt="game"/> </li>
            <li> <h4 className='title'>{props.title}</h4> <span className='category'>{props.category}</span> </li>
            <li> <h4><FaStar className='starIcon'/></h4> <span>{props.rate}</span> </li>
            <li> <h4><FaDownload className='downloadIcon'/></h4> <span>{props.download}</span> </li>

        </ul>
    </div>
  )

}

export default TopDownloadsCard