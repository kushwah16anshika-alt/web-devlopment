import cravingLogo from "./assets/craving.png";
const App = () => {
  return (
    <>
      <div className="bg-orange-500 text-white p-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>
            <img src={cravingLogo} alt="Logo" className="w-20 h-10" />
          </span>
        </div>

        <div className="flex gap-3">
          <button className="bg-transparent text-white px-3 py-1 rounded-sm hover:text-orange-500 hover:bg-white  ">
            Login
          </button>

          <button className="bg-white text-orange-500 px-3 py-1 rounded-sm hover:text-white hover:bg-orange-500 ">
            Register
          </button>
        </div>
      </div>
      




    </>
  );
};
export default App;
