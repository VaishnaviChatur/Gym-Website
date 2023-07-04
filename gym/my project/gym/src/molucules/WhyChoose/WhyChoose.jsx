import React from 'react'
import bg from '../../atoms/images/bg.jpg'
function WhyChoose() {
  return (
    <div>
        <div class="card mb-3 fullcard">
  <div class="row g-0">
 
    <div class="col-md-7">
      <div class="card-body">
        <h1 class="card-title titledown">Why Choose Us ?</h1>
        <p class="card-text">   <ul>
              <li>
                <strong >
                  Consultation with expert
                </strong>
                <p>
                  Plus Fitness franchisee Jacob Awad first started his journey
                  with the brand in 2013 after purchasing Plus Fitness Seven
                  Hills from a previous owner. In 2017 Jacob then went on to
                  purchase his second location, Plus Fitness Northmead.
                </p>
              </li>
              <li>
                <strong> workout faculitis</strong>
                <p>
                  Plus Fitness franchisee Jacob Awad first started his journey
                  with the brand in 2013 after purchasing Plus Fitness Seven
                  Hills from a previous owner. In 2017 Jacob then went on to
                  purchase his second location, Plus Fitness Northmead.
                </p>
              </li>
            </ul></p>
            {/* <button type="button" class="btn btn-danger" onClick={giveAlert}>Learn More</button> */}
      </div>
    </div>
    <div class="col-md-5 video">
    <iframe
              width="360"
              height="500"
              src='https://www.youtube.com/embed/TFO9hBtLVec'

              title="YouTube video player"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
    </div>
</div>
</div>
</div>
   
  )
}

export default WhyChoose