import { createContext, useContext, useState } from 'react';

type ContextValue = {
    userId: string;
    Login: (userId: string) => void;
};

const AuthContext = createContext<any>({});

export const AuthProvider = (props: any) => {
    const [userId, setUserId] = useState<string>('');

    const Login = (userId: string) => {
        if (userId === '') return;
        setUserId(userId);
    };

    const AuthContextValue: ContextValue = {
        userId: userId,
        Login: Login,
    };

    return <AuthContext.Provider value={AuthContextValue} {...props} />;
};

export const useAuth = () => useContext(AuthContext);
