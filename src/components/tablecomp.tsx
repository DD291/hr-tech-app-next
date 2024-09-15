import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    // DropdownMenuLabel,
    // DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { FaLongArrowAltDown } from "react-icons/fa";
  import {  ChevronDown } from "lucide-react";

  
  const tableData = [
    {
      date: "23/05/2024",
      description: "Actual for 23/05/2024 to 20/11/2024",
      usedDays: "",
      earnedDays: "3.00",
      balance: "3.00",

    },
    {
        date: "23/05/2024",
        description: "Actual for 23/05/2024 to 20/11/2024",
        usedDays: "-6",
      earnedDays: "3.00",
      balance: "3.00",

    },
    {
        date: "23/05/2024",
        description: "Actual for 23/05/2024 to 20/11/2024",
        usedDays: "",
      earnedDays: "",
      balance: "3.00",

    },
    {
        date: "23/05/2024",
        description: "Actual for 23/05/2024 to 20/11/2024",
        usedDays: "",
      earnedDays: "3.00",
      balance: "3.00",

    },
    {
        date: "23/05/2024",
        description: "Actual for 23/05/2024 to 20/11/2024",
        usedDays: "-6",
      earnedDays: "3.00",
      balance: "3.00",

    },
    {
        date: "23/05/2024",
        description: "Actual for 23/05/2024 to 20/11/2024",
        usedDays: "",
      earnedDays: "",
      balance: "3.00",

    },
    {
        date: "23/05/2024",
        description: "Actual for 23/05/2024 to 20/11/2024",
        usedDays: "",
        earnedDays: "3.00",
        balance: "3.00",

    },
  ]



  
  export function TableComp() {
    return (
        <div className="m-5"> 

<div className="flex sm:flex-row justify-between"> 

  <div className="flex sm:flex-row m-1 justify-between" > 
          <div className="mx-1">
        <DropdownMenu >
        <DropdownMenuTrigger className= "bg-blue-300 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
         <div className="flex sm:flex-row m-1 justify-between" >  Sick <ChevronDown /> </div>
          </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Profile</DropdownMenuItem>
            <DropdownMenuItem
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Billing</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
        </div>
        <div className="mx-1">
        <DropdownMenu >
        <DropdownMenuTrigger className= "bg-blue-300 divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700">
        <div className="flex sm:flex-row m-1 justify-between" >  All <ChevronDown /> </div>
             </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >test</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
        </div>
        </div>

        
      <div className="justify-between m-1 align-middle">
        <DropdownMenu >
        <DropdownMenuTrigger className= "bg-blue-300 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <div className="flex sm:flex-row m-1 justify-between" >  Balance History <ChevronDown /> </div>
            </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Yesterday</DropdownMenuItem>
            <DropdownMenuItem
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Last year</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
        </div>
</div>

      <Table>
        <TableHeader>
          <TableRow className="bg-slate-300	">
            <TableHead className="w-[100px]">Date <FaLongArrowAltDown/></TableHead>
            <TableHead>Description</TableHead>
            <TableHead>User Days(-)</TableHead>
            <TableHead className="text-right">Earned Days(+)</TableHead>
            <TableHead>Balance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item) => (
            <TableRow key={item.date}>
              <TableCell className="font-medium">{item.date}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.usedDays}</TableCell>
              <TableCell>{item.earnedDays}</TableCell>
              <TableCell className="text-right">{item.usedDays}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>

    )
  }
  