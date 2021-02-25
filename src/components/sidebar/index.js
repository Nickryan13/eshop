import React from 'react'
import {SidebarContainer, Icon, SidebarMenu, CloseIcon, SidebarLink, SidebarRoute, SideBtnWrap} from './SidebarElements'


const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon> 
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
            
        )
}

export default SideBar
