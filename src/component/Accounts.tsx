const Accounts = (props:any) =>{
    const {account} = props;

return(
    <div>
        <div style={{ border:"1px solid black",margin:"5px", width:"30%", padding:"5px"}}>
        <p style={{margin:"3px"}}>ID: {account.id}</p>
        <p style={{margin:"3px"}}> Name: {account.name}</p>
        <p style={{margin:"3px"}}>Balance:{account.current_balance}</p>
        </div>
    </div>
)
}
export default Accounts;