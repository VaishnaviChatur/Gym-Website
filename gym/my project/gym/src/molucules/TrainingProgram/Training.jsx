import React from 'react'
import yoga from '../images/yoga.jpg'
import flex from '../images/flexibility.jpg'
import weight from '../images/weight.png'
import body from '../images/bodybuild.png'
import zumba from'../images/zumba.png'
import aerobic from '../images/aerobic.png'
import './Training.css'
function Training() {
  return (
    <div>
        <div id="scrollspyHeading3" class="card text-center" >
  <div class="card-header titletrain">
   TRAINING PROGRAM
  </div>
  <div class="card-body"  style={{width:'80vw',height:'90vh', margin: '0 auto'}}>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={yoga} class="d-block w-100" alt="..." style={{height:'85vh'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Yoga Sessions</h5>
        {/* <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src={body} class="d-block w-100" alt="..." style={{height:'85vh'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Body Building</h5>
        {/* <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src={flex} class="d-block w-100" alt="..." style={{height:'85vh',width:'50px'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Flexibility</h5>
        {/* <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src={zumba} class="d-block w-100" alt="..." style={{height:'85vh'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Zumba classes</h5>
        {/* <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src={weight} class="d-block w-100" alt="..." style={{height:'85vh'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:'red',backgroundColor:'black',fontSize:'2rem'}}>Weight Lifting</h5>
        {/* <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src={aerobic} class="d-block w-100" alt="..." style={{height:'85vh'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Aerobic Session</h5>
        {/* <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
 
</div>
        {/*  */}
       
    </div>
  )
}

export default Training