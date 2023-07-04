import React from 'react'
import bg from '../../atoms/images/bg.jpg'

import './About.css'
import WhyChoose from '../WhyChoose/WhyChoose'
function About() {
const giveAlert=()=>{
alert('clicked from about us section')
    }
  return (
    <>
    
    <div id="scrollspyHeading2" className='fullabout'>
    {/* <figure class="text-center test">
  <blockquote class="blockquote">
    <h1 className='text'>ABOUT</h1>
  </blockquote>
  
</figure> */}
   
        <div class="card mb-3 fullcard">
  <div class="row g-0">
    <div class="col-md-4 video">
    <iframe
            width="360"
            height="500"
            src="https://www.youtube.com/embed/X_9VoqR5ojM"
            title="YouTube video player"
            // frameborder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h1 class="card-title titledown">About Us</h1>
        <p class="card-text para"> Through our 7-day programme we offer you some useful life questions
            to think about. We also offer you some answers on these questions
            but we encourage you to learn more about it yourself. You can read
            it all at once but we advise you to read and think about your life
            for the next 7 days. It may become the most valuable week of your
            life! It can be very valuable in your life. So take some time and
            invest one week in your life and future!</p>
            <button type="button" class="btn btn-danger" onClick={giveAlert}>Learn More</button>
      </div>
    </div>
  </div>
</div>

</div>
<WhyChoose/>
    </>
  )
}

export default About