import { Navbar } from "@/components/navbar";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="h-screen">
    <Navbar />
    <div className="flex flex-row justify-center items-center h-full">
        <div className="w-2/3 pl-10 flex flex-col items-center">
            <Image src='/login.svg' alt='' width={500} height={500}/>
            </div>
        <div className="w-1/3 pr-10"><SignIn/></div>
    </div>
    </div>
  )
}