import { useState } from "react";
import CartItem from "./CartItem";

const data = [
  {
    id: 1,
    title: "Bobbi Fisher shaxmatni o‘ynashni o‘rgataning va barchani",
    price: 155000,
    oldPrice: 205000,
    image: "/book.png",
    count: 5,
  },
  {
    id: 2,
    title: "Shaxmatchilar klubi nishoni",
    price: 2000000,
    oldPrice: 2500000,
    image: "/book2.png",
    count: 1,
  },
  {
    id: 3,
    title: "“Shox”lar uchun shox donasi ko‘rinishidagi nishon",
    price: 525250,
    oldPrice: 600000,
    image: "/book3.png",
    count: 20,
  },
];

export default function Cart() {
  const [items, setItems] = useState(data);
  const [coupon, setCoupon] = useState("");

  const plus = (id: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item)));
  };

  const minus = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  return (
    <div className="px-7 pt-4 pb-37">
      <div className="flex items-center gap-2 text-[13px] mb-11 ml-6">
        <img src="/home 1.svg" alt="" className="w-4.5 h-4.5" />
        <span className="text-[#9DA1A3]">Asosiy</span>
        <span className="w-1 h-1 rounded-full bg-[#6F767E]"></span>
        <span>Savatcha</span>
      </div>

      <div className="flex gap-5">
        <div className="flex-1 min-w-0 flex flex-col gap-4.5">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onPlus={() => plus(item.id)}
              onMinus={() => minus(item.id)}
            />
          ))}
          {items.length === 0 && (
            <p className="text-[#9DA1A3] text-center py-10">Savatcha bo'sh</p>
          )}
        </div>

        <div className="w-68 flex flex-col gap-5">
          <div className="bg-[#1F2326] border border-[#272B30] rounded-xl">
            <div className="flex flex-col gap-3 px-3 pt-4 pb-2 text-[13px]">
              <div className="flex justify-between">
                <span>To‘lov narxi:</span>
                <span>1 560 000.00 UZS</span>
              </div>
              <div className="flex justify-between">
                <span>Chegirma:</span>
                <span>156 000.00 UZS (10%)</span>
              </div>
              <div className="flex justify-between">
                <span>Kupon:</span>
                <span>0 UZS</span>
              </div>
              <div className="flex justify-between">
                <span>Yetkazib berish</span>
                <span>0 UZS</span>
              </div>
            </div>
            <div className="flex justify-between items-center px-3 py-3.5 border-y border-[#272B30]">
              <span className="text-[16px]">Jami:</span>
              <span className="text-[16px] font-bold">1 404 000.00 UZS</span>
            </div>
            <div className="p-3">
              <p className="text-[12px] text-[#9DA1A3] font-semibold mb-1.5">Kupon</p>
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Kupondagi kodni kiriting"
                className="w-full h-9 px-2.5 rounded-lg bg-[#1A1D1F] border border-[#33383F] text-[12px] outline-none placeholder:text-[#6F767E]"
              />
              <button className="w-full h-10.5 mt-3 rounded-md bg-[#2D9CDB] flex items-center justify-center gap-2 text-[16px] cursor-pointer">
                <img src="/money.svg" alt="" className="w-5" />
                Rasmiylashtirish
              </button>
            </div>
          </div>

          <div className="relative h-40 rounded-md bg-[#1E5BB8] p-3.5 overflow-hidden">
            <div className="absolute -top-1 right-0 w-15 h-15 bg-[#F2C94C] [clip-path:polygon(0_0,100%_0,100%_100%)]"></div>
            <p className="text-[10px] font-semibold mb-2">Yoshlar portali</p>
            <h3 className="text-[17px] font-semibold leading-5 w-48">
              Aynan <span className="text-[#F2C94C]">siz</span> uchun qanday imtiyozlar borligini bilib oling
            </h3>
            <button className="mt-2.5 h-8 px-4 rounded bg-[#2D9CDB] text-[13px] flex items-center gap-2">
              Batafsil
              <img src="/arrow-right.svg" alt="" className="w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
