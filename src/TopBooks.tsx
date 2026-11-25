import TopBookItem from "./TopBookItem.tsx";

export default function TopBooks() {
  return <div className="flex flex-col gap-4.5 bg-[#1A1D1F] rounded-lg w-81.5">
    <div className="flex flex-row justify-between pt-4 px-4">
      <h1 className="text-[18px] text-[#FCFCFC] font-medium">Top kitoblar</h1>
      <button className="flex flex-row items-center text-[#9DA1A3] bg-transparent border-none">
        Barchasi
        <img src="/arrow-right.svg" alt="icon"/>
      </button>
    </div>
    <div className="flex flex-col gap-3 overflow-hidden pl-4 pb-4">
      <TopBookItem author="D.Bronstein" title="Zurixdagi shaxmat musobaqasi" image="/book.png"/>
      <div className="w-77.5 h-px bg-[#1F272A]"></div>
      <TopBookItem author="A.Nimzowitsch" title="Mening tizimim" image="/book2.png"/>
      <div className="w-77.5 h-px bg-[#1F272A]"></div>
      <TopBookItem author="B.Fischer" title="Mening esdaqolarlik o'yinlarim" image="/book3.png"/>
    </div>
  </div>
}
