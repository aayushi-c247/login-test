import React from "react";
import { BrowserRouter } from "react-router-dom";
import RenderRoutes from "./routes";
import { AuthProvider } from "./hooks/useAuth";

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <RenderRoutes />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
