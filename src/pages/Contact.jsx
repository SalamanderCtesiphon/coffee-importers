import React from 'react'
import Icon from '@mdi/react'
import { mdiArrowLeftBold } from '@mdi/js'

function Contact() {
  
  return (
    <div className='home-page'>
        <h1>Contact</h1>
    <p className='text-card'>Please don't attempt to contact us. This is not a real company. This is just a portfolio project that I am doing in an attempt to get a job.</p>
    <br />
    <p className='text-card'>Now, if your are a recruiter or a human resources manager please do contact me here:</p>
    <a href='https://www.linkedin.com/in/shannon-brookshire-817577265/' id='social'> @Linked In </a>
    <h3 className='dlt-btn '><a className='rtn-btn' id="link-back" href='/shop'><Icon path={mdiArrowLeftBold} size={1} />Return to shopping</a></h3>
          
    </div>
  )
}

export default Contact