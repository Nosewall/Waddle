import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

type ContextValue = {
    userId: string;
    Login: (userId: string, name: string) => void;
    CheckSession: () => boolean;
    GetUserId: () => string;
    GetName: () => string;
};

const AuthContext = createContext<any>({});

export const AuthProvider = (props: any) => {
    const [userId, setUserId] = useState<string>('');

    const Login = (userId: string, name: string) => {
        if (userId === '') return;
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('waddlerName', name);
        setUserId(userId);
    };

    const CheckSession = (): boolean => {
        const sesh = sessionStorage.getItem('userId');
        if (sesh) {
            setUserId(sesh);
            return true;
        }
        return false;
    };

    const GetUserId = (): string => {
        return sessionStorage.getItem('userId')!;
    };

    const GetName = (): string => {
        return sessionStorage.getItem('waddlerName')!;
    };

    const AuthContextValue: ContextValue = {
        userId: userId,
        Login: Login,
        CheckSession: CheckSession,
        GetUserId: GetUserId,
        GetName: GetName,
    };

    return <AuthContext.Provider value={AuthContextValue} {...props} />;
};

export const useAuth = () => useContext(AuthContext);
