import React from 'react'
import './FirstPageTeam.css'
import { Link } from "react-router-dom";
// import Team from './Team';
import { useNavigate } from 'react-router-dom';
const data = [
  {
    title: 'Jordan Musk',
    description: "Fitness Coach",
    image: 'https://media.istockphoto.com/id/1369509413/photo/shot-of-a-handsome-young-man-taking-a-break-during-his-workout.jpg?b=1&s=170667a&w=0&k=20&c=MC2um7AEeVfi6Omt4i4ygVzO42upQt4jvI32tHgt0OE=',
  },
  {
    title: "Evia Freg",
    description: 'Yoga coach',
    image: 'https://www.arhantayoga.org/wp-content/uploads/2023/04/50-hour-Yin-Yoga-Teacher-Training.jpg',
  },
  {
    title: "Mark Anthony",
    description: 'Crossfit Coach',
    image: 'https://images.squarespace-cdn.com/content/v1/56e029a8a3360cb7acc01a85/1559597683736-X5P01AERY92IBMVIRFEA/OwnerCoachBenTyler.jpg?format=1000w',
  },
  {
    title: "Rini Dichard",
    description: 'Zumba Coach',
    image: 'https://img.freepik.com/premium-photo/fitness-sport-dance-lifestyle-concept-group-smiling-people-with-coach-dancing-zumba-gym-studio_380164-95204.jpg?w=1060',
  },
 
];

function FirstPageTeam() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/wholeteam'); // Navigates to the "/about" path
    };
   
  return (
    <div>
        <div class="card text-center"    style={{backgroundColor:'rgb(40, 1, 1)'}}>
  <div id="scrollspyHeading4" class="card-header titletrain">
  Our Team Member
  </div>
 
    <div>
      {data.map((card, index) => (
        <>
     <div class="row row-cols-1 row-cols-md-4 g-5 caed">
  <div class="col">
    <div class="card h-100 cardmain" style={{width:'300px'}}>
      <img src={card.image} class="card-img-top img" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{card.title}</h5>
          </div>
      <div class="card-footer foot">
        <h4 class="foottext">{card.description}</h4>
      </div>
    </div>
  </div>
 
 
 
</div>
        </>
     
      ))}
      {/*  */}
    </div>
  
    </div>
    <div  className='text-center buttoncss'  style={{backgroundColor:'rgb(40, 1, 1)'}}>
    <button type="button" class="btn btn-danger ss" onClick={handleClick}>See Whole Team</button>
   
    </div>
    </div>
  )
}



export default FirstPageTeam