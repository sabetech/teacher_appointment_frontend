import './App.css';
import React, { useEffect, useState, useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { DynamicItem, Sidebar, SideBarMenuItems } from './components';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TeacherDetail from './components/Teacher/Teacher-Detail';

function App() {
  const [user, setUser] = useState(null);
  const userVal = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    const serializedUser = localStorage.getItem('user');
    if (serializedUser) {
      setUser(JSON.parse(serializedUser));
    } else {
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={userVal}>
      {!user ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      ) : (
        <div id="main">
          <Sidebar>
            <Routes>
              {SideBarMenuItems
                && SideBarMenuItems.map((item, index) => (
                  <Route
                    key={index}
                    path={item.path}
                    element={(
                      <DynamicItem
                        page={item.name}
                        component={item.component}
                      />
                    )}
                  />
                ))}
              <Route
                path="/teachers/details/:id"
                element={(
                  <DynamicItem
                    page="teacher details"
                    component={<TeacherDetail />}
                  />
                )}
              />
              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />
            </Routes>
          </Sidebar>
        </div>
      )}
    </AuthContext.Provider>
  );
}

export default App;
