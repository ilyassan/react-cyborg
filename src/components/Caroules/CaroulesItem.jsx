import './CaroulesItem.css'

const CaroulesItem = (props) => {
  return (
    <div className={`carousel-item ${props.isActive}`} data-bs-interval="3000">

        <div className="image"><img src={props.image} className="d-block w-100" alt="game"/></div>

        <div className="details">
            <h4>{props.title}</h4>
            <span>200K+ Downloads</span>
        </div>

    </div>
  )
}

export default CaroulesItem