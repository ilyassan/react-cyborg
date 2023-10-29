import './MostPopular.css'

import {MostPopularCard, SectionHeader, SectionWrapper} from '../../components/index'

import mostPopularData from '../../Data/mostPopularData'



const MostPopular = () => {
    
    const cards = mostPopularData.map((card, i) => 
        <MostPopularCard key={`most_popular_${i}`} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
        ) 


  return (
    <SectionWrapper>

        <SectionHeader>Most Popular</SectionHeader>

        <div className='most-popular-items'>
            {cards}
        </div>

    </SectionWrapper>
  )
}

export default MostPopular