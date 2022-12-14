import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import admin from "../../assets/images/admindashboard.png"
import ig from "../../assets/images/ffartsysite.png"
import artsite from "../../assets/images/artsite.png"
import { AiOutlineGithub } from "react-icons/ai";
import AnimatedLetters from '../AnimatedLetters/Animated'
import ThemeProvider from '../../assets/images/videoPageDarkLight.png'
import YTUi from "../../assets/images/youtubecloneui.png"
import NFT from "../../assets/images/nftapp.png"
import nordle from "../../assets/images/nordle.png"
import javascriptprojs from "../../assets/images/javascriptprojs.png"
import metaMessenger from "../../assets/images/meta_messenger.png"
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
      subtext:"-MongoDB|Redux Toolkit|Rest API|Axios|PayPal|Cookie Auth|Cloudinary|Responsive Design|Framer Motion",
      gitlink:"https://github.com/Faithvorite/nextjspersonalwebsite",
      link: "https://faithnguyenart.vercel.app/",
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
      img: YTUi,
      text: "React YouTube Clone UI Design",
      subtext:"-Responsive Design | Styled Components | Theme Provider ",
      gitlink:"https://github.com/Faithvorite/youtubecloneui",
      link: "https://youtubecloneui.vercel.app/",
    },
    {
      id: 4,
      img: javascriptprojs,
      text: "Javascript Fundamentals Showcase",
      subtext:"- Tapas App | Countdown Timer | Clock | Whack a Mole Game |",
      gitlink:"https://github.com/Faithvorite/javascriptprojects",
      link: "https://faithnguyenjs.vercel.app/",

    },
    {
      id: 5,
      img: metaMessenger,
      text: "Next.js 13 Messenger App",
      subtext:"-TypeScript | Tailwind CSS | Upstash | Redis | NextAuth | Pusher ",
      gitlink:"https://github.com/Faithvorite/meta-messenger",
      link: "https://my-meta-messenger.vercel.app/"
      
    },
    {
      id: 6,
      img: nordle,
      text: "React Native Wordle Game Clone",
      subtext: "Working Game Logic | Async Storage",
      gitlink: "https://github.com/Faithvorite/wordleapp",
      link: "https://github.com/Faithvorite/wordleapp",
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
          Full stack projects with MERN and responsive UI Designs that showcase my capabilities.
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