import { RouterProvider } from "react-router-dom";
import { router } from "./utils/Router";

const App = () => {
  return (
    <div>
      <div className="flex bg-zinc-100 ">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
