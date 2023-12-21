import React from "react";
import ReactDOM from "react-dom/client";
// import Reg from "./src/comp/BookList";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Us } from "./p1/ie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <p className=" text-success text-center bg-info fs-1 p-2">
      Learning React js
    </p>

    <Us/>
  </React.StrictMode>
);
