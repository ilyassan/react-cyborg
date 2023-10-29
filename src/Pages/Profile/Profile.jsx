import './Profile.css'

import { SectionWrapper } from '../../components/index'
import { MostPopularClips, ProfileInfos, GamingLibrary } from '../../sections/index'

const Profile = () => {
  return (
    <>
        <SectionWrapper>
              <ProfileInfos/>
              <hr className='profile-hr'/>
              <MostPopularClips/>
        </SectionWrapper>
        <GamingLibrary profile={true}/>
    </>
  )
}

export default Profile