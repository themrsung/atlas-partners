import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/landing/Landing";
import { PageNotFound } from "./pages/page-not-found/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
