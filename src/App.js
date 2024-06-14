import AppBar from "./Components/AppBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerContent from "./Components/BannerContent";
import LabTest from "./Components/LabTest";
import LabStudies from "./Components/LabStudies";
import Experts from "./Components/Experts";
import Explore from "./Components/Explore";
import SecondAppBar from "./Components/SecondAppBar";
import ResearchPaper from "./Components/ResearchPaper";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <AppBar/>
    <SecondAppBar/>
    <BannerContent/>
    <LabTest/>
    <LabStudies/>
    <Experts/>
    <Explore/>
    <ResearchPaper/>
    <Footer/>
    </>
  );
}

export default App;
