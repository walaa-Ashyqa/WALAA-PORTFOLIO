import React from 'react'
import './Skills.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProgressBar from 'react-customizable-progressbar'
 

function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className="container-skills" id='skills'>
    <div className="title"><h2>my Skills</h2></div>
  
    
    <Carousel responsive={responsive}>
    <div className='skills-item' >
    <ProgressBar
            radius={100}
            progress={70}
            cut={120}
            rotate={-210}
            strokeWidth={16}
            strokeColor="#6D68CE"
          
            trackStrokeWidth={8}
            trackStrokeColor="#e6e6e6"
            
            pointerRadius={0}
            initialAnimation={true}
            transition="1.5s ease 0.5s"
            trackTransition="0s ease"
        >
            <div className="indicator-volume">
                <div className="inner">
                   
                    <div className="percentage">{70}%</div>
                    
                </div>
                
            </div>
             
        </ProgressBar>
    <h3>ReactJS Developer</h3>
    </div>
    <div className='skills-item' >
    <ProgressBar
            radius={100}
            progress={80}
            cut={120}
            rotate={-210}
            strokeWidth={16}
            strokeColor="#6D68CE"
          
            trackStrokeWidth={8}
            trackStrokeColor="#e6e6e6"
            
            pointerRadius={0}
            initialAnimation={true}
            transition="1.5s ease 0.5s"
            trackTransition="0s ease"
        >
            <div className="indicator-volume">
                <div className="inner">
                   
                    <div className="percentage">{80}%</div>
                    
                </div>
                
            </div>
             
        </ProgressBar>
    <h3>Front-End Devlopment</h3>
    </div>
    <div className='skills-item' >
    <ProgressBar
            radius={100}
            progress={70}
            cut={120}
            rotate={-210}
            strokeWidth={16}
            strokeColor="#6D68CE"
          
            trackStrokeWidth={8}
            trackStrokeColor="#e6e6e6"
            
            pointerRadius={0}
            initialAnimation={true}
            transition="1.5s ease 0.5s"
            trackTransition="0s ease"
        >
            <div className="indicator-volume">
                <div className="inner">
                   
                    <div className="percentage">{70}%</div>
                    
                </div>
                
            </div>
             
        </ProgressBar>
    <h3>UI/UX DESIGN</h3>
    </div>
    <div className='skills-item' >
    <ProgressBar
            radius={100}
            progress={70}
            cut={120}
            rotate={-210}
            strokeWidth={16}
            strokeColor="#6D68CE"
          
            trackStrokeWidth={8}
            trackStrokeColor="#e6e6e6"
            
            pointerRadius={0}
            initialAnimation={true}
            transition="1.5s ease 0.5s"
            trackTransition="0s ease"
        >
            <div className="indicator-volume">
                <div className="inner">
                   
                    <div className="percentage">{70}%</div>
                    
                </div>
                
            </div>
             
        </ProgressBar>
    <h3>Back-End Devlopment</h3>
    </div>
</Carousel>
</div>
  )
}

export default Skills
