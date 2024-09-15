import { CiMedicalCross } from "react-icons/ci";
import { LiaPiggyBankSolid } from "react-icons/lia";


  
  
  export function MiniCardOne() {
    return (
      <div className="flex gap-2 items-center flex-col sm:flex-row m-3" >
        <div><CiMedicalCross className="w-12 h-12" />  </div>
        <div>
            <div> Jan 27 </div>
            <div className="flex gap-2 items-center flex-col sm:flex-row m-0 align-baseline">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                 1 day of Sick </div>
        </div>
        </div>
    )
  }

    
  export function MiniCardTwo() {
    return (
      <div className="flex gap-2 items-center flex-col sm:flex-row m-3" >
        <div><LiaPiggyBankSolid className="w-12 h-12"/>  </div>
        <div>
            <div> Jul 4 </div>
            <div>
                 Independence Day </div>
        </div>
        </div>
    )
  }
  