import "./App.css";
import Cards from "./Components/Cards/Cards";

function App() {
  return (
    <>
      <div className=" hidden md:w-[100%] md:h-[200px] md:absolute md:z-[-1] md:bg-gray-700"></div>
      <div className="mt-10 mx-5 md:flex md:justify-between md:mt-6">
        <div>
        <h1 className="text-white font-extrabold text-[1.5rem] ">
          Social Media Dashboard
        </h1>
        <p className="text-gray-500 pb-5 text-sm mt-2">
          Total followers: 23,004
        </p>
        </div>
        <div className="bg-gray-600 h-[2px] md:hidden"></div>
        <div className="flex justify-between mt-5">
          <p className="text-gray-400 font-bold">Dark Mode</p>
          <div class="checkbox-wrapper-5">
            <div class="check">
              <input id="check-5" type="checkbox" />
              <label for="check-5"></label>
            </div>
          </div>
        </div>
      </div>
      <Cards />
    </>
  );
}

export default App;
