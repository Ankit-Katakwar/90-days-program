import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageView from "./pages/ImageView";
import UploadImage from "./pages/uploadImage";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/imageVIew" element={<ImageView />} />
          <Route path="/uploadImage" element={<UploadImage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
