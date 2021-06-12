import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

export default function Section(
    {
        backgroundImg,
        caption,
        title,
        description,
        btnText
    }
    ) {
    return (
        <Wrap bgImage={backgroundImg}>
            {description ?
                    <div>
                        <Fade bottom>
                            <ItemTextSec>
                                <h3>{caption}</h3>
                                <h1>{title}</h1>
                                <p>{description}</p>
                            </ItemTextSec>

                            <GroupNew>
                                <ButtonNew>
                                    <a>{btnText}</a>
                                </ButtonNew>
                            </GroupNew>
                        </Fade>
                    </div>
            :   
                    <div>
                        <Fade bottom>
                            <ItemText>
                                <h3>{caption}</h3>
                                <h1>{title}</h1>
                            </ItemText>

                            <Group>
                                <Button>
                                    <a>{btnText}</a>
                                </Button>
                                {title === "SXM-8 Mission" &&
                                    <DownArrow src="/images/down-arrow.svg"/>
                                }
                            </Group>  
                        </Fade>  
                    </div>
               
            }
            
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
        padding:0 0 8px;
        font-weight: 200;
        font-size: 19px;
        text-transform: uppercase;
    }

    h1 {
        padding:0 0 40px;
        font-size: 45px;
        text-transform: uppercase;
        text-align: start;
    }
`

const Group = styled.div`
    height: auto;
    width: 455px;
    margin-right: 840px;
    padding-bottom: 120px;
`

const Button = styled.div`
    width: 170px;
    border: 2px solid white;
    padding: 15px 49px;
    cursor: pointer;

    background-image: linear-gradient(transparent, transparent 50%, white 50%, white);
    background-size: 100% 200%;
    -webkit-transition: background-position .3s;
    transition: background-position .3s;
    

    a {
        font-weight: 1000;
        font-size: 13px;
        text-transform: uppercase;
    }

    :hover {
        background-position: 0 -100%;

        a {
            color: black;
        }
    }
    
`

const ItemTextSec = styled.div`
    height: auto;
    width: 455px;
    padding-top: 46vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 840px;

    h3 {
        padding:0 0 8px;
        font-weight: 200;
        font-size: 19px;
        text-transform: uppercase;
    }

    h1 {
        padding:0 0 25px;
        font-size: 45px;
        text-transform: uppercase;
        text-align: start;
    }

    p {
        padding:0 0 40px;
        text-align: start;
    }
`

const GroupNew = styled.div`
    height: auto;
    width: 455px;
    display: flex;
    margin-right: 840px;
    padding-bottom: 120px;
`

const ButtonNew = styled.div`
    border: 2px solid white;
    padding: 15px 49px;
    cursor: pointer;

    background-image: linear-gradient(transparent, transparent 50%, white 50%, white);
    background-size: 100% 200%;
    -webkit-transition: background-position .3s;
    transition: background-position .3s;

    a {
        font-weight: 1000;
        font-size: 13px;
        text-transform: uppercase;
    }
    
    :hover {
        background-position: 0 -100%;

        a {
            color: black;
        }
    }
`

const DownArrow = styled.img`
    margin-left: 630px;
    margin-top: 65px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`