import {transactions} from './data.js';

import '../styles/current.css';

export default function CurrentTransaction(){
    let currentTotal = 0;

    return(
        <div className='current_transactions'>
            <h2>Current transactions</h2>
            {transactions.map((transaction)=>(
                <div className='transaction'>
                    <div className='transaction-date'>{transaction.date}</div>
                    <div className='transaction-particular'>{transaction.particular}</div>
                    <div style={{'flex-basis': '30%'}}>{transaction.amount}</div>
                </div>
            ))}

            <div className="total">
                {transactions.map((transaction)=>{
                    currentTotal += parseInt(transaction.amount)
                })}
                Total current amount : {currentTotal}
            </div>
        </div>
    )
}