import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Main/Main";
import Login from "./Login/Login";
import App from "./App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
