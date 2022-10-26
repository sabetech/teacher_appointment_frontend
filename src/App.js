import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { DynamicItem, Sidebar, SideBarMenuItems } from "./components";

function App() {
  return (
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
  );
}

export default App;
