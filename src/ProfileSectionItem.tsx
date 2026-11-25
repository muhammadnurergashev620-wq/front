export default function ProfileSectionItem({label, image}) {
  return <div className="flex flex-row items-center gap-2 w-71.5 h-15 bg-[#13181C] rounded-xl border border-[#1F272A] px-4.5 hover:border-[#1C92E0] hover:drop-shadow-[#1C92E0]/16 hover:drop-shadow-[0px_4px_32px] group">
    <img src={image} alt="icon"/>
    <h2 className="group-hover:text-white text-[#9DA1A3] text-[16px] font-medium">{label}</h2>
  </div>
}