import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import router from "./Routes/Routes/Routes";

// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </div>
    </Provider>
  );
}

export default App;
