import React, {useEffect, useState} from 'react';
import "./Nav.css";

const Nav = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 200){
                setShow(true);
            }else{
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "navBlack"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="nav__logo" className="nav__logo" />
            <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="nav__signIn" className="nav__signIn" />
        </div>
    )
}

export default Nav
