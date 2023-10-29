import './MostPopularClips.css'

import { SectionHeader, MostPopularClipsCard, PrimaryButton } from '../../components/index'

import  mostPopularClipsData  from '../../Data/mostPopularClipsData'

const MostPopularClips = () => {

    const cards = mostPopularClipsData.map((card, i) => 
        <MostPopularClipsCard key={`most_popular_clips_${i}`} image={card.image} title={card.title} views={card.views} url={card.url}/>
    ) 


  return (
    <>
        <SectionHeader>Your Most Popular Clips</SectionHeader>
        <div className='popular-clips-cards row justify-content-around'>
            {cards}
        </div>
        <div className='text-center mt-5'>
          <PrimaryButton to='browse'>Load More Clips</PrimaryButton>
        </div>
    </>
  )
}

export default MostPopularClips