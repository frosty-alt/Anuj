import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
 
import Counter from "./User";
createRoot(document.getElementById("root")).render(
    <Counter/>
);