import React from 'react'

import '../styles/homepage.css'

import Budget from '../components/budget'
import CurrentTransaction from '../components/currenttransaction'
import TAccount from '../components/taccount'

export default function Homepage(){
    return(
        <div style={{display: 'flex'}}>
            <div>
                <Budget />
                <CurrentTransaction />
            </div>

            <TAccount />
        </div>
        
    )
}