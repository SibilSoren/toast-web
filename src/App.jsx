import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  let isSignedIn = false;
  let navigate = useNavigate();
  useEffect(() => {
    if (!isSignedIn) {
      navigate("/signin");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/signin" element={<h1>Sign In</h1>} />
      </Routes>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Navigate
      </button>
    </>
  );
}

export default App;
