import {  useLocation } from "react-router-dom"
import Footer from "./Footer"


export default function Details() {
    const location=useLocation()
  return (
    <div>
    <div className="flex p-4">
      <img src={location?.state?.data?.image} className="h-400px w-80" />
      <div> 
        <h1 className="font-bold text-3xl">${location?.state?.data?.price}</h1>
        <h1 className="mt-5"> <span className="font-semibold">Category</span> :{location?.state?.data?.category}</h1>
        <h1 className="mt-5"><span className="font-semibold">title</span>{location?.state?.data?.title}</h1>
        <h1 className="mt-5"><span className="font-semibold">Description</span>{location?.state?.data?.description}</h1>
         </div>
         
    </div>
    <Footer/>
    </div>
  )
}
