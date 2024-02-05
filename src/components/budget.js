import React from 'react'
import {total_expense_data} from './data.js'

import '../styles/budget.css'


export default function Budget(){
    let total = 0;
    total_expense_data.map((expense) => (total += expense.amount));

    return(
        <div className = "budget_table">
            <h2>Budget</h2>
            {total_expense_data.map((cost_and_expense) =>(
                <div className='cost_and_expense'>
                    <div className='cost_and_expense_particular'>{cost_and_expense.particular}</div>
                    <div className='cost_and_expense_amount'>{cost_and_expense.amount}</div>
                </div>
            ))}

            <div className='total_expenses cost_and_expense_amount'>{total}</div>
        </div>
    )
}