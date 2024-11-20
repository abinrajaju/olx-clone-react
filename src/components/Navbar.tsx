import olx from "../assets/img/olx.png"
import lens from "../assets/img/lens.png"
import arrow from "../assets/img/arrow.png"
import search from "../assets/img/search.png"
import Login from "./Login"
import { useState } from "react"


type searchprop={
  setSearch:any
}

function Navbar(props:searchprop) {
    const [loginPop,setLoginPop]=useState(false)
  return (
    <>
    <div className="flex p-4 bg-slate-100 shadow-md">
      <img src={olx} className="w-15 h-9" />
      <div className="flex border-2 border-spacing-1 w-64 p-2 boarder-black">
        <img src={lens} className="w-6 h-6" />
        <input  placeholder="Location" className="ml-3 outline-none" />
        <img src={arrow} className="w-7 h-7 " />
      </div>
      <div className="flex h-12 ml-4 border-2 border-black bg-white">
        <input onChange={(e)=>props?.setSearch(e.target.value)} placeholder="find cars,Moblie phones and more"  className="ml-3 w-96 outline-none"/>
        <img src={search} />
      </div>
      <div className="flex h-12 p-3 ml-6 cursor-pointer">
        <h1 className="font-semibold"> ENGLISH </h1>
        <img src={arrow} className="w-8 h-7" />
      </div>
      <div onClick={()=>setLoginPop(!loginPop)} className="flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline">
        <h1 className="font-bold text-lg"> Login </h1>
        
      </div>
      <div className="w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500" >
        <h1 className="font-bold text-lg ml-1"> + SELL </h1>
        <img src={arrow} className="w-8 h-7" />
      </div>
    </div>
   {loginPop && <Login setLoginPop={setLoginPop}/>}  
    </>
  )
}

export default Navbar
