// import { BellIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
//   CardDescription,
//   CardFooter,
  CardHeader,
//   CardTitle,
} from "@/components/ui/card"

import { EnvelopeClosedIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { Phone , Hash, Clock} from 'lucide-react';
import { MdGroups } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";


const cardOne = [
  {
    icon : <Phone size={10} />,
    title: "0787933243",
  },
  {
    icon : <EnvelopeClosedIcon />,
    title: "aaa@mail.ru",
  },
  {
    icon : <LinkedInLogoIcon />,
    title: <FaFacebookF />   ,
    secondicon : <TwitterLogoIcon />
  },
]

const cardTwo = [
    {
      title: "Sep.3,2020",
    },
    {
      title: "3y-9m-20d",
    },
  ]

const cardThree = [
    {
      icon : <Hash />,
      title: "5",
    },
    {
      icon : <Clock />,
      title: "Full-time",
    },
    {
      icon : <MdGroups />,
      title: "Operations",
    },
    {
        icon : <TbWorld />,
        title: "Europe",
      },
      {
        icon : <CiLocationOn />,
        title: "London, UK",
      },
  ]



  const cardFour = [
    {
      icon : <CgProfile  />,
      title: "Shane",
    },
    {
      icon : <CgProfile  />,
      title: "Nathan",
    },
    {
      icon : <CgProfile  />,
      title: "Mitchell",
    },
    {
        icon : <CgProfile  />,
        title: "Phillip",
      },
      {
        icon : <MdGroups />,
        title: "4 More ...",
      },
  ]

type CardProps = React.ComponentProps<typeof Card>

export function CardsListOne({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[10vw] m-2", className)} {...props}>
      <CardContent className="m-1">
        <div>
          {cardOne.map((notification, index) => (
            <div
              key={index}
              className="m-1 pb-1 last:mb-0 last:pb-0"
            >
              <div className="space-y-1 flex items-center flex-col sm:flex-row m-1">
                <p className="text-sm font-medium leading-none m-1">
                  {notification.icon}
                </p>
                <p className="text-sm text-muted-foreground sm:flex-row m-1">
                  {notification.title}
                </p>
                {notification.secondicon ? 
                (<p className="text-sm text-muted-foreground sm:flex-row m-1">
                  {notification.secondicon}
                </p>) : null }
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function CardsListTwo({ className, ...props }: CardProps) {
    return (
      <Card className={cn("w-[10vw] m-2", className)} {...props}>
        <CardHeader> Hire Date </CardHeader>
        <CardContent className="grid gap-1 m-1">
          <div>
            {cardTwo.map((notification, index) => (
              <div
                key={index}
                className="m-1 sm:flex-row items-start pb-1 last:mb-0 last:pb-0"
              >
                <div className="space-y-1 flex items-center flex-col sm:flex-row m-1">
                  <p className="text-sm text-muted-foreground">
                    {notification.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

export function CardsListThree({ className, ...props }: CardProps) {
    return (
      <Card className={cn("w-[10vw] m-2", className)} {...props}>
        <CardContent className="grid gap-1 m-1">
          <div>
            {cardThree.map((notification, index) => (
              <div
                key={index}
                className="m-1 sm:flex-row items-start pb-1 last:mb-0 last:pb-0 "
              >
                <div className="space-y-1 flex items-center flex-col sm:flex-row m-1">
                  <p className="text-sm font-medium leading-none m-1">
                    {notification.icon}
                  </p>
                  <p className="text-sm text-muted-foreground m-1">
                    {notification.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  
export function CardsListFour({ className, ...props }: CardProps) {
    return (
      <Card className={cn("w-[10vw] m-2", className)} {...props}>
        <CardHeader> Direct Reports </CardHeader>
        <CardContent className="grid gap-1 m-1">
          <div>
            {cardFour.map((notification, index) => (
              <div
                key={index}
                className="m-1 sm:flex-row items-start pb-1 last:mb-0 last:pb-0"
              >
                <div className="space-y-1 flex items-center flex-col sm:flex-row m-1">
                  <p className="text-sm font-medium leading-none m-1">
                    {notification.icon}
                  </p>
                  <p className="text-sm text-muted-foreground m-1">
                    {notification.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }
