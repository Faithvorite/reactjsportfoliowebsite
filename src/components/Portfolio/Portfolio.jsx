import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import ig from "../../assets/images/ffartsysite.png"
import AnimatedLetters from '../AnimatedLetters/Animated'
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
      img: ig,
      link: "http://lama.dev",
    },
    {
      id: 2,
      img: ig,
      link: "http://lama.dev",
    },
    {
      id: 3,
      img: "../../assets/images/ffartsysite.png",
      link: "http://lama.dev",
    },
    {
      id: 4,
      img: ig,
      link: "http://lama.dev",
    },
    {
      id: 5,
      img: ig,
      link: "http://lama.dev",
    },
    {
      id: 6,
      img: ig,
      link: "http://lama.dev",
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
          creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item, i) => (
           <div className="p" key={i}>
           <div className="p-browser">
             <div className="p-circle"></div>
             <div className="p-circle"></div>
             <div className="p-circle"></div>
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