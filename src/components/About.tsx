import React from "react";
import {PageTemplate, AboutMenu} from './index'
import {Route} from 'react-router-dom'
import {Company, History,Service, Location} from "./aboutMenu/"

const About = ({match}) => <PageTemplate>
    <section className="about">
        <Route component={AboutMenu}/>
        <Route exat path={"/about/"} component ={Company}/>
        <Route path={"/about/history"} component ={History}/>
        <Route path={"/about/Service"} component ={Service}/>
        <Route path={"/about/Location"} component ={Location}/>
    </section>
</PageTemplate>
export default About