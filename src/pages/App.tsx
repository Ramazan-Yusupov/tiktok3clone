import { Route, Routes } from "react-router-dom";
import { Layout } from "@/Layout";
import { Home } from "./Home/Home";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}
