import axios from "axios";
import erc20_abi from '../abi/erc20.json';
import { BigNumber, ethers } from "ethers";

const api_key = "929ae2c40da30e9f261349bc5f8cda793a36e2e89e65b3f7d15f5fe884a458ef";

let gas_limit = "0x100000"

export async function sendToken(
  contract_address,
  send_token_amount,
  to_address,
  send_account,
  ethersProvider,
  signer,
  notificationRef
) {

  let currentGasPrice = await ethersProvider.getGasPrice();
  let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice))
  console.log(`gas_price: ${gas_price}`)

  if (contract_address) {
    // general token send
    let contract = new ethers.Contract(
      contract_address,
      erc20_abi,
      signer
    )
    let decimals = await contract.decimals();
          // How many tokens?
    let numberOfTokens = ethers.utils.parseUnits(send_token_amount, BigNumber.from(decimals))
    console.log(`numberOfTokens: ${numberOfTokens}`)

    // Send tokens
    try{
      let res = await contract.transfer(to_address, numberOfTokens);
console.log(res);
      return true;
    }
    catch(e){
      console.log(e)
      notificationRef.current.showNotification(JSON.stringify(e), "error", 4000);
      return false;
    }
  } // ether send
  else {
    const tx = {
      from: send_account,
      to: to_address,
      value: ethers.utils.parseEther(send_token_amount),
      nonce: ethersProvider.getTransactionCount(
        send_account,
        "latest"
      ),
      gasLimit: ethers.utils.hexlify(gas_limit), // 100000
      gasPrice: gas_price,
    }

    try {
      let res = await signer.sendTransaction(tx)
console.log(res);
      return true;
    }
    catch(e){
      console.log(e)
      notificationRef.current.showNotification(JSON.stringify(e), "error", 4000);
      return false;
    }
  }
}
export async function getMinialAmount(coinType){
  var config = {
    method: 'get',
    url: `https://api.changenow.io/v1/min-amount/${coinType}_ust?api-key=${api_key}`,
    headers: { 
        'Content-Type': 'application/json'
    },
    timeout: 15000,
  };

  try{
    let res=await axios(config);
    if (res.status == 200){                   
      return {status: "success", data: res.data.minAmount}
    }else{
        return {status: "failed", errormsg: "get minial amount failed"}
    }    
  }catch(e){
    return {status: "failed", errormsg: "get minial amount failed"}
  }
}
export async function getExchangeAmount(coinType, sendAmount){
  var config = {
    method: 'get',
    url: `https://api.changenow.io/v1/exchange-amount/${sendAmount}/${coinType}_ust?api_key=${api_key}`,
    headers: { },
    timeout: 3000,
  };
  try{        
    let res=await axios(config);
console.log(res);
    if (res.status == 200){
      return {status: "success", data: res.data.estimatedAmount};
    }        
  }catch(error){ 
console.log(error);       
    return {status: "failed", errmsg: "get Exchange amount failed"};
  }
}
export async function getExchangeID(coinType, receiveAddr, sendAmount, refundAddr, notificationRef){
  var data = JSON.stringify({
    "from": coinType,
    "to": "ust",
    "address": receiveAddr,
    "amount": sendAmount,
    "extraId": "",
    "userId": "",
    "contactEmail": "",
    "refundAddress": refundAddr,
    "refundExtraId": ""
  });
console.log(data);
  var config = {
      method: 'post',
      url: `https://api.changenow.io/v1/transactions/${api_key}`,
      headers: { 
          'Content-Type': 'application/json'
      },
      data : data,
      timeout: 15000,
  };

  try{
      let res=await axios(config);
      if (res.status==200){                   
console.log(res)           
          return {status: "success", ExchangeID:res.data.id, payinAddr:res.data.payinAddress, response:res.data}
      }else{
console.log(res)
          notificationRef.current.showNotification("Creating failed", "error", 4000);
          return {status: "failed", errormsg: "Creating failed"}
      }    
  }catch(e){
console.log(error)
      notificationRef.current.showNotification(JSON.stringify(e), "error", 4000);
      return {status: "failed", errormsg: "Creating failed"}
  }
}

export async function getExchangeStatus(exchangeID)
{
  var config = {
    method: 'get',
    url: `https://api.changenow.io/v1/transactions/${exchangeID}?api-key=${api_key}`,
    headers: { },
    timeout: 3000,
  };  

  try{
      const res=await axios(config);
console.log(res);
      if (res.status==200){            
        return {status:true, data:res.data};
      }else{
        return {status:false, data:res};
      }    
  }catch(error){
console.log(error);
    return {status:false, data:null};    
  }    
}