import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'

import Bowls from './pages/Bowls'
import Darts from './pages/Darts'
import DrivingRange from './pages/DrivingRange'
import Golf from './pages/Golf'
import PenaltyShootout from './pages/PenaltyShootout'
import Tekken from './pages/Tekken'

const Main = ()=> {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Bowls' component={Bowls}></Route>
            <Route exact path='/Darts' component={Darts}></Route>
            <Route exact path='/Driving-Range' component={DrivingRange}></Route>
            <Route exact path='/Golf' component={Golf}></Route>
            <Route exact path='/Penalty-Shootout' component={PenaltyShootout}></Route>
            <Route exact path='/Tekken' component={Tekken}></Route>
        </Switch>
    )
}

export default Main