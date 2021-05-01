import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./views/Home";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading === true ? (
        <div className="lottie">
          <lottie-player
            src="https://assets5.lottiefiles.com/temp/lf20_7s1fcA.json"
            background="transparent"
            speed="1.2"
            loop
            autoplay
          />
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;
