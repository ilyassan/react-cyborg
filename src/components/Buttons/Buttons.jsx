import './Buttons.css'
import { Link } from 'react-router-dom'

const PrimaryButton = (props) => {
  return (
    <div className={`button primary-btn ${props.pe?"pe-none":""}`}>
        <Link to={`/${props.to || "#"}`}>{props.children}</Link>
    </div>
  )
}
const SecondaryButton = (props) => {
  return (
    <div className={`button secondary-btn ${props.pe?"pe-none":""} ${props.disable?"disable":""}`} >
        <Link to={`/${props.to || "#"}`}>{props.children}</Link>
    </div>
  )
}

export default PrimaryButton
export {SecondaryButton}