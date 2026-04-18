import { Navbar } from "@/sections/Navbar";
import { MainContent } from "@/sections/MainContent";

export const App = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white">
      <Navbar />
      <MainContent />
    </div>
  );
};
