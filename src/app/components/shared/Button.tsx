import { FC } from "react"

export const CoreTrackData =[
  {
header:"Quarter I",
description:"CS-101: Object-Oriented Programming using TypeScript",
number:1
  },
  {
    header:"Quarter II",
    description:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number:2
      },
      {
        header:"Quarter III",
        description:"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
        number:3
          }
]

const Button:FC<{text:string}> = ({text}) => {
  return (
    <button className="bg-[#00616C] text-white px-7 py-3 rounded-full
     hover:shadow-lg font-medium text-xl hover:scale-105 duration-300  ">{text}</button>
  )
}

export default Button