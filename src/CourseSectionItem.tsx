import LessonItem from "./LessonItem.tsx";
import {useState} from "react";

export default function CourseSectionItem() {
  const [isOpen, setIsOpen] = useState(false);
  
  return <div className="select-none">
    <div className="flex flex-row justify-between items-center h-16 px-5" onClick={() => setIsOpen(!isOpen)}>
      <h1 className="text-[24px] text-[#F7F9FA] font-bold">1. Asosiy donalar</h1>
      <img className={`${isOpen ? '' : 'rotate-z-180'}`} src="/arrow-up.svg" alt="icon"/>
    </div>
    {isOpen && <div className="grid grid-cols-3 gap-6 w-full bg-[#F7F9FA]/3 p-5">
      <LessonItem/>
      <LessonItem/>
      <LessonItem/>
      <LessonItem/>
      <LessonItem/>
      <LessonItem/>
      <LessonItem/>
    </div>}
  </div>;
}