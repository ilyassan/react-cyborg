import './FeaturedGames.css'

import FeaturedGamesData from '../../Data/featuredGamesData'

import {SectionHeader, SectionWrapper, Caroules} from '../../components/index'

const FeaturedGames = () => {
  return (
    <SectionWrapper>
        <SectionHeader br={true}>Featured Games</SectionHeader>
        
        <Caroules data={FeaturedGamesData}/>

    </SectionWrapper>
  )
}

export default FeaturedGames