import './MostPopularStreams.css'

import {MostPopularStreamsCard, SectionHeader, SectionWrapper} from '../../components/index'

import StreamsData from '../../Data/mostPopularStreamsData'

const MostPopularStreams = () => {

    const cards = StreamsData.map((card, i) => 
    <MostPopularStreamsCard key={`most_popular_stream_${i}`} image={card.image} avatar={card.avatar} streamer={card.streamer} />
    )

  return (
    <SectionWrapper>
        <SectionHeader>Most Popular Streams</SectionHeader>

        <div className='stream-cards row justify-content-evenly'>
            {cards}
        </div>

    </SectionWrapper>
  )
}

export default MostPopularStreams