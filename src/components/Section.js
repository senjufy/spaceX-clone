import React from 'react'
import styled from 'styled-components'

export default function Section({backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h3>Recent Launch</h3>
                <h1>SXM-8 MISSION</h1>
                <p></p>
            </ItemText>

            <Group>
                <Button>
                    <a>Rewatch</a>
                </Button>
            </Group>
            
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    //background-image: url("/images/model-s.jpg");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
    height: auto;
    width: 455px;
    padding-top: 58vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 840px;

    h3 {
        padding:0 0 5px;
        font-weight: 200;
        font-size: 19px;
        text-transform: uppercase;
    }

    h1 {
        padding:0 0 10px;
        font-size: 45px;
        text-transform: uppercase;
    }
`

const Group = styled.div`
    height: auto;
    width: 455px;
    display: flex;
    margin-right: 840px;
    padding-bottom: 120px;
`

const Button = styled.div`
    border: 2px solid white;
    padding: 15px 49px;
    cursor: pointer;

    a {
        font-weight: 1000;
        font-size: 13px;
        text-transform: uppercase;
    }
    
`
