// import { Tabs, 
//   // TabsContent,
//    TabsList, TabsTrigger } from "@/components/ui/tabs"

// import Image from "next/image";
import { CardsListOne, CardsListTwo, CardsListThree, CardsListFour } from "./cards"
import { TimeOffCard } from "./infocomp";
import { Separator } from "@/components/ui/separator"
import { CiClock1 } from "react-icons/ci";
import { TimeoffBar } from "./timeoffbar";
import { MiniCardOne, MiniCardTwo } from "./miniCards";
import { CardStackMinusIcon } from "@radix-ui/react-icons";
import { TopBar } from "./topbar";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"
import { TableComp } from "./tablecomp";
import { SecondaryTab } from "./secondarytabs";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
// import { ChevronDown } from "lucide-react";





export function Maincontent() {
  return (


<div className="flex sm:flex-col m-0 justify-between bg-white"> 
  <div> 
    <TopBar />
  </div>


    <div className="flex gap-4 flex-col sm:flex-row m-0 justify-between bg-white " >
          <div className="justify-start w-1/6"> 

          <CardsListOne />
          <CardsListTwo />
        <CardsListThree />
        <CardsListFour />

          </div>

      <div className="bg-white justify-stretch w-5/6"> 

<div className="flex gap-4 flex-col sm:flex-col">
<SecondaryTab /> 

</div>


      <TimeoffBar />

        <Separator />
        <div> 

        <TimeOffCard />
        </div>


        <div className="flex sm:flex-row m-2 align-middle">
        <CiClock1/> 
        <div> Upcoming Time Off </div>
        </div>
      

        <Separator />
          <MiniCardOne />
      <Separator />
      <MiniCardTwo />

      <div>
      </div>
      <Separator />
      <div>
        <div  className="flex gap-2 items-center flex-col sm:flex-row mt-5"> <CardStackMinusIcon /> History</div>




      <TableComp />

      </div>


      </div>
    </div>




</div>
  )
}
