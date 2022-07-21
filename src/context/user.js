import React from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    // const currentUser = {
    //     name: "Duane",
    //     interests: ["Coding", "Biking", "Cooking"],
    //   };
      return (
        <UserContext.Provider value={null}>
            {children}
        </UserContext.Provider>
    );
 }
    

export { UserContext, UserProvider };
