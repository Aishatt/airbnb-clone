export default function Cards(props) { // show badge: conditional component
  let badgeText
  if (props.openSpot === 0) {
    badgeText = "Sold out "
  } else if (props.location === 'Online') {
    badgeText = "Available"
  } else {
    badgeText = 'Not available '
  }

  return (
    <div className='card'>
      <div className='spot'>
        {badgeText} </div>
      <div className='card-stat'>
        <img
          style={
            {width: 300}
          }
          src={
            props.pic
          }
          alt='Show'/>
        <br/>
        <img className='star'
          src={
            props.star
          }
          alt='Show'/>
        <span> {
          props.rating
        } </span>
        <span> {
          props.country
        } </span>
      </div>

      <p> {
        props.msg
      }</p>
      <p>
        <b>${
          props.price
        } </b>
        total</p>
    </div>
  )
}
