import HeroSection from "./revamped/HeroSection";
import AboutSection from "./revamped/AboutSection";

const HomeRevamped = () => {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-200 selection:text-blue-900">
      <HeroSection />
      
      {/* Decorative transition between Hero and About */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-2 hidden sm:block"></div>
      <AboutSection />
    </main>
  );
};

export default HomeRevamped;
