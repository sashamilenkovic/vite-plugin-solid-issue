import React from "react";
import reactLogo from "/reactjs-icon.svg";

const App: React.FC = () => {
  return (
    <>
      <div className="logo">
        <img src={reactLogo} alt="React Logo" />
      </div>
      <div className="content">
        <h1>Hello World!</h1>
      </div>
    </>
  );
};

export default App;
