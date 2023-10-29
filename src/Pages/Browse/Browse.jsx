import './Browse.css'

import {FeaturedGames, TopDownloads, LiveStream, MostPopularStreams} from '../../sections/index'

const Browse = () => {
  return (
    <>
      <div className='row'>
          <div className='col-lg-5'>
              <FeaturedGames/>
          </div>
          <div className='col-lg-7'>
              <TopDownloads/>
          </div>
      </div>

          <LiveStream/>
          <MostPopularStreams/>
    </>
  )
}

export default Browse