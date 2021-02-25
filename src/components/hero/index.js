import React, {useState} from 'react'
import Navbar from '../navbar'
import SideBar from '../sidebar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP,HeroBtn} from './heroelements';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
       <HeroContainer>
           <Navbar toggle={toggle} />
           <SideBar isOpen={isOpen} toggle={toggle} />
           <HeroContent>
               <HeroItems>
                   <HeroH1>Greatest Pizza Ever</HeroH1>
                   <HeroP>Ready in seconds!</HeroP>
                   <HeroBtn>Place Order</HeroBtn>
               </HeroItems>
           </HeroContent>

       </HeroContainer>
    )
}

export default Hero
