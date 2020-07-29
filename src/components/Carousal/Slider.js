import React, { useState, useEffect } from 'react'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dot'
import './Slider.css'
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';


import keyboard from '../../images/keyboard.jpg'
import opentowork from '../../images/opentowork.jpg'
import study from '../../images/study.jpg'
import worktable from '../../images/worktable.jpg'

import { fadeInLeft } from 'react-animations';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
const fadeInleftAnimation = keyframes`${fadeInLeft}`;
const FadyDiv = styled.div`

  animation: 2.5s ${fadeInleftAnimation};

`;

const bounceAnimation = keyframes`${bounce}`;
const BouncyDiv = styled.p`

  animation: 1s ${bounceAnimation};

`;


const images = [
    keyboard,
    worktable,
    study,
    opentowork

]

const Button = styled.button`
 background: transparent;
margin-top: 15px;
min-width: 200px;
color: black;
height: 60px;
border: 1px solid black;
word-wrap: break-word;
paddding: 50px;
transition: all 1s;
&:hover {
    color: white;
background-color: black;
cursor: pointer;

    
  }

`

const descriptions = [
    "Hello! I am Vikas",
    "I am a Software Developer",
    "Currently in Final semester of my Masters",
    "Open to Graduate and Internship Oportunities"

]

const buttondescriptions = [
    "View Resume",
    "View Projects",
    "Academic results",
    "Linkedin"
]

const buttonlinks = [
    'https://drive.google.com/file/d/1qk6FPSpnY4ekYHzuAnQ3CDgyL7IETP-d/view?usp=sharing',
    'https://github.com/s3732508',
    'https://drive.google.com/file/d/1lodo4TzD5qLRUpts-9XzIPKaWWbADI5k/view?usp=sharing',
    'https://www.linkedin.com/in/vikasreddyperi/',
    'https://dppjwo5jdgstm.cloudfront.net/'


]






const Slider = () => {

    const [size, setSize] = React.useState(window.innerWidth > 600 ? window.innerWidth - 240 : window.innerWidth)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [translate, setTranslate] = React.useState(0)
    const [seconds, setSeconds] = useState(0);
    const [image, setImage] = useState(images[0]);
    const [description, setDescription] = useState(descriptions[0])
    const [buttondescription, setButtonDescription] = useState(buttondescriptions[0])



    function reset() {
        setSeconds(5);

    }

    React.useEffect(() => {
        //Attach event on window which will track window size changes and store the width in state
        let interval = null;
        const width = window.innerWidth
        var handleWindowResize = null
        if (width > 600) {
            handleWindowResize = () => setSize(window.innerWidth - 240)
            setTranslate((activeIndex) * size)
        }
        else {
            handleWindowResize = () => setSize(window.innerWidth)
            setTranslate((activeIndex) * size)
        }



        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [size])


    React.useEffect(() => {
        let interval = null;
        if (seconds >= 6 * images.length) {
            reset();
        } else {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);

                if (seconds % 6 === 0 && seconds != 0) {
                    nextSlide()
                }
            }, 1000);

        }

        return () => clearInterval(interval);
    }, [seconds]);



    const nextSlide = () => {
        if (activeIndex === images.length - 1) {
            setActiveIndex(0)
            setTranslate(0)
            setImage(images[0])
            setDescription(descriptions[0])
            setButtonDescription(buttondescriptions[0])

        }

        else {
            setActiveIndex(activeIndex + 1)
            setTranslate((activeIndex + 1) * size)
            setImage(images[activeIndex + 1])
            setDescription(descriptions[activeIndex + 1])
            setButtonDescription(buttondescriptions[activeIndex + 1])

        }

    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            setActiveIndex(images.length - 1)
            setTranslate((images.length - 1) * size)
            setImage(images[images.length - 1])
            setDescription(descriptions[descriptions.length - 1])
            setButtonDescription(buttondescriptions[buttondescriptions.length - 1])

        }

        else {
            setActiveIndex(activeIndex - 1)
            setTranslate((activeIndex - 1) * size)
            setImage(images[activeIndex - 1])
            setDescription(descriptions[activeIndex - 1])
            setButtonDescription(buttondescriptions[activeIndex - 1])

        }

    }

    const setSlide = (activeindex) => {
        console.log(activeindex)
        setActiveIndex(activeindex)
        setTranslate(activeindex * size)
        setImage(images[activeindex])
        setDescription(descriptions[activeindex])
        setButtonDescription(buttondescriptions[activeindex])


    }

    const height = window.innerHeight;



    return (<div id='slider' style={{ postition: 'relative', overflow: 'hidden', marginTop: 0, padding: 0 }} >

        <SliderContent
            translate={0}
            transition={1.2}
            width={size}
            height={height}
        >
            {/*images.map((slide, i) => (
                <Slide key={slide + i} content={slide}>
                </Slide>

            ))*/}
            <Slide content={image}>
                <Dots activeindex={activeIndex} size={size} slides={images} handleClick={setSlide} />
                <div style={{
                    marginTop: '200px', height: '135px', background: 'transparent', display: 'flex',
                }}>

                    <BouncyDiv className='description' style={{
                        textAlign: 'left', marginLeft: '20px',
                    }} data-animate-effect="fadeInLeft" > {description}<br />
                        <Button onClick={(e) => {
                            e.preventDefault();
                            window.location.href = buttonlinks[activeIndex];
                        }} >{buttondescription}
                        </Button>
                    </BouncyDiv>
                </div>
            </Slide>
        </SliderContent>

        <FadyDiv class="container" style={{ width: { size }, marginTop: '30px', width: '100%' }}>
            <div class='row'>
                <div class='col-sm-5 col-lg-5 col-xl-5' style={{ margin: '0px 30px' }}>
                    <p class='heading' > Who am I </p>
                </div>
            </div>
        </FadyDiv>
        <FadyDiv class="container" style={{ margin: '0px 0px', maxWidth: '100%' }}>
            <div class='row'>
                <div class='col-sm-11 col-lg-11 col-xl-11' style={{ margin: '0px 30px' }}>
                    I am a Final year master's student at RMIT University. I am currently pursuing master's in information technology with a GPA of 3.4. I always love to learn and apply new technologies in Software Engineering. My calm and observing attitude always help me fit in with the team. I am currently looking for Internships and Graduate jobs to start my career. My recent work experience includes working as a developer for Shine Solutions as part of my coursework Project.
                         </div>
            </div>
        </FadyDiv>

        <FadyDiv class="container" style={{ width: { size }, marginTop: '30px', width: '100%' }}>
            <div class='row'>
                <div class='col-sm-5 col-lg-5 col-xl-5' style={{ margin: '0px 30px' }}>
                    <p class='heading' > Timeline</p>
                </div>
            </div>
        </FadyDiv>

        <FadyDiv class="container" style={{ margin: '0px 0px', maxWidth: '100%' }}>
            <div class='row'>
                <div class='col-sm-11 col-lg-11 col-xl-11' style={{ margin: '0px 30px' }}>
                    <Timeline style={{ justifyContent: 'flex-start' }} align="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot style={{ backgroundColor: '#CED5CE', color: 'black' }}>
                                    < WbSunnyIcon />
                                </TimelineDot >

                                <TimelineConnector style={{ height: 100, backgroundColor: 'black' }}/>
                            </TimelineSeparator>
                            <TimelineContent>Currently studying final semester and <br />working as a Research Officer in a project with Shine Solutions </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot style={{ backgroundColor: '#EAD2D2', color: 'black' }}>
                                    < WorkIcon />
                                </TimelineDot >


                                <TimelineConnector style={{ height: 100, backgroundColor: 'black'  }} />
                            </TimelineSeparator>
                            <TimelineContent>Worked as a Developer with <br />Shine Solutions<br />as part of my semester Project</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot style={{ backgroundColor: '#CED5CE', color: 'black' }}>
                                    < SchoolIcon />
                                </TimelineDot >
                                <TimelineConnector style={{ height: 100, backgroundColor: 'black' }} />
                            </TimelineSeparator>
                            <TimelineContent>Masters in Information Technology<br />RMIT University, Melbourne, Australia</TimelineContent>
                        </TimelineItem>
                        <TimelineItem >
                            <TimelineSeparator >
                                <TimelineDot style={{ backgroundColor: '#EAD2D2', color: 'black'}}>
                                    < SchoolIcon />
                                </TimelineDot >
                            </TimelineSeparator>
                            <TimelineContent>Bachelors in Electronics Engineering<br /> JNTU, Hyderabad, India</TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </FadyDiv>

        <FadyDiv class="container" style={{ width: { size }, marginTop: '0px', width: '100%' }}>
            <div class='row'>
                <div class='col-sm-5 col-lg-5 col-xl-5' style={{ margin: '0px 30px' }}>
                    <p class='heading' > Experience </p>
                </div>
            </div>
        </FadyDiv>
        <FadyDiv class="container" style={{ margin: '0px 0px',  maxWidth: '100%' }}>
            <div class='row' >
                <div class='col-sm-11 col-lg-11 col-xl-11' style={{ margin: '0px 30px' }}>
                    We have developed an application named MONITO which takes usage data of users through AWS CloudMetrics and allows the admins to monitor the usage. It can visualize the usage data of AWS EC2 instances and AWS Lambdas. It can be further improved to provide suggestions based on the data. Architecture includes mostly AWS services. Authentication of users is done using AWS Cognito and routing through API Gateway. Lambdas were written using python and Node.js to read and filter data from Database. During the whole project, Continuous Deployment was established using AWS CodePipeline as part of the process. My contribution includes working on Front-end and establishing AWS Cognito User Pool and Continuous Deployment. 
                         </div>
                <Button class='col-sm-11 col-lg-11 col-xl-11' style={{ margin: 'auto', display: 'flex' }} onClick={(e) => {
                    e.preventDefault();
                    window.location.href = buttonlinks[4];
                }} >Visit MONITO
                </Button>
            </div>
        </FadyDiv>



    </div>)
}

export default Slider