import {  useEffect, useState } from "react"
import { getData } from "./utils/network/routes";
import {accountData} from "./seeds"
import Accounts from "./component/Accounts";
import Transactions from "./component/Transactions";
function App() {
  const [accounts, setAccounts] = useState<any>([]);
  const [currentAccountTxns, setCurrentAccountTxns] = useState([]);
  const [currentAccount, setCurrentAccount] = useState([]);
  const [txnsCache, setTxnsCache] = useState<any>({});
  const [isLoading, setIsLoading] = useState<any>(false);
  useEffect(()=>{
    setIsLoading(true);
    const fetchAccounts = async() =>{
      // Fetching account list from API
      const response:any = await getData("https://firebasestorage.googleapis.com/v0/b/bplay-bab3c.appspot.com/o/plaid%2Faccount.json?alt=media&token=0f4b176d-ad1e-4105-9918-bdc37098c0d8");
      console.log(response);
      if(response){
        setAccounts([...response])
      }
      setIsLoading(false)
    }
    fetchAccounts();
  },[]);

  //Method to change current account data
  const _handleTransactions = async (account:any) =>{
    setIsLoading(true);
    setTimeout(async ()=>{
      const {id} = account;
    const transaction_data = await getData(account.txns);
    //Checking if the api is called before and stored in cache
    if(!(id in txnsCache)){
      txnsCache[id] = transaction_data;  // storing returned data if its not cached
    }
    setCurrentAccountTxns(txnsCache[id]); //setting current account log
    setCurrentAccount(account);
    setIsLoading(false);
    },2000)
  }

  const _renderTransactions = () =>{
    
    // mapping over all the available accounts
    const data = accounts.map((account:any)=>{
      return(
        <div key={account.id} style={{cursor:"pointer"}} onClick={()=>{_handleTransactions(account)}}>
          <Accounts account={account} />
        </div>
      )
    })
    return data;
  }
  return(
    <div>
      <h1>Bank Account Details</h1>
      <h3>Available Accounts</h3>
      {
        _renderTransactions()
      }
      <div>
        <Transactions txns={currentAccountTxns} account={currentAccount} isLoading={isLoading}/>
      </div>
    </div>
    
  )
}

export default App
