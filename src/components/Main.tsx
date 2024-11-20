import { useEffect, useState } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";


export default function Main() {

const[prod,setProd]=useState([])
const[Search,setSearch]=useState("")
const[menu,setMenu]=useState("")


    const getproduct=()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProd(json))
    }
    useEffect(()=>{
        getproduct()
    })
  return (
    <div>
      <Navbar setSearch={setSearch}/>
      <Menubar setMenu={setMenu}/>
      <Home product={prod} search={Search} menu={menu}/>
      <Footer/>
    </div>
  )
}
