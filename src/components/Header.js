import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"

export default function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false)

    return (
        <Container>
            <a>
                <img src="/images/spacex-01.png" alt=""/>
            </a>

            <Menu>
                <a href="#">Falcon 9</a>
                <a href="#">Falcon Heavy</a>
                <a href="#">Dragon</a>
                <a href="#">Starhip</a>
                <a href="#">Human Spacelight</a>
                <a href="#">Rideshare</a>
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RightMenu>
            
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>
                <li><a href="#">Mission</a></li>
                <li><a href="#">Launches</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Updates</a></li>
                <li><a href="#">Shop</a></li>
            </BurgerNav>

        </Container>
    )
}

const Container = styled.div`
    min-height: 90px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 110px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    a {
        img {
            width: 200px;
            height: auto;
        }
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-right: 300px;

    a {
        font-weight: 1000;
        font-size: 14px;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    
    a {
        font-weight: 1000;
        font-size: 14px;
        text-transform: uppercase;
        margin-right: 20px;
        
    }

`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: black;
    width: 350px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: end;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(255,255,255, 0.3);
        margin-right: 40px;

        a {
            font-weight: 600px;
        }
    }
    
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    margin-right: 40px;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`