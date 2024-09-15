import { CiMedicalCross } from "react-icons/ci";
import { PiMountainsBold } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
//   CardDescription,
  // CardFooter,
  CardHeader,
//   CardTitle,
} from "@/components/ui/card"


const cardOne = [
  {
    header: "Sick",
    icon : <CiMedicalCross className="w-16 h-16"/>,
    days: "3",
    title: "Days Available",
    mininote: "1 day scheduled",
    note: "Sick Full-Time"
  },
  {
    header: "Annual Leave",
    icon : <PiMountainsBold className="w-16 h-16" />,
    days: "10.3",
    title: "Days Available",
    mininote : " ",
    note: "Holiday Full-Time"
  },
  {
    header: "Comp/in Lieu Time",
    icon : <CiViewList className="w-16 h-16" />,
    days: "0",
    title: "Human Used(YTD)",
    mininote : " ",
    note: "Comp/in Lieu Time Flexible Policy"
  },
]




type CardProps = React.ComponentProps<typeof Card>

export function TimeOffCard({ className, ...props }: CardProps) {
  return (
    <div 
    className="flex flex-col sm:flex-row px-20 justify-around align-baseline mx-10 min-w-40 mt-10"> 
    {/* className="space-y-1 flex flex-col sm:flex-row m-2 justify-stretch content-center">  */}
     {cardOne.map((item, index) => (
      <div
        key={index}
        className="sm:flex-row h-full justify-center"
      >
    <Card className={cn("bg-sky-100 rounded items-center w-[300px] h-[200px] mx-10", className)} {...props}>
      <CardContent className="grid gap-1 align-middle justify-center">
        <div>
                <CardHeader className="text-lgfont-bold	">
                {item.header}
                 </CardHeader>

              <div className="flex items-center sm:flex-row m-1">
                  <div className="">
                    {item.icon}
                  </div>
                  <div className="text-3xl">
                    {item.days}
                  </div>
                </div>

                <div className="flex sm:flex-col ">
                <p className="text-lg text-muted-foreground">
                  {item.title}
                </p>
                <p className="text-sm text-muted-foreground text-slate-300">
                  {item.mininote ? item.mininote : " "}
                </p>
              </div>
        </div>
      </CardContent>
    </Card>
    <div className="text-slate-300 justify-center	text-lg ml-16"> {item.note} </div>
    </div>
     ))}
    </div>
  )
}


