import '../styles/taccount.css';

export default function TAccount(){
    
    return(
        <div className = 't-account'>
            <h3>Account Name</h3>
            <div className='account-debit-side'>
                <div className='column_heading'>
                    <span>Date</span>
                    <span>Particular</span>
                    <span>Amount</span>
                </div>
            </div>

            <div className="separator"></div>

            <div className='account-credit-side'>
                <div className='column_heading'>
                    <span>Date</span>
                    <span>Particular</span>
                    <span>Amount</span>
                </div>
            </div>
        </div>
    )
}