import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to={'/login'} className={navData => navData.isActive ? s.active : s.item}>Login</NavLink>
            <NavLink to={'/registration'}
                     className={navData => navData.isActive ? s.active : s.item}>Registration</NavLink>
            <NavLink to={'/profile'} className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            <NavLink to={'/newPassword'}
                     className={navData => navData.isActive ? s.active : s.item}>NewPassword</NavLink>
            <NavLink to={'/recoveryPassword'}
                     className={navData => navData.isActive ? s.active : s.item}>RecoveryPassword</NavLink>
            <NavLink to={'/test'} className={navData => navData.isActive ? s.active : s.item}>TestPage</NavLink>
        </header>
    )
}