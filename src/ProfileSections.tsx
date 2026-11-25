import ProfileSectionItem from "./ProfileSectionItem.tsx";

export default function ProfileSections() {
  return <div className="flex flex-col gap-3 w-81.5 bg-[#1A1D1F] rounded-2xl border border-[#1F272A] p-5 overflow-hidden">
    <ProfileSectionItem label="Sotib olingan kurslar" image="/purchased.svg"/>
    <ProfileSectionItem label="Buyurtmalar" image="/orders.svg"/>
    <ProfileSectionItem label="Saqlanganlar" image="/saved.svg"/>
    <ProfileSectionItem label="Umumiy sozlamalar" image="/general-settings.svg"/>
  </div>;

}