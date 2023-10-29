import './ProfileInfos.css'

import {PrimaryButton, SecondaryButton, CardWrapper} from '../../components/index'
import profileInfosData from '../../Data/profileInfosData'

const ProfileInfos = () => {
  return (
    <div className='profileInfos'>

        <div className='row align-items-center justify-content-around'>

            <div className='col-lg-4'>
                <div className='text-center'><img src={profileInfosData.image} alt='profile'/></div>
            </div>

            <div className='col-lg-4'>
                <div className='details'>
                    <PrimaryButton pe={true} >{profileInfosData.state}</PrimaryButton>
                    <h4>{profileInfosData.name}</h4>
                    <p>{profileInfosData.text}</p>
                    <SecondaryButton pe={true} >Start Live Stream</SecondaryButton>
                </div>
            </div>

            <div className='col-lg-4'>
                <CardWrapper>
                <ul>
                    <li> <p>Games Downloaded</p> <span>{profileInfosData.downloaded}</span> </li>
                    <li> <p>Friends Online</p> <span>{profileInfosData.onlineFriends}</span> </li>
                    <li> <p>Live Streams</p> <span>{profileInfosData.liveStreams === 0?"none":profileInfosData.liveStreams}</span> </li>
                    <li> <p>Clips</p> <span>{profileInfosData.clips}</span> </li>
                </ul>
                </CardWrapper>
            </div>

        </div>

    </div>
  )
}

export default ProfileInfos