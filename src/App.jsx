import "./App.css";
import Main from "./components/Home/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen relative bg-black/90 w-[100%]">
      <div className="bg-[url('/background-2.png')] absolute inset-0 bg-contain w-[100%] h-[100%] -z-10"></div>
      <div className="hidden md:block lg:w-[50%] lg:h-[60%] w-[70%] h-[70%] bg-[url('/background-1.png')] absolute inset-0 bg-contain bg-no-repeat lg:top-[20%] lg:left-[25%] md:top-[25%] md:left-[20%] top-[35%] left-[15%]">
        <div className="absolute md:top-[22%] md:left-[20%] radial-2 rounded-full"></div>
      </div>

      <div className="absolute inset-0 w-[10%] h-[10%] md:top-[46%] lg:top-[43%] lg:left-[43%] md:left-[50%] radial rounded-full hidden md:block"></div>


      <div className="w-full h-full z-50 text-white">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
