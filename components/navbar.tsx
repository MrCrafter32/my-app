export const Navbar = () => {

   
    return (
            <nav className="flex flex-row w-full bg-[#96E6B3] text-[#ffffff] ">
                <div className="w-1/2">
                    <h1 className="text-3xl pl-7 p-2">Soggy</h1>
                </div>
                <div className="w-1/2 flex flex-row justify-end">
                    <h1 className="text-2xl pl-7 p-2">Pricing</h1>
                    <h1 className="text-2xl pl-7 p-2">About</h1>
                    <a href="/sign-in" className="text-2xl pl-7 p-2">Sign-In</a>
                    <a href="/sign-up" className="text-2xl pl-7 p-2 pr-5">Sign-Up</a>
                </div>
                
            </nav>
    )
}
