import React from "react";
import { useLoaderData } from "react-router-dom";
import usdt from '../assets/usdt.png'
interface HistoryItem {
  id: string;
  amount:number;
  status:string,
  date:string
  // Add other fields from your data if necessary
}

const History: React.FC = () => {

  const history = useLoaderData() as HistoryItem[];
   return <>
   
    <div className='pt-24 px-12'>
    <div className='py-6'>
      <span>Trasnaction History</span>
    </div>
    <div className="space-y-3 mx-auto max-w-sm md:max-w-7xl justify-center md:flex flex-wrap gap-3">
      {history.map((data)=>{
        return <>
        <div key={`s${data.id}`} className="shadow-history p-6 flex flex-col gap-3">
          <div className="space-x-6 flex items-center">
          <span className="flex-1">ID: {data.id}</span>
          <span className="flex items-center gap-2">Amount: {data.amount} <img src={usdt} alt="USDT" className="w-4 h-4" /></span>
          </div>
          <div className="flex justify-between gap-3">Status: {data.status === "pending" ? <><span className="badge badge-warning">Pending</span></>:<>{data.status === "approved" ? <><span className="badge badge-success">Approved</span></>:<><span className="badge badge-error capitalize">{data.status}</span></>}</>}</div>
          <span  className="flex justify-between gap-3">Time: {data.date}</span>
        </div>
      </>
      })}
    </div>
    </div>
    </>
};
export default History;