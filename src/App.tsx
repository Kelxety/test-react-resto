import { lazy } from "react";
import "./App.css";

const ListOfRestaurant = lazy(
  () => import("../src/components/ListOfRestaurant")
);

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-7xl">
        <h1 className="text-4xl font-semibold">Test Application</h1>
        <div>
          <ListOfRestaurant />
        </div>
      </div>
    </>
  );
}

export default App;
