import { useEffect, useState } from "react"
import { getAccounts } from "./utils/network/routes";
import {accountData} from "./seeds"
import Accounts from "./component/Accounts";
function App() {
  const [accounts, setAccounts] = useState([...accountData]);
  useEffect(()=>{

    const fetchAccounts = async() =>{
      // Fetching account list from API
      // const response:any = await getAccounts("https://firebasestorage.googleapis.com/v0/b/bplay-bab3c.appspot.com/o/plaid%2Faccount.json?alt=media&token=0f4b176d-ad1e-4105-9918-bdc37098c0d8");
      console.log(accounts);
    }
    fetchAccounts();
  },[]);
  return(
    <div>
      <h1>Hello from user accounts</h1>
      {
        accounts.map((account:any)=>{
          return(
            <Accounts id={account.id} name={account.name} />
          )
        })
      }
    </div>
    
  )
}

export default App
