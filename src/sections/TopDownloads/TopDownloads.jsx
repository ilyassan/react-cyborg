import './TopDownloads.css'

import {SectionHeader, SectionWrapper, TopDownloadsCard} from '../../components/index'
import TopDownloadsData from '../../Data/mostPopularData'


const TopDownloads = () => {

    let cards = TopDownloadsData.map((card, i) => 
        i<3?<TopDownloadsCard key={`top_downloads_${i}`} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />:null
    )

  return (
    <SectionWrapper>
        <SectionHeader>Top Downloaded</SectionHeader>
        <div className='top-downloads-cards'>
            {cards}
        </div>
    </SectionWrapper>
  )
}

export default TopDownloads