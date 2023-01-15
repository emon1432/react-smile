import { Route, Routes } from "react-router-dom";
import About from "./components/about";
import AddBlog from "./components/add-blog";
import Blog from "./components/blog";
import Careers from "./components/careers";
import Contact from "./components/contact";
import Home from "./components/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/add-blog" element={<AddBlog />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
