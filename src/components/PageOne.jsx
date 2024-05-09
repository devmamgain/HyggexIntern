import home from "../assets/Frame.svg"
import bulb from "../assets/bulb.svg"
import sound from "../assets/sound.svg"
import left from "../assets/left.svg"
import reload from "../assets/reload.svg"
import large from "../assets/largee.svg"
import logo2icon from "../assets/logo2icon.svg"
import plus from "../assets/plus.svg"
import rightarrow from "../assets/rightarrow.svg"

const PageOne = ()=>{
return(
<div className="py-5 px-20">
    <h1 className="flex">
    <img src={home} alt="homes"/> 
    <div className="mt-1">
    <span className="text-[#06286E] font-bold">&gt; </span> <span>Flashcard</span> <span className="text-[#06286E] font-bold">&gt; </span><span> Mathematics</span> <span className="text-[#06286E] font-bold">&gt; </span> <span className="text-[#06286E] font-semibold"> Relation and Function</span>
    </div>
    </h1>
    <h1 className="mt-10 font-bold text-[#06286E] text-4xl">Relations and Functions ( Mathematics )</h1>
    <div className="mt-10 flex flex-grow gap-10 justify-center">
       <h1>Study</h1>
       <h1>Quiz</h1>
       <h1>Test</h1>
       <h1>Game</h1>
       <h1>Others</h1>
    </div>
    <div className="flex-col flex-grow mt-10">
    <div className="rounded-3xl bg-gradient-to-tr from-[#1F80EB] from-10% via-[#2284F1] via-30%  to-[#051A91] to-90%  w-[50%] h-[330px] mx-auto">
        <div className="flex p-8">
        <img src={bulb} alt="bulbs"/>
        <img src={sound} alt="sounds" className="ml-auto"/>
        </div>
      <h1 className="text-center font-bold text-3xl text-white mt-12">9 + 6 + 7x - 2x - 3</h1>
    </div>
    <div className="flex flex-grow gap-24 justify-center mt-10 w-[50%] mx-auto">
    <img src={reload} alt="reloads"/>
    <img src={left} alt="lefts"/>
    <h1 className="mt-5 text-[#202B37] font-bold">01/10</h1>
    <img src={rightarrow} alt="rightarrows"/>
    <img src={large} alt="larges"/>
    </div>
    </div>
    <div className="flex mt-3">
    <img src={logo2icon} alt="noicon" className="w-24 h-24 "/>

       <div className="mt-6">
        
       <h1 className=" text-xs text-[#696671]">Published by </h1>
       <h1 className="ml-3 font-semibold text-[#06286E] text-xl">Hygge<span className="font-bold">X</span></h1>
       </div>
       <div className="flex ml-auto gap-3 mt-4">
        <img src={plus} alt="noplus" className="w-12 h-12"/>
        <h1 className="text-[#164EC0] font-bold mt-2"> Create Flashcard</h1>
       </div>
    </div>
    <div className="flex flex-col gap-5 mt-16">
        <h1 className="text-3xl font-bold text-[#164EC0]">FAQ</h1>
        <select className="py-3 pl-5  w-[800px] rounded-xl border border-t-[#217EEC] border-x-[#082299] border-b-[#082299]">
            <option >Can education flashcards be used for all age groups?</option>
            <option>anything</option>
            <option>anything</option>
        </select>
        <select className="py-3 pl-5 w-[800px] rounded-xl border border-t-[#217EEC] border-x-[#082299] border-b-[#082299]">
            <option >How do education flashcards work?</option>
            <option>anything</option>
            <option>anything</option>
        </select>
        <select className="py-3 pl-5 w-[800px] rounded-xl border border-t-[#217EEC] border-x-[#082299] border-b-[#082299]">
            <option >Can education flashcards be used for test preparation?</option>
            <option>anything</option>
            <option>anything</option>
        </select>
    </div>
</div>
)

}
export default PageOne