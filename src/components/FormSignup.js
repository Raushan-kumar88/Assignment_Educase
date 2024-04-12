import React from "react";

function FormSignup({setStatus}) {

  return (
    <div className="w-full h-screen overflow-hidden flex border-[1px] border-gray-500 md:rounded-md  flex-col items-center justify-between md:h-[700px] text-[#0e0e0e] md:w-[370px] bg-[#fffdfd] p-6">
        <form className="flex flex-col gap-y-1">
        <p className="text-2xl font-bold w-[50%]">Create your PopX account</p>
        <p className="text-lg my-2 text-black  w-[80%] text-opacity-40 leading-6 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <div class="relative mt-2 w-full">
      <input type="name" id="" placeholder="" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
      <label for="name" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-purple-700"> Full name </label>
    </div>
    <div class="relative mt-2 w-full">
      <input type="tel" id="" placeholder="" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
      <label for="tel" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-purple-700"> Phone number </label>
    </div>
    <div class="relative mt-2 w-full">
      <input type="email" id="" placeholder="" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
      <label for="email" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-purple-700"> Email Address </label>
    </div>
    <div class="relative mt-2 w-full">
      <input type="password" id="" placeholder="" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
      <label for="password" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-purple-700"> Password </label>
    </div>
    <div class="relative mt-2 w-full">
      <input type="email" id="" placeholder="" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
      <label for="email" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-purple-700"> Company name </label>
    </div>
    <div class="mt-2">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Are you an agency?</label>
    <div className="flex items-center justify-start gap-x-4">

    <div class="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
</div>
    <div class="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
</div>
    </div>

  </div>
        </form>
        
        <div className="w-full">
    <button onClick={()=>setStatus('setting')} type="button" className="w-full items-center mt-8 bg-[#5e17eb] disabled:bg-gray-400 disabled:text-white hover:bg-opacity-80 rounded-md text-white font-medium justify-center flex text-base py-2.5">Create Account</button>

    </div>
    </div>
   
  );
}

export default FormSignup;
