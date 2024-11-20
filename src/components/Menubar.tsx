

type menuprop={
    setMenu:any
}
export default function Menubar(props:menuprop) {
  return (
    <div className="flex shadow-sm h-10 p-2">
     <h1 onClick={()=>props?.setMenu("Shirt")} className="ml-48 cursor-pointer">Shirt</h1>
     <h1 onClick={()=>props?.setMenu("Jacket")} className="ml-5 cursor-pointer">Jacket</h1>
     <h1 onClick={()=>props?.setMenu("Mobile")} className="ml-5 cursor-pointer">Mobile</h1>
     <h1 onClick={()=>props?.setMenu("House")} className="ml-5 cursor-pointer">House</h1>
     <h1 onClick={()=>props?.setMenu("Scooter")} className="ml-5 cursor-pointer">Scooter</h1>
     <h1 onClick={()=>props?.setMenu("Bike")} className="ml-5 cursor-pointer">Bike</h1>
    </div>
  )
}
