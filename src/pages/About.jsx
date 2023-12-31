import React from 'react'
import './About.css'
import Icon from '@mdi/react'
import { mdiArrowLeftBold } from '@mdi/js'

function About() {

  return (
    <div className='home-page'>
      <h1 className='about-header'>About Page</h1>
    <p className='text-card'>Our company was founded in 1969 when our founder-Conrad Montbatten-was shot down while flying "humanitarian relief missions" in Laos. Conrad was, unfortunately, mistaken for a CIA covert operator-which his college buddies back at Yale thought was hilarious, and was detained by an obscure long-forgotten remnant of the Chinese Nationalist Army. While in captivity, Conrad was transported deep into the remote mountain-top jungles of an unregulated and disputed region between the borders of Burma, Laos, Thailand and China. Here, Conrad was held captive and forced to labor on the militants' coffee plantation. Many of his fellow captives had come from Java in Indonesia, where coffee cultivation was held in an almost mystical esteem, having been practiced on the island since pre-historic times. There these men had learned from their fathers, who in turn had learned from theirs, in an unbroken line of succession, the sacred art which they had perfected over thousands of years of continuous experience. Here, working side-by-side with these multi-generational coffee cultivators, Conrad began to gain their trust and admiration, leading them to share their time-honored and extensive knowledge of the inscrutable art of the coffee bean. Subsequently, after many years, our founder slowly absorbed the wisdom and knowledge of these artisanal savants gaining their permission to share the wealth of his experience with the outside world. Eventually, Conrad was able to steal enough money from his fellow prisoners enabling him to purchase his freedom from his captors. When he returned to Connecticut, he procured a loan from his prominent investment banker father, which he used to start Coffee Importers.</p>
    <h3 className='dlt-btn '><a className='rtn-btn' id="link-back" href='/shop'><Icon path={mdiArrowLeftBold} size={1} />Return to shopping</a></h3>
          
    </div>
  )
}

export default About