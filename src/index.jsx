import { createRoot } from "react-dom/client";
import App from "./App";
import Header from "../Components/Header";
import Main from "../Components/Main";



const root = createRoot(document.getElementById("root"));

root.render(<App />);
