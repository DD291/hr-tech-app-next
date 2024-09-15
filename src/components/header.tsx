import { Tabs, 
  TabsContent,
   TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "./ui/input"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { GearIcon } from "@radix-ui/react-icons"
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons"
import { BellIcon } from "@radix-ui/react-icons"
import Image from "next/image";
import { Maincontent } from "./maincontent"


export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."



export function Header() {
  return (
    <div className="flex gap-4 m-0 items-start flex-col sm:flex-row justify-around h-12 bg-white w-screen" >
    <Tabs defaultValue="myinfo" 
    className="w-[500px] m-0
     bg-white data-[state=active]:bg-blue-100"
    >
    <TabsList>
    <TabsTrigger value="img" >
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/6/63/HR_Logo.svg"
      alt="Profile"
      className="rounded-full aspect-square object-cover w-10 h-10"
    />
    </TabsTrigger>
      <TabsTrigger value="account">Home</TabsTrigger>
      <TabsTrigger value="myinfo" className="data-[state=active]:bg-blue-100">My Info</TabsTrigger>
      <TabsTrigger value="people">People</TabsTrigger>
      <TabsTrigger value="hiring">Hiring</TabsTrigger>
      <TabsTrigger value="reports">Reports</TabsTrigger>
      <TabsTrigger value="files">Files</TabsTrigger>
    </TabsList>

    {/* //      "inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground enabled:bg-white", */}

    <TabsContent value="myinfo" className="w-max bg-cyan-600">
      <Maincontent />
    </TabsContent>
    {/* <TabsContent value="account">Make changes to your account here.</TabsContent>
    <TabsContent value="password">Change your password here.</TabsContent> */}
  </Tabs>
  <div className="flex gap-2 sm:flex-row"> 
  <MagnifyingGlassIcon className="h-6 w-6" />
  <Input placeholder="Search" className="w-3/4" />
  </div>
  <div className="flex gap-2 items-center flex-col sm:flex-row m-2 justify-between"> 
  <GearIcon className="h-8 w-8" />
  <QuestionMarkCircledIcon className="h-8 w-8"  />
  <BellIcon className="h-8 w-8"  />
  </div>
  <Image
      src="https://nextjs.org/icons/next.svg"
      alt="Profile"
      className="rounded-full aspect-square object-cover"
      width={24}
      height={24}
    />


  </div>
  )
}
