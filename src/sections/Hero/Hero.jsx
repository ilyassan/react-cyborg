import './Hero.css'

import {PrimaryButton} from '../../components/index'

const Hero = () => {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className=''>Welcome To Cyborg</h6>
            <h4 className='hero-title'><em>Browse</em> Our Popular Games Here</h4>

            <PrimaryButton to="browse" >Browse Now</PrimaryButton>

        </div>
    </div>
  )
}

export default Hero