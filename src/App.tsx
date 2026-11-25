import Footer from "./footer";
import Header from "./Header";
// import Cart from "./Cart";
import BookDetail from "./BookDetail";

export default function App() {
  return <div className="p-7.75">
    <div className="w-256.5 bg-[#1A1D1F] rounded-lg border border-[#1F272A]">
      <Header/>
      {/* <Cart/> */}
      <BookDetail/>
      <Footer/>
      
    </div>
  </div>;
}
