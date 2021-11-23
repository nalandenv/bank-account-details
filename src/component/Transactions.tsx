import Accounts from "./Accounts";
import "./Transactions.css"
const Transactions = (props:any) =>{
    const {isLoading, account, txns:transactions} = props;
    if(!!isLoading){
        return <div className="loader"></div>
    }
    return(
        <div>
            <h1>Transaction Log for account</h1>
            <Accounts account={account} />
            <table>
            <tbody>
                <tr>
                <th className="col-sm" >Date</th>
                <th className="col-sm">Ref</th>
                <th className="col-lg">Name</th>
                <th className="col-sm">Amount</th>
                <th className="col-md">Category</th>
                <th className="col-sm">Type</th>
                </tr>
            {
                transactions.map((tran:any)=>{
                    return(
                        <tr key={tran.id}>
                            <td className="col-sm">{tran.date.slice(0,10)}</td>
                            <td className="col-sm">{tran.id}</td>
                            <td className="col-lg">{tran.name}</td>
                            <td className="col-sm">{tran.amount}</td>
                            <td className="col-sm">{tran.category}</td>
                            <td className="col-sm">{tran.type}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </div>
    )
}
export default Transactions;