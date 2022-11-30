import React from "react";
import s from './PagesRoutes.module.css'
import { Route, Routes } from 'react-router-dom';
import { Login } from "./components/login/Login";
import { NewPassword } from "./components/password/NewPassword";
import { RecoveryPassword } from "./components/password/RecoveryPassword";
import { Profile } from "./components/profile/Profile";
import { Registration } from "./components/registration/Registration";
import { ErrorPage } from "./components/errorPage/ErrorPage";
import { TestPage } from "./components/testPage/TestPage";

export const PagesRoutes = () => {
    return (
        <div className={s.pagesRoutes}>
            <Routes>
                <Route path={"/login/*"} element={<Login/>}/>
                <Route path={"/registration/*"} element={<Registration/>}/>
                <Route path={"/profile/*"} element={<Profile/>}/>
                <Route path={"/error/*"} element={<ErrorPage/>}/>
                <Route path={"/newPassword/*"} element={<NewPassword/>}/>
                <Route path={"/recoveryPassword/*"} element={<RecoveryPassword/>}/>
                <Route path={"/test/*"} element={<TestPage/>}/>
            </Routes>
        </div>
    )
}