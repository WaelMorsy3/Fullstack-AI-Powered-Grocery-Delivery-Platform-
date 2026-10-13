import LoginModal from "../modal/LoginModal";
import RegisterModal from "../modal/RegisterModal";
import Navbar from "../navbar/Navbar";
import Footer from "../ui/Footer";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 ">
        {children}
      </div>
       <LoginModal/>
       <RegisterModal/>
       <Footer/>
    </>
  );
}
