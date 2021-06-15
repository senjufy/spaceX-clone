import React, {useState, useEffect} from 'react'
import "./Header.css"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(true)
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div className={`container ${show && "container__black"}`}>
            <a>
                <img src="/images/spacex-01.png" alt=""/>
            </a>

            <div className="menu">
                <a className="tag" href="#">Falcon 9</a>
                <a className="tag" href="#">Falcon Heavy</a>
                <a className="tag" href="#">Dragon</a>
                <a className="tag" href="#">Starhip</a>
                <a className="tag" href="#">Human Spacelight</a>
                <a className="tag" href="#">Rideshare</a>
            </div>

            <div className="rightMenu">
                <a className="tag" href="#">Shop</a>
                <MenuIcon onClick={() => setBurgerStatus(false)}/>
            </div>
            
            <div className={`burgerNav ${burgerStatus && "burgerShow"}`}>
                <div className="closeWrapper">
                <CloseIcon className="close" onClick={() => setBurgerStatus(true)}/>
                </div>
                <li><a href="#">Mission</a></li>
                <li><a href="#">Launches</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Updates</a></li>
                <li><a href="#">Shop</a></li>
            </div>

        </div>
    )
}

export default Header
