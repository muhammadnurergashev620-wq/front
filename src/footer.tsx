export default function Footer() {
    return (
        <footer className="bg-[#1F2326] rounded-b-lg">
            <div className="flex justify-center pt-7">
                <img src="/logo.svg" alt="UzChess" className="h-7" />
            </div>
            <div className="flex justify-center gap-5 mt-3 text-[13px]">
                <h2>Biz haqimizda</h2>
                <h2>Cookie fayllari siyosati</h2>
                <h2>Foydalanish qoidalari</h2>
                <h2>Cookie fayllari siyosati</h2>
            </div>
            <div className="flex justify-center gap-3.5 mt-4 pb-5 text-[16px]">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-telegram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-square-facebook"></i>
            </div>
            <div className="flex justify-between items-center px-4 py-4 border-t border-[#272B30]">
                <h2 className="text-[14px]">© UzChess. All rights reserved.</h2>
                <i className="fa-solid fa-feather text-[#9DA1A3]"></i>
                <h2 className="text-[14px]">Foydalanish qoidalari</h2>
            </div>
        </footer>
    );
}
