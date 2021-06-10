import React from 'react'
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"

export default function Header() {
    return (
        <Container>
            <a>
                <img src="/images/spacex.jpeg" alt=""/>
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
                <CustomMenu/>
            </RightMenu>
            
        </Container>
    )
}

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    a {
        img {
            width: 200px;
            height: 90px;
        }
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

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

    a {
        font-weight: 1000;
        font-size: 14px;
        text-transform: uppercase;
        margin-right: 10px;
    }

`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`