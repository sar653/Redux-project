import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";

const Rootlayout = () => {
  return (
    <div>
      <Provider store={store}>
        <NavBar></NavBar>
        <main>
          <Outlet></Outlet>
        </main>
      </Provider>
    </div>
  );
};

export default Rootlayout;
