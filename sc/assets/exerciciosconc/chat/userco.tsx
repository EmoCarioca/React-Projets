import { createContext, useContext, useState } from 'react';

type UserCtx = {
    user: string;
    setUser: (user: string) => void
}

export const UserContext = createContext<UserCtx | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState('');

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    ) 
}

export const UUser = () => useContext(UserContext)!; 