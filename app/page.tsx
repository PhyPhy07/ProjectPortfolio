import ContactSection from "@/src/component/ContactSection";
import HeroSection from "@/src/component/HeroSection";
import ProjectsSection from "@/src/component/ProjectsSection";
import TechStack from "@/src/component/TechStack";
import WorkExperience from "@/src/component/WorkExperience";

const Home = () => {
  return (
    <>
     <main className="max-w-7xl mx-auto px-6 lg:px-8">
     <HeroSection/>
    <WorkExperience/>
     <TechStack/>
     <ProjectsSection/>
     <ContactSection/>
     </main>
    </> 
  );
};

export default Home;