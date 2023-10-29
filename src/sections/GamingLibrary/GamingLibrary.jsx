import './GamingLibrary.css'

import {SectionHeader, SectionWrapper} from '../../components/index'

import GamingLibraryData from '../../Data/gamingLibraryData'

import {GamingLibraryCard} from '../../components/index'


const GamingLibrary = (props) => {

    const cards = GamingLibraryData.map((card, i) => 
        <GamingLibraryCard key={`most_popular_data_${i}`} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} download={props.profile?"Downloaded":card.download} />
    ) 


  return (
    <SectionWrapper>

        <SectionHeader>Gaming Library</SectionHeader>

        <div className='gaming-library-cards'>
            {cards}
        </div>

    </SectionWrapper>
  )
}

export default GamingLibrary