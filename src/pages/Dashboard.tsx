
import React, { useRef, useState } from 'react';
import MyTimer from '../hook/MyTimer';
import usdt from "../assets/usdt.png"
import { toast } from 'react-toastify';
import axios from 'axios';
import { useInfoContext } from '../hook/ContextHook';
import { useLoaderData, useNavigate } from 'react-router-dom';

interface User {
  id: number;
  password: string;
  email: string;
  balance:string,
  joinDate: string;
  // Add more fields as necessary
}


interface LoaderData {
  0: User;
  presaleEndTime: number;
  currentPrice: number;
  listingPrice: number;
}
const Dashboard: React.FC = () => {
const data = useLoaderData() as LoaderData;

  const {apiUrl} = useInfoContext();
  const amount = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLDivElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const [user] = useState(data[0]);
  const [presaleEndTime] = useState(data.presaleEndTime);
const [copyText,setCopyText] = useState("Copy");
const nav = useNavigate();
  const copy = (e: React.MouseEvent<HTMLDivElement>)=>{
    
    if(address.current){
      (e.target as HTMLDivElement).style.border= "2px solid red";
      navigator.clipboard.writeText(address.current.innerText);
      setCopyText("Copied");
      setTimeout(() => {
        setCopyText("Copy");
        (e.target as HTMLDivElement).style.border= "none";
      }, 5000);
      toast.success("Copied to clipboard");
    }else{
      toast.error("Failed to copy address. Please copy manually");
    }
   
  }

  const submit = async(e:React.MouseEvent<HTMLButtonElement>)=>{
    (e.target as HTMLButtonElement).innerText ="Please wait...";
    if(amount.current){
      if(parseFloat(amount.current.value) < 10 || !parseFloat(amount.current.value)){
toast.error("minimum USDT 10");
(e.target as HTMLButtonElement).innerText ="Submit";
      }else{
        const response = await axios.post(apiUrl, {
          // Data to be sent in the POST request
          type:'deposit',
          amount: amount.current.value,
          hash: localStorage.getItem("hash") || null
        });

        if(response.data.error){
          toast.error(response.data.data);
          close.current?.click();
          (e.target as HTMLButtonElement).innerText ="Submit";
        }else if(!response.data.fail){
          (e.target as HTMLButtonElement).innerText ="Submit";
          toast.success("Your coin purchase request has been submitted. You will see your balance shortly");
          close.current?.click();
        }else{
          localStorage.removeItem("hash");
          toast.error(response.data.data)
          setTimeout(() => {
            nav("/login");
          }, 5000);
          (e.target as HTMLButtonElement).innerText ="Submit";
        }
      }
    
    }
   
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + presaleEndTime);
  return (
   <><div className='pt-24 px-12'>
    <div className='py-6'>
      <span>Welcome to Dashboard</span>
    </div>
    <div className='space-y-6'>
    <div className='bg-blue-400 text-white p-6 shadow-lg'>
      <span>Total Balance </span> <br />
      <span className='text-xl'>{user?.balance ??  0} JMT</span>
    </div>
    <div className='flex flex-col md:flex-row shadow-lg'>
    <div className='bg-blue-400 text-white p-6'>
      <span>First Stage </span> <br />
      <span className='text-xl'>Listing Price  {data?.listingPrice} USDT</span>
    </div>
    <div className='p-6 flex-1 flex flex-col md:flex-row md:justify-between'>
      <div>
        <span>Current Price </span> <br />
      <span className='text-xl'>1 JMT = {data?.currentPrice} USDT</span>
      </div>
     <div className='py-3'>
     {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-primary" onClick={()=>{const modal = document.getElementById('my_modal_5') as HTMLDialogElement;  if (modal) {
            modal.showModal();
        } else {
            console.error('Modal not found');
        }}}>Buy Now</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle px-3">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Make Payment!</h3>
    <div className="pt-6">
      <span className="">USDT ( TRC20 )</span>
     
      <div className='flex flex-col sm:flex-row gap-3'>
      <img src={usdt} alt="usdt" className='w-6' />
      <div className='flex gap-2' onClick={copy}>
      <span className='break-all' ref={address}>TUNU5pDCotSvY9FdzJ2fHV67CbThXH1fmf</span>
      <button className='btn btn-primary btn-xs'>{copyText}</button>
      </div>
      </div>
      
    </div>
    <div className='py-6'>
      <span>USDT Amount</span>
    <input ref={amount} type="text" placeholder="Amount - min 10" className="input input-bordered w-full" />
    </div>
    <div className='py-6 space-y-1'>
      <span className='text-xs text-red-600'>After sending amount to the address above click submit</span>
      <button className='btn btn-primary w-full' onClick={submit}>Submit</button>
    </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button ref={close} className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
     </div>
    </div>
    </div>

      <div className='p-6 shadow-lg'>
        <span>Token Sales Progress </span> <br />
        <span className='uppercase'>Stage 1 Running Now </span> <br />
        <span className='uppercase text-sm'>Time Left </span> <br />
        <span className='uppercase text-xs'>Sales Ends In </span> <br />
        <MyTimer expiryTimestamp={time} />
      </div>

    </div>
   </div>
   </>
  );
};

export default Dashboard;
