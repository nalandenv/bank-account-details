import { useCallback, useEffect, useMemo, useState } from "react"
import { getData } from "./utils/network/routes";
import {accountData} from "./seeds"
import Accounts from "./component/Accounts";
import Transactions from "./component/Transactions";
function App() {
  const [accounts, setAccounts] = useState([...accountData]);
  const [currentAccount, setCurrentAccount] = useState([]);
  const [txnsCache, setTxnsCache] = useState<any>({});
  useEffect(()=>{

    const fetchAccounts = async() =>{
      // Fetching account list from API
      // const response:any = await getData("https://firebasestorage.googleapis.com/v0/b/bplay-bab3c.appspot.com/o/plaid%2Faccount.json?alt=media&token=0f4b176d-ad1e-4105-9918-bdc37098c0d8");
      // console.log(response);
    }
    fetchAccounts();
  },[]);

  //Method to change current account data
  const _handleTransactions = async (account:any) =>{
    const {id} = account;
    console.log(id);
    // const transaction_data = await getData(URL);
    // setCurrentAccount(transaction_data);
    if(id in txnsCache){
      console.log("cached")
      console.log(txnsCache);
    } else {
      console.log("added to cache")
      txnsCache[id] = account.txns;
      console.log(txnsCache);
    }
  }
  return(
    <div>
      <h1>Hello from user accounts</h1>
      {
        // mapping over all the available accounts
        accounts.map((account:any)=>{
          return(
            <div key={account.id} style={{cursor:"pointer"}} onClick={()=>{_handleTransactions(account)}}>
              <Accounts id={account.id} name={account.name} />
            </div>
          )
        })
      }
      <div>
        {/* Component to display all the available transactions for selected account */}
        {/* <Transactions txns={currentAccount}/> */}
      </div>
    </div>
    
  )
}

export default App
