import './StreamItem.css'

const StreamItem = (props) => {
  return (
    <div className='stream-item'>
        <img src={props.image} alt='streamImage' />
        <h5>{props.title}</h5>
        <p>{props.text}</p>
    </div>
  )
}

export default StreamItem