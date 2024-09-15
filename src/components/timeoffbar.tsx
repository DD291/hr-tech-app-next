import { CiViewList } from "react-icons/ci"
import { Button } from "./ui/button"
  
  
  
  export function TimeoffBar() {
    return (
    <div className="flex flex-col sm:flex-row m-7 justify-between align-baseline" >
      
      <div className="flex flex-col sm:flex-row gap-2 "
      > 
      <div className="align-middle  mt-2  "> 
      <CiViewList size={20}/> 
      </div>
        <div className = "text-xl"> 
            Time Off
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2"> 
      <div className="align-middle mt-2 "> Actual Level Start Date 03/09-2020 </div>
      <Button className="bg-slate-50 rounded border-black	text-black"> Add Time Off Policy </Button>
      </div>

    </div>
    )
  }
  