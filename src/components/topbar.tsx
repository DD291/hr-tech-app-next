
// import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { GearIcon } from "@radix-ui/react-icons";
// import { TabsContent } from "@radix-ui/react-tabs";
// import { TimeoffBar } from "./timeoffbar";
// import { TimeOffCard } from "./infocomp";

  
  
  export function TopBar() {
    return (
    <div 
    className="flex flex-col sm:flex-col m-0 justify-between align-baseline bg-blue-100" >

<div className="flex sm:flex-row m-0 justify-between">
  <div
  className="flex sm:flex-row m-1 gap-4 justify-center">
    <Image
          src="https://nextjs.org/icons/next.svg"
          alt="Profile"
          className="rounded-full aspect-square object-cover h-20 w-20"
        />
        <div className="text-4xl ml-40"> Alexandra Kuibyshevskaya </div> 
    </div>
  <div className="flex sm:flex-row m-1 justify-between align-middle">
<div className="m-2" >
        <DropdownMenu >
        <DropdownMenuTrigger className= "bg-blue-100 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
         <div className="flex sm:flex-row m-1 justify-between" >  Request a Change <ChevronDown /> </div>
          </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Profile</DropdownMenuItem>
            <DropdownMenuItem
            className="px-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-4"
            >Billing</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
        </div>
<div className="m-2"> 
        <DropdownMenu >
        <DropdownMenuTrigger className= "bg-blue-100 divide-y divide-gray-100 rounded-lg shadow w-14 dark:bg-gray-700">
         <div className="flex sm:flex-row m-1 justify-center" >  <GearIcon/> <ChevronDown /> </div>
          </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >test</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
        </div>
  </div>
  </div>

    </div>
    )
  }
  