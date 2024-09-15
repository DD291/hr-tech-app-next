import { ChevronDown } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { TabsContent } from "@radix-ui/react-tabs";
// import { TimeoffBar } from "./timeoffbar";
// import { TimeOffCard } from "./infocomp";
// import { Separator } from "@radix-ui/react-separator";
// import { MiniCardOne, MiniCardTwo } from "./miniCards";
// import { CardStackMinusIcon } from "@radix-ui/react-icons";
// import { TableComp } from "./tablecomp";
// import { CiClock1 } from "react-icons/ci";


export function SecondaryTab() {
    return (
<div className="bg-blue-100"> 
<Tabs defaultValue="timeoff" className="data-[state=active]:bg-white">
    <TabsList 
    className="grid w-full grid-cols-10" > 
    {/* /text-sm dark:text-blue-400 enabled:bg-white */}
      <TabsTrigger value="personal">Personal</TabsTrigger>
      <TabsTrigger value="job">Job</TabsTrigger>
      <TabsTrigger value="timeoff" className="data-[state=active]:bg-white" >Time Off</TabsTrigger>
      <TabsTrigger value="emergency">Emergency</TabsTrigger>
      <TabsTrigger value="documents">Documents</TabsTrigger>
      <TabsTrigger value="notes">Notes</TabsTrigger>
      <TabsTrigger value="benefits">Benefits</TabsTrigger>
      <TabsTrigger value="training">Training</TabsTrigger>
      <TabsTrigger value="assets">Assets</TabsTrigger>
      <TabsTrigger value="more">
        More <ChevronDown />
      </TabsTrigger>
      <TabsContent value="timeoff" className="max-w-fit">
        <div className="bg-green-100">
        {/* <TimeoffBar />

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

</div> */}

        </div>

      </TabsContent>
    </TabsList>
  </Tabs>
  </div>
    )}