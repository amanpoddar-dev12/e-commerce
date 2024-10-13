import React, { createContext, useEffect, useState } from "react";
export const UserDetail = createContext(null);
function UserDetailsProvider({ children }) {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    console.log(userData);
  }, []);
  return (
    <UserDetail.Provider value={{ setUserData, userData }}>
      {children}
    </UserDetail.Provider>
  );
}

export default UserDetailsProvider;
