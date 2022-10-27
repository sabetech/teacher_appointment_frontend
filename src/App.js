import "./App.css";
import React, { useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { Routes, Route, Link } from "react-router-dom";
import { DynamicItem, Sidebar, SideBarMenuItems } from "./components";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const [ user, setUser ] = useState(null);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      
      { 
      !user ? ( <>
                  <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                  </Routes>
                </>
                ) 
                : (
          <div id="main">
            <Sidebar>
              <Routes>
                <Route path="/" element={<DynamicItem page="homepage" />} />
                {SideBarMenuItems &&
                  SideBarMenuItems.map((item, index) => (
                    <Route
                      key={index}
                      path={item.path}
                      element={
                        <DynamicItem page={item.name} component={item.component} />
                      }
                    />
                  ))}
              </Routes>
            </Sidebar>
          </div>
      )
    }
    </AuthContext.Provider>
  );
}

export default App;
