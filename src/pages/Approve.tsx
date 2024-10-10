import React, { useRef, useState } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import usdt from '../assets/usdt.png'
import axios from "axios";
import { apiUrl } from "../provider/ContextProvider";
import { toast } from "react-toastify";
interface HistoryItem {
  id: number,
  amount:number,
  status:string,
  date:string,
  email:string,
  coin:number,
  map:any

  // Add other fields from your data if necessary
}

interface countItem {
    pending: number,
    approved:number
    declined:number
  
    // Add other fields from your data if necessary
  }

interface loaderData {
    count:countItem,
    history:HistoryItem
    // Add other fields from your data if necessary
  }

const Approve: React.FC = () => {
const pendingBtnRef= useRef<HTMLButtonElement>(null);
const approveBtnRef= useRef<HTMLButtonElement>(null);
const declineBtnRef= useRef<HTMLButtonElement>(null);
const loaderData = useLoaderData() as loaderData;
const [historyCount,setHistoryCount] = useState(loaderData.count);
  const [history,setHistory] = useState(loaderData.history);

    const handleClick = async(type:string,purchaseId:number)=>{
        const response = await axios.post(apiUrl,{
            // Data to be sent in the POST request
            type:"update_history",
            purchaseId:purchaseId,
            status:type,
            hash:localStorage.getItem("hash") || null
          });
      
          if(!response.data.fail){
           
            toast.success(response.data.data);
           setHistory(response.data.history);
        setHistoryCount(response.data.count);
           
          }else{
            
            localStorage.removeItem("hash");
            toast.error(response.data.data)
            setTimeout(() => {
              <Navigate to="/login"></Navigate>
            }, 5000);
            
          
          }
    }


    const handleHistory = async(type:string)=>{
        if(pendingBtnRef.current && approveBtnRef.current && declineBtnRef.current){
            if(type === "pending"){
         
                if(!pendingBtnRef.current.classList.contains("btn-outline")){
                    pendingBtnRef.current.classList.add("btn-outline")
                    pendingBtnRef.current.classList.remove("btn-warning")
                }

                if(approveBtnRef.current.classList.contains("btn-outline")){
                    approveBtnRef.current.classList.remove("btn-outline")
                    approveBtnRef.current.classList.add("btn-success")
                }

                if(declineBtnRef.current.classList.contains("btn-outline")){
                    declineBtnRef.current.classList.remove("btn-outline")
                    declineBtnRef.current.classList.add("btn-error")
                }
               
            }

            if(type === "approved"){
         
                if(!approveBtnRef.current.classList.contains("btn-outline")){
                    approveBtnRef.current.classList.add("btn-outline")
                    approveBtnRef.current.classList.remove("btn-success")
                }

                if(pendingBtnRef.current.classList.contains("btn-outline")){
                    pendingBtnRef.current.classList.remove("btn-outline")
                    pendingBtnRef.current.classList.add("btn-warning")
                }

                if(declineBtnRef.current.classList.contains("btn-outline")){
                    declineBtnRef.current.classList.remove("btn-outline")
                    declineBtnRef.current.classList.add("btn-error")
                }
               
            }

            if(type === "declined"){

                if(!declineBtnRef.current.classList.contains("btn-outline")){
                    declineBtnRef.current.classList.add("btn-outline")
                    declineBtnRef.current.classList.remove("btn-error")
                }
         
                if(approveBtnRef.current.classList.contains("btn-outline")){
                    approveBtnRef.current.classList.remove("btn-outline")
                    approveBtnRef.current.classList.add("btn-success")
                }

                if(pendingBtnRef.current.classList.contains("btn-outline")){
                    pendingBtnRef.current.classList.remove("btn-outline")
                    pendingBtnRef.current.classList.add("btn-warning")
                }
               
            }
        }


        const response = await axios.post(apiUrl,{
            // Data to be sent in the POST request
            type:'approve',
            status:type,
            hash:localStorage.getItem("hash") || null
          });
      
          if(!response.data.fail){
       
           setHistory(response.data.data.history);
           setHistoryCount(response.data.data.count);
            
           
          }else{
            
            localStorage.removeItem("hash");
            toast.error(response.data.data)
            setTimeout(() => {
              <Navigate to="/login"></Navigate>
            }, 5000);
            
          
          }
    }

   return <>
   
    <div className='pt-24 px-12'>
    <div className='py-6'>
      <span>Trasnaction History</span>
    </div>
    <div className='py-6 space-x-3'>
      <button ref={pendingBtnRef} onClick={()=>handleHistory("pending")} className="btn btn-sm btn-outline">Pending ({historyCount.pending})</button>
      <button ref={approveBtnRef} onClick={()=>handleHistory("approved")} className="btn btn-sm btn-success">Approved  ({historyCount.approved})</button>
      <button ref={declineBtnRef} onClick={()=>handleHistory("declined")} className="btn btn-sm btn-error">Declined  ({historyCount.declined})</button>
    </div>
    <div className="space-y-3 mx-auto max-w-sm md:max-w-7xl justify-center md:flex flex-wrap gap-3">
      {history.map((data:any)=>{
        return <>
        <div key={`s${data.id}`} className="shadow-history p-6 flex flex-col gap-3">
       
        <div className="space-x-6 flex items-center">
        
        <span className="flex-1">ID: {data.id}</span>
        <span className="flex-1">{data.email}</span>
        </div>

          <div className="space-x-6 flex items-center">
        
          <span className="flex items-center gap-2">Amount: {data.amount} <img src={usdt} alt="USDT" className="w-4 h-4" /></span>
          <span className="flex items-center gap-2">$JUICE: {data.coin} </span>
          </div>
          <div className="flex justify-between gap-3"><span  className="flex justify-between gap-3">Time: {data.date}</span> {data.status === "pending" ? <><span className="badge badge-warning">Pending</span></>:<>{data.status === "approved" ? <><span className="badge badge-success">Approved</span></>:<><span className="badge badge-error capitalize">{data.status}</span></>}</>}</div>

         {data.status === "pending" ?  <div className="space-x-6 flex items-center">
        
        <span className="flex-1">Action:</span>
      
            <button onClick={()=>handleClick("approved",data.id)} className="btn btn-sm btn-success">Approve</button>
            <button onClick={()=>handleClick("declined",data.id)} className="btn btn-sm btn-error">Decline</button>
     
        </div>:<></>}
          
        </div>
      </>
      })}
    </div>
    </div>
    </>
};
export default Approve;