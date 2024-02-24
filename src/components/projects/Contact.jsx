import React from 'react'
import './Contact.css'


function Contact() {
  return (
  <section className="contact" id="Contact">
  <div className="container-contact">
  <div className='title'><h2 >Get in Touch</h2></div>
        
      <div className="contact-content">
      <p className=" contact-data">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur adipisci
      tempore porro distinctio harum tenetur facere nostrum praesentium beatae impedit corrupti, 
      atque maiores consectetur libero perspiciatis veritatis quibusdam ipsa saepe.</p>
    <form className="contact-form">

      <div className="contact-first-form">
         
          <input type="text" className="form-control" placeholder="Name" id="exampleInputEmail1" aria-describedby="emailHelp" />
       
          <input type="text" className="form-control" placeholder="Email" />
         
      </div>

      <div className="contact-first-form">
        <input type="text" className="form-control" placeholder="Address" />
      </div>
      <div className="contact-first-form">
        <textarea className="form-control" placeholder="Message.." id="floatingTextarea2" style={{height: 100}} defaultValue={""} />
      </div>
      <button type="submit" className="contact-button">
        send Message
      </button>
    </form>
      </div>
    
  </div>

</section>

  
  )
}

export default Contact