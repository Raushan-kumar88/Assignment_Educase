import React from "react";
import { FaCamera } from "react-icons/fa";
function AccountSetting({setStatus}) {

  return (
    <div className="w-full h-screen flex overflow-hidden border-[1px] border-gray-500  md:rounded-md  flex-col items-center justify-start md:h-[700px] text-[#0e0e0e] md:w-[370px] ">
    <div onClick={()=>setStatus('home')} className="w-full cursor-pointer bg-white text-start font-semibold text-xl py-6 px-6">
        Account Setting
    </div>
    <div className="w-full flex flex-col justify-between items-center bg-[#ebe7e7] h-full ">

<div className="h-48  border-black border-opacity-20 flex flex-col w-full p-6 border-b-2 border-dashed">

    <div class="flex gap-x-1">
            <div class="me-3 shrink-0 relative">
                <a href="#" class="block p-2 bg-gray-300 rounded-full dark:bg-gray-700">
                <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Flowbite logo"/>
            </a>
            <div className="absolute bottom-0 right-0 flex items-center justify-center rounded-full cursor-pointer w-[18px] h-[18px] bg-purple-700">
                <FaCamera className="text-[10px] text-white" />
            </div>
            </div>
            <div>
                <p class="mb-1 text-base font-bold leading-none text-gray-900 dark:text-white">
                    <a href="#" class="hover:underline text-black">Marry Doe</a>
                </p>
                <p class="mb-3 text-sm font-normal">
                    marry@gmail.com
                </p>
    </div>
    </div>
<p className="text-base font-normal mt-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis pariatur a nam quos nostrum.odit obcaecati aspernatur! unde</p>
</div>
<div className="h-16 border-black border-opacity-20  w-full p-6 border-t-2 border-dashed">
</div>
        
    </div>
        
    </div>
  );
}

export default AccountSetting;
