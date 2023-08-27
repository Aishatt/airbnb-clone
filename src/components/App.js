import Card from './Cards';
import alldata from './cardData';
import Cat from './Cat';
import navdata from "./navdata"

//intro section
function ImgGrid() {
    return (
       
        <div className='grid-comp'>
            <center>
            <img src="images/image7.png" alt='show'/>
            <h1 className='anim'>Be Guided</h1>
            <p className='span'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat
            </p></center> 
        </div>

    )
}
///Card section
function Cards(props) {
  console.log(props)
const cardElement = alldata.map(eachCard=>{
  return <>
  <Card 
  key={eachCard.id}
  //spread syntax to get our data
openSpot={eachCard.spot}
location={eachCard.location}
pic = {eachCard.pic}
msg= {eachCard.msg}
star = {eachCard.star}
price= {eachCard.price}
rating = {eachCard.rating}
country=  {eachCard.country}
  />
  </>
})
    return (
        <div className='card-container'>
            {cardElement}
        </div>
    )
}
//Nav categories
function Categ(props){
    const categories=navdata.map(category =>{
        return <Cat
        catImg= {category.icon_img}
        catTitle= {category.icon_title}
        />
    })
    return (
        <div className="cat">
            {categories}
        </div>
    )
}

function Footer(){
    return <div class="footer">
    &copy;<span id="year"> </span><span> Aisha scrimba Project. All rights reserved.</span></div>
    
}

export default function App() {
    //Greeting function
    const date = new Date()
    const hour = date.getHours()
    let timeOfDay;
    if (hour < 12) {
        timeOfDay = 'Morning'
    } else if (hour > 12 && hour <17) {
        timeOfDay = 'Afternoon'

    } else {
        timeOfDay = 'Evening'
    }
    
    return (
        <div className="App">
          <Categ />
          <h4 style={{padding:30}}>Good {timeOfDay}!</h4> 
            <ImgGrid/>
            <Cards/>
            <Footer /> 
                   </div>
    );
}
