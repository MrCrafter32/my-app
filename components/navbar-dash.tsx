import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';



export const NavbarDash = async () => {
    
    const user = await currentUser();

    if(!user){return (
        <nav className="flex flex-row w-full bg-[#96E6B3] text-[#ffffff] ">
            <div className="w-1/2">
                <h1 className="text-3xl pl-7 p-2">Soggy</h1>
            </div>
            <div className="w-1/2 flex flex-row justify-end">
                <h1 className="text-2xl pl-7 p-2">Pricing</h1>
                <h1 className="text-2xl pl-7 p-2">About</h1>
                
            </div>
        </nav>
    )}

    if(user){
        return (
            <nav className="flex flex-row w-full bg-[#96E6B3] text-[#ffffff] ">
                <div className="w-1/2">
                    <h1 className="text-3xl pl-7 p-2">Soggy</h1>
                </div>
                <div className="w-1/2 flex flex-row justify-end">
                    <h1 className="text-2xl pl-7 p-2">Pricing</h1>
                    <h1 className="text-2xl pl-7 p-2">About</h1>
                    <div className='px-10  flex align-middle '>
                    <UserButton afterSignOutUrl="/Sign-In" />
                    </div>
                </div>
            </nav>
        )
    }
}

