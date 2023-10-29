import './LiveStream.css'

import {SectionHeader, StreamItem, PrimaryButton} from '../../components/index'

import streamData from '../../Data/liveStreamData'


const LiveStream = () => {

    const items = streamData.map((card, i) => 
        <StreamItem key={`stream_items_${i}`} image={card.image} title={card.title} text={card.text}/>
    ) 

  return (
    <div className='live-stream'>
        <SectionHeader center={true} >How To Start A Stream</SectionHeader>

        <div className='live-stream-items'>
            {items}
        </div>

        <div className='profileButton'>
          <PrimaryButton to="profile" >Go To Profile</PrimaryButton>
        </div>

    </div>
  )
}

export default LiveStream