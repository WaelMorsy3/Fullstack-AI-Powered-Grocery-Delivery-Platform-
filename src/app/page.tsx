import LoginRedirectHandler from "@/components/auth/LoginRedirectHandler";
import AboutSection from "@/components/home/AboutSection";
import Banner from "@/components/home/Banner";
import CategorySection from "@/components/home/CategorySection";
import NewArrivals from "@/components/home/NewArrivals";
import FrontendLayout from "@/components/layouts/FrontendLayout";

export default function Home() {
  return (
    <FrontendLayout>
      <div className="mt-8">
        <Banner />
        <CategorySection />
        <NewArrivals />
        <AboutSection />
        <LoginRedirectHandler />.
      </div>
    </FrontendLayout>
  );
}
