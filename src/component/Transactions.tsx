const Transactions = (props:any) =>{
    const transactions = props.txns;
    return(
        <ol>
            {
                transactions.map((tran:any)=>{
                    return<li key={tran.id}>
                        <p>Id:{tran.id}</p>
                        <h5>Amount: {tran.amount}</h5>
                    </li>
                })
            }
        </ol>
    )
}
export default Transactions;