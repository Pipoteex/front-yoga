import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Bars } from './icons/bars.svg'
import { ReactComponent as Across } from './icons/across.svg'
import {Animated} from "react-animated-css";
import { useNavigate } from 'react-router-dom'

const StyledNavBar = styled.div`
    position: fixed;
    width: 100%;
    height: 80px;
    z-index: 200;
    background-color: transparent;/* #fef3f1 */
`

const StyledNavBarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
`  

const StyledLogo = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    margin-left: 20px;
    font-size: 3vw;
    color: white;
`

const StyledBarsIcon = styled.div`
    padding: 10px;
    cursor: pointer;
    margin-right: 20px;
    svg{
        width: 2.5vw;
        fill: white;
    }
`

const StyledItemsContainer = styled.div`
    padding: 20px;
    background-color: #fef3f1;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, .4);
`

const StyledItem = styled.div`
    padding: 20px;
    cursor: pointer;
    font-family: "Raleway", sans-serif;
    color: #fef3f1;
    font-size: 2vw;
    &:hover{
        text-decoration: underline;
    }
`

export const NavBar = ( props ) => {

    const [viewItems, setViewItems] = useState(false)

    const navigation = useNavigate()

    const handleOnClick = (event) =>{
        
        document.querySelector(`#${ event.target.getAttribute("name") }`).scrollIntoView({behavior: 'smooth'});
          
    }

    return (
        <StyledNavBar>

            <StyledNavBarHeader style={ viewItems ? { borderBottom: "2px solid #fef3f1" } : {} }>

                <StyledLogo >
                    Instituto Sol Naciente
                </StyledLogo>
                <StyledBarsIcon onClick={ () => setViewItems( !viewItems ) }>
                    {
                        viewItems
                        ?
                        <Across></Across>
                        :
                        <Bars></Bars>
                    }
                </StyledBarsIcon>

            </StyledNavBarHeader>
                
            {
                viewItems
                ?
                <Animated animationIn="fadeInDown" animationInDuration={400} animationOutDuration={400} isVisible={viewItems}>
                    <StyledItemsContainer>
                        <StyledItem name="about" onClick={ handleOnClick }>
                            Sobre nosotros
                        </StyledItem>
                        <StyledItem name="services" onClick={ handleOnClick } >
                            Servicios
                        </StyledItem>
                        <StyledItem name="portfolio" onClick={ handleOnClick }>
                            Galeria
                        </StyledItem>
                        <StyledItem name="comision" onClick={ () => navigation("/comision_yoga") } >
                            Comisi??n Misionera de Yoga
                        </StyledItem>
                    </StyledItemsContainer>
                </Animated> 
                :
                ""
            }        

        </StyledNavBar>
    )
}
