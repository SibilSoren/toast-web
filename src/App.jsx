import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Main from "./Pages/Main/Main";

function App() {
  let isSignedIn = true;
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
        <Route
          path="/app"
          element={
            <h1>
              <Main />
            </h1>
          }
        />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/app" element={<h1>App Page</h1>} />
      </Routes>
      {/* <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Navigate
      </button> */}
    </>
  );
}

export default App;
