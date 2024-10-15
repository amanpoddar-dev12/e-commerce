import { createContext } from "react";

const UserDataContext = createContext(null);

function UserDataProvider({children})
{ 
    

    return <UserDataContext.Provider value={ }>
       {children}
   </UserDataContext.Provider>
}

export default UserDataProvider;