import logoicon from "../assets/logoicon.svg"
const NavBar =()=>{
    return(
        <nav className="flex py-5 px-20 text-[#06286E]">
            <div className="flex">
      <img src={logoicon} alt="nologoicon" className="h-7 w-10 mt-2"/> 
       <h1 className="mt-1 ml-3 font-semibold text-2xl">Hygge<span className="font-bold">X</span></h1>
      </div> <div className="flex ml-auto gap-10 text-[#3A3740]">
            <a className=" mt-2">Home</a>
            <a className=" mt-2">FlashCard</a>
            <a className=" mt-2">Contact</a>
            <a className=" mt-2">FAQ</a>
            <a className="text-[#FFFFFF] bg-gradient-to-b from-[#06286E] to-[#164EC0] py-3 px-8 rounded-3xl">Login</a>
        </div>
        </nav>
    )
}

export default NavBar