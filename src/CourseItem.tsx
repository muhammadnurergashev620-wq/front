// interface Props{
//     course:CourseItem;
// }





export default function CourseItem() {
  return (
    <div className="flex flex-row gap-5 w-169 h-47.25 p-[24px_20px_24px_24px] rounded-lg bg-[#1A1D1F]">
      <div className="w-46.25 h-35.25 shrink-0 overflow-hidden rounded-lg">
        <img className="w-full h-full object-cover" src="/image.png" alt="image"/>
      </div>

      <div className="flex flex-col justify-between h-full w-full">
        <div>
          <h2 className="text-[#F7F9FA] text-[20px] font-bold"> Shoxga hujum qilish </h2>
          <p className="text-[14px] text-[#F7F9FA]/60"> Andre Konfutsiy </p>
        </div>

        <div>
          <p className="text-[12px] text-[#F7F9FA]/60"> 160 000.00 uzs </p>
          <p className="text-[#82CC27] text-[16px] font-bold"> 107 000.00 uzs </p>
        </div>

        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row gap-3">
            <div className="flex flex-row gap-0.5 items-center">
              <img className="w-6 h-6" src="/beginner.svg" alt="icon"/>
              <p className="text-[#F7F9FA]/60 text-[14px]"> Beginner </p>
            </div>

            <div className="w-px h-5 bg-[#3D4549]"/>

            <div className="flex flex-row gap-0.5 items-center">
              <img className="w-6 h-6" src="/sections.svg" alt="icon"/>
              <p className="text-[#F7F9FA]/60 text-[14px]"> 20 ta bo'lim </p>
            </div>

            <div className="w-px h-5 bg-[#3D4549]"/>

            <div className="flex flex-row gap-0.5 items-center">
              <img className="w-6 h-6" src="/categories.svg" alt="icon"/>
              <p className="text-[#F7F9FA]/60 text-[14px]"> Himoyalash </p>
            </div>
          </div>

          <img src="/heart-outline.svg" alt="icon"/>
        </div>
      </div>
    </div>
  );
}
