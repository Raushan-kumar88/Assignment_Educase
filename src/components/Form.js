import React from "react";

function Form({setStatus}) {

  return (
    <div className="w-full h-screen overflow-hidden flex border-[1px] border-gray-500 md:rounded-md  flex-col items-center justify-start md:h-[700px] text-[#0e0e0e] md:w-[370px] bg-[#fffdfd] p-6">
        <form className="flex flex-col">
        <p className="text-2xl font-bold w-[70%]">Signing to your PopX account</p>
        <p className="text-lg my-2 text-black  w-[80%] text-opacity-40 leading-6 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <div class="relative mt-2 w-full">
      <input type="email" id="" placeholder="" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
      <label for="email" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-purple-700"> Email Address </label>
    </div>
    <div class="relative mt-2 w-full">
      <input type="password" id="" placeholder="" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
      <label for="password" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-purple-700"> Enter your password </label>
    </div>
        <button onClick={()=>setStatus('setting')} type="button" className="w-full items-center mt-4 bg-[#5e17eb] disabled:bg-gray-400 disabled:text-white hover:bg-opacity-80 rounded-md text-white font-medium justify-center flex text-base py-2.5">Login</button>
        </form>
        
    </div>
  );
}

export default Form;
