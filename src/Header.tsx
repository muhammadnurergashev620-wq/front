export default function Header() {
    return (
        <header className="flex items-center justify-between h-15.5 px-5 border-b border-[#272B30] rounded-t-lg bg-[#1F2326]">
            <div className="flex items-center gap-4">
                <img src="/logo.svg" alt="UzChess" className="h-7" />
                <div className="w-px h-6 bg-[#33383F]"></div>
                <h2 className="text-[14px]">O‘zbekcha</h2>
                <i className="fa-solid fa-chevron-down text-[12px] text-[#9DA1A3]"></i>
            </div>
            <div className="flex items-center gap-8 text-[13px] text-[#9DA1A3]">
                <h2 className="text-white border-b-2 border-[#2D9CDB] pb-1">Asosiy</h2>
                <h2>Yangiliklar</h2>
                <h2>Kurslar</h2>
                <h2>Kutubxona</h2>
                <h2>Bog‘lanish</h2>
            </div>
            <div className="flex items-center gap-5">
                <i className="fa-solid fa-magnifying-glass text-[17px]"></i>
                <i className="fa-solid fa-cart-shopping text-[16px]"></i>
                <i className="fa-regular fa-bell text-[17px]"></i>
                <div className="w-px h-6 bg-[#33383F]"></div>
                <h2 className="text-[14px]">Jasurbek Pulatov</h2>
                <div className="w-7 h-7 rounded-full bg-[#F2994A] flex items-center justify-center text-[13px] font-semibold -ml-3">J</div>
            </div>
        </header>
    );
}
