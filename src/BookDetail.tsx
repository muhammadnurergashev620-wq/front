import { useState } from "react";

const books = [
  { id: 1, title: "Bobbi Fisher shaxmatni o‘ynashni o‘rgataning", author: "J.Silman", image: "/book.png" },
  { id: 2, title: "Mening tizimim", author: "J.Silman", image: "/book2.png" },
  { id: 3, title: "Zurixdagi shaxmat musobaqasi", author: "J.Silman", image: "/book3.png" },
  { id: 4, title: "Mening esdaqolarlik o‘yinlarim", author: "J.Silman", image: "/book.png" },
];

const info = [
  { icon: "/beginner.svg", label: "Daraja", value: "Boshlangich" },
  { icon: "/author.svg", label: "Muallif", value: "Jeremy Silman" },
  { icon: "/saved.svg", label: "Sahifa soni", value: "231" },
  { icon: "/category.svg", label: "Chop etilgan sana", value: "2002" },
];

export default function BookDetail() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="px-4 pt-4 pb-14">
      <div className="flex items-center gap-2 text-[13px] mb-6 ml-7">
        <img src="/home 1.svg" alt="" className="w-4.5 h-4.5" />
        <span className="text-[#9DA1A3]">Asosiy</span>
        <span className="w-1 h-1 rounded-full bg-[#6F767E]"></span>
        <span className="text-[#9DA1A3]">Kutubxona</span>
        <span className="w-1 h-1 rounded-full bg-[#6F767E]"></span>
        <span>Shaxmatdagi qobiliyatliringizga qayta baxo bering</span>
      </div>

      <div className="flex gap-5 items-start">
        <div className="flex-1 bg-[#1F2326] border border-[#272B30] rounded-lg p-6.5 pb-2">
          <div className="flex gap-4">
            <img src="/book.png" alt="" className="w-42 h-58 rounded-sm object-cover" />
            <div className="flex-1">
              <h1 className="text-[25px] font-semibold leading-8 w-110">
                Shaxmatdagi qobiliyatliringizga qayta baxo bering
              </h1>
              <div className="flex items-center gap-2 mt-4">
                <img src="/price.svg" alt="" className="w-6" />
                <span className="text-[17px] font-semibold">55 000.00 UZS</span>
                <span className="text-[12px] text-[#9DA1A3] line-through">160 000.00 uzs</span>
              </div>

              <div className="grid grid-cols-4 border border-[#272B30] rounded mt-4.5">
                {info.map((i, index) => (
                  <div
                    key={i.label}
                    className={`px-2.5 py-2 ${index !== 3 ? "border-r border-[#272B30]" : ""}`}
                  >
                    <div className="flex items-center gap-1 text-[12px] text-[#9DA1A3]">
                      <img src={i.icon} alt="" className="w-3.5 h-3.5" />
                      {i.label}
                    </div>
                    <p className="text-[13px] mt-0.5">{i.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                <button className="w-51 h-11 rounded-md bg-[#2D9CDB] flex items-center justify-center gap-2.5 text-[16px] cursor-pointer">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Savatchaga
                </button>
                <button
                  onClick={() => setLiked(!liked)}
                  className={`w-11 h-10.5 rounded-lg border border-[#6F767E] flex items-center justify-center cursor-pointer ${
                    liked ? "bg-[#E03131]" : "bg-[#33383F]"
                  }`}
                >
                  <img src="/heart.svg" alt="" className="w-5" />
                </button>
                <button className="w-11 h-11 rounded-lg border border-[#6F767E] bg-[#33383F] flex items-center justify-center cursor-pointer">
                  <img src="/share.svg" alt="" className="w-5" />
                </button>
              </div>
            </div>
          </div>

          <h2 className="text-[20px] font-semibold mt-5 mb-2">Kitob haqida</h2>
          <p className="text-[14px] text-[#C4C4C4] leading-5.5">
            Shaxmatni qanday qayta baholash kerak, uzoq vaqtdan beri zamonaviy klassika hisoblangan. Ushbu
            4-nashr Silmanning nomutanosiblik haqidagi innovatsion kontseptsiyasini butunlay yangi darajaga
            olib chiqadi. 1400 dan 2100 gacha bo'lgan reyting oralig'idagi o'yinchilar va shaxmat bo'yicha
            tayyor o'quv dasturini qidirayotgan o'qituvchilar uchun mo'ljallangan muallif o'quvchini
            nomutanosiblik asoslari orqali olib boradigan, barcha nomutanosibliklarning har bir tafsiloti
            o'zlashtirilishini ta'minlaydigan aqlni kengaytiruvchi sayohatni baham ko'radi. va shaxmat
            o'yinchisini/sevuvchisini har doim xohlagan, lekin erisha olishiga ishonmagan narsasi bilan
            qoldiradi: usta darajasidagi pozitsion poydevor.
          </p>
        </div>

        <div className="w-70 flex flex-col gap-5">
          <div className="relative h-41 rounded-md bg-[#1E5BB8] p-3.5 overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#F2C94C] [clip-path:polygon(0_0,100%_0,100%_100%)]"></div>
            <p className="text-[10px] font-semibold mb-2">Yoshlar portali</p>
            <h3 className="text-[17px] font-semibold leading-5 w-48">
              Aynan <span className="text-[#F2C94C]">siz</span> uchun qanday imtiyozlar borligini bilib oling
            </h3>
            <button className="mt-3 h-8.5 px-7 rounded bg-[#2D9CDB] text-[14px] flex items-center gap-2">
              Batafsil
              <img src="/arrow-right.svg" alt="" className="w-3.5" />
            </button>
          </div>

          <div className="bg-[#1F2326] border border-[#272B30] rounded-lg">
            <div className="flex justify-between items-center px-3.5 pt-3.5 pb-2">
              <h3 className="text-[18px]">Tavfsiya</h3>
              <button className="text-[#6F767E] text-[13px] flex items-center gap-1">
                Barchasi
                <img src="/arrow-right.svg" alt="" className="w-3" />
              </button>
            </div>
            {books.map((book, index) => (
              <div
                key={book.id}
                className={`flex gap-2.5 px-3 py-2.5 ${index !== books.length - 1 ? "border-b border-[#272B30]" : ""}`}
              >
                <img src={book.image} alt="" className="w-12 h-17 rounded-sm object-cover" />
                <div className="flex flex-col">
                  <p className="text-[13px] font-semibold leading-4.5">{book.title}</p>
                  <p className="text-[12px] text-[#9DA1A3] mt-0.5">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
