import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import admin from "../../assets/images/admindashboard.png"
import ig from "../../assets/images/ffartsysite.png"
import artsite from "../../assets/images/artsite.png"
import { AiOutlineGithub } from "react-icons/ai";
import AnimatedLetters from '../AnimatedLetters/Animated'
import ThemeProvider from '../../assets/images/videoPageDarkLight.png'
import YTUi from "../../assets/images/youtubecloneui.png"
import "./portfolio.scss"

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const products =[
    {
      id: 1,
      img: artsite,
      text: "Full stack React NextJS ECommerce site w/ Admin Dashboard ",
      subtext:"-MongoDB|Redux Toolkit|Rest API|Axios|PayPal|Cookie Auth|Cloudinary|Responsive Design",
      gitlink:"https://github.com/Faithvorite/nextjspersonalwebsite",
      link: "https://nextjspersonalartwebsite.vercel.app/",
    },
    {
      id: 2,
      img: admin,
      text: "Full stack Admin Dashboard",
      subtext:"-MongoDB|Redux Toolkit|Rest API|Axios|PayPal|Cookie Auth|Cloudinary|Responsive Design",
      gitlink:"https://github.com/Faithvorite/nextjspersonalwebsite",
      link: "https://github.com/Faithvorite",
    },
    {
      id: 3,
      img: ThemeProvider,
      text: "Full stack Admin Dashboard",
      subtext:"-MongoDB|Redux Toolkit|Rest API|Axios|PayPal|Cookie Auth|Cloudinary|Responsive Design",
      gitlink:"https://github.com/Faithvorite/youtubecloneui",
      link: "https://youtubecloneui.vercel.app/",
    },
    {
      id: 4,
      img: YTUi,
      text: "Full stack Admin Dashboard",
      subtext:"-MongoDB|Redux Toolkit|Rest API|Axios|PayPal|Cookie Auth|Cloudinary|Responsive Design",
      gitlink:"https://github.com/Faithvorite/youtubecloneui",
      link: "https://youtubecloneui.vercel.app/",
    },
    {
      id: 5,
      img: ig,
      link: "https://github.com/Faithvorite",
    },
    {
      id: 6,
      img: ig,
      link: "https://github.com/Faithvorite",
    }
  ]
  return (
<>
    <div className="pl">
      <div className="port-bg"></div>
      <div className="pl-texts">
      <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['F', 'a', 'i', 't', 'h', ' ', 'N', 'g','u','y','e','n']}
              idx={19}
            />
          </h1>
        <p className="pl-desc">
          I've made projects using JavaScript, HTML, & CSS, as well as frameworks such as React JS and Next JS. Check out my full stack projects implementing MongoDB and Cloudinary, as well as my front end projects that showcase my design capabilities.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item, i) => (
           <div className="p" key={i}>
           <div className="p-browser">
             <div className="p-circle"></div>
             <div className="p-circle"></div>
             <div className="p-circle"></div>
             <div className="gitlink">Visit deployed site or see respository here &#8594; <a href={item.gitlink}target="_blank" rel="noreferrer"><AiOutlineGithub href={item.link}target="_blank" rel="noreferrer"/></a></div>
           </div>
           <div className="ptext">{item.text}
           <div className="subtext">{item.subtext}</div>
           </div>
           <a href={item.link} target="_blank" rel="noreferrer">
             <img src={item.img} alt="" className="p-img" />
           </a>
           
         </div>
        ))}
      </div>
      
    </div>
    <Loader type="pacman" />
              </>
  )
}

export default Portfolio