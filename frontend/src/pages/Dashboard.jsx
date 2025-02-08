import { useState } from 'react'
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading1 } from 'lucide-react'
import { Search, UserRoundPen } from "lucide-react";

// useEffect(() => {
//   const token = localStorage.getItem('token'); // Or sessionStorage

//   if (!token) {
//     navigate('/'); // Redirect to landing page
//   }
// }, []);

// useEffect(() => {
//   const token = localStorage.getItem('token'); // Or sessionStorage

//   if (!token) {
//     navigate('/'); // Redirect to landing page
//   }
// }, [navigate]);


const SearchDialog = () => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        setOpen(false);
        console.log('Submitted value:', inputValue);
        setInputValue('');
      }
    };
  
    return (
      <div>
        {/* Trigger Input */}
        <div className="relative" onClick={() => setOpen(true)}>
          <input
            type="text"
            placeholder="Ask AI"
            className="w-full h-[44px] pl-10 text-lg bg-background border-1 border-white/15 rounded-xl focus:outline-none placeholder:text-white/40 placeholder:font-semibold hover:border-white/25 focus:ring-2 focus:ring-blue-500"
            readOnly
          />
          <Search className="absolute left-2 top-2 h-6 w-6 text-gray-400" />
        </div>
  
        {/* Dialog */}
        {open && (
          <>
            <div 
              className="fixed inset-0 bg-transparent"
              onClick={() => setOpen(false)}
            />
            <div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-[640px] px-4">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="How can I help you today ?"
                  className="w-full h-12 pl-10 text-lg border-2 border-white  focus:outline-none  focus:ring-blue-500 outline-none rounded-xl bg-[#1F1E1D] placeholder:text-white/80 placeholder:pl-2 text-white/80 "
                  autoFocus
                />
                <Search className="absolute left-3 top-3 h-6 w-6 text-gray-400 " />
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

const Logozenith = () => {
    return(
        <div className="rounded-xl border-2">
            <img src="./zlogoupscaled.png" alt="company-logo" className="size-[40px] rounded-xl"/>
        </div>
    )
}

const AddPost = () => {
    return(
        <div className='w-[100px] h-[40px] rounded-xl bg-purple-600 border-box focus:border-2 click:border-white hover:border-blue-500 flex justify-center items-center mr-8'>
            <p className=' text-black font-bold text-[1rem] hover:text-white/75'>Add Post</p>
        </div>
    )
}

const ProfileAvt = () => {
    return(
        <div className='bg-red-500 size-[40px] rounded-full flex justify-center items-center pl-1'>
            <UserRoundPen className='text-white size-[25px] '/>
        </div>
    )
}

const Topbar = () => {
    return(
        <div className="flex flex-row gap-3 justify-between">
            <Logozenith />
            <SearchDialog />
            <div className='flex flex-row'>
                <AddPost />
                <ProfileAvt />
            </div>
            {/* <Askai /> */}
            {/* <Addpost />
            <Profilebtn /> */}
        </div>
    )
}

const WebCode = () => {
  return(
    <div className='m-0 p-0 border-box antialiased h-screen w-full bg-[#070707]'>
      <div className='h-[100%] w-[100%] py-2 px-3 flex flex-col'>
    {/* <h1 className='text-white'>hello world</h1>     */}
        <Topbar />
        <div className='mt-5'>
          <p className='text-white/80 text-4xl font-bold mx-3 mb-3'>Today</p>
          <hr className='text-white/80 mx-2'/>
        </div>
      </div>
    </div>
  )
}

function Dashboard() {
  return(
    <>
      <WebCode />
    </>
  )
}


export default Dashboard
