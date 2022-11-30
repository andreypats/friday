import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <div>
                <NavLink to={'/login'} className={navData => navData.isActive ? s.active : s.item }>Login</NavLink>
            </div>
            <div>
                <NavLink to={'/registration'} className={ navData => navData.isActive ? s.active : s.item }>Registration</NavLink>
            </div>
            <div>
                <NavLink to={'/profile'} className={ navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/error'} className={ navData => navData.isActive ? s.active : s.item }>ErrorPage</NavLink>
            </div>
            <div>
                <NavLink to={'/newPassword'} className={ navData => navData.isActive ? s.active : s.item }>NewPassword</NavLink>
            </div>
            <div>
                <NavLink to={'/recoveryPassword'} className={ navData => navData.isActive ? s.active : s.item }>RecoveryPassword</NavLink>
            </div>
            <div>
                <NavLink to={'/test'} className={ navData => navData.isActive ? s.active : s.item }>TestPage</NavLink>
            </div>
        </nav>
    )
}