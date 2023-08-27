

export default function Cat(props){
  return (

    <div className="icon-link">
    <img src ={props.catImg} alt='hi' className="icon" />
    <p>{props.catTitle}</p>
    </div>
  
  )
}