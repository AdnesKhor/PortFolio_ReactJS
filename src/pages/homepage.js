import React from 'react'

import '../styles/homepage.css'

import Budget from '../components/budget'
import CurrentTransaction from '../components/currenttransaction'

export default function Homepage(){
    return(
        <div>
            <Budget />
            <CurrentTransaction />
        </div>
    )
}