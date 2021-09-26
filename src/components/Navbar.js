import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-${props.mode} bg-${props.mode} fixed-top`}>
            <div className="container">
                <Link className="navbar-brand" to="/"><h2 style={{color: props.mode==='light'?'#107896':'#CCD1D1'}}>TextUtils</h2></Link>
                <div className={`form-check form-switch text-${props.mode}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==='light'?'#107896':'#CCD1D1'}}>Enable DarkMode</label>
                </div>
            </div>
        </nav>
    )
}