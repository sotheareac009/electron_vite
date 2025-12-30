import React from "react";
import { createRoot } from "react-dom/client";
import { SingInComponent } from "./component/sing-up";

const App = () => {
  return (
    <div>
      <SingInComponent />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
