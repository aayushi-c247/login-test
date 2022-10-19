import React from "react";
import { BrowserRouter } from "react-router-dom";
import RenderRoutes from "./routes";

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <BrowserRouter>
        <RenderRoutes />
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
