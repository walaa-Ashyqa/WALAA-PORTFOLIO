import React from 'react'
import "./Email.css"
function Email() {
  return (
    <div className='container-email' id='submit'>
        <div className="email-content"> 
        <h2>see my projects at once & leave your email adress here...</h2>
        </div>
        <div className="module">
       <div className='email-action' >
        <input type="text" placeholder="Enter Your Email Here..."/>
        <button>Submit</button>
       </div>
       </div>
        </div>
  )
}

export default Email