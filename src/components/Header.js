import React from "react";

function Header({setStatus}) {
  return (
   
    <div className="w-full h-screen flex border-[1px] border-gray-500 md:rounded-md  flex-col items-center justify-end md:h-[700px] text-[#0e0e0e] md:w-[370px] bg-[#fffdfd] p-6">
        <div className="flex flex-col">
        <p className="text-2xl font-bold">Welcome to the PopX</p>
        <p className="text-lg my-2 text-black  w-[80%] text-opacity-40 leading-6 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button onClick={()=>setStatus('signup')} className="w-full items-center mt-4 bg-[#5e17eb] hover:bg-opacity-80 rounded-md text-white font-medium justify-center flex text-base py-2.5">Create Account</button>
        <button onClick={()=>setStatus('login')} className="w-full items-center mt-2 bg-purple-400 hover:bg-opacity-80 rounded-md text-black font-medium justify-center flex text-base py-2.5">Already Registered? Login</button>
        </div>
    </div>

  );
}

export default Header;
