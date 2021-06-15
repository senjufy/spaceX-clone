import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"

export default function Footer() {

    const [burgerStatus, setBurgerStatus] = useState(false)

    return (
        <Container>
            <Menu>
                <a href="#">Twitter</a>
                <a href="#">Youtube</a>
                <a href="#">Instagram</a>
                <a href="#">Flickr</a>
                <a href="#">Linkdn</a>
                <a href="#">Privacy Policy</a>
            </Menu>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: 80px;
    background-color: black;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 1000;
        font-size: 13px;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        position: relative;
        margin-top: 33px;
    }

`

