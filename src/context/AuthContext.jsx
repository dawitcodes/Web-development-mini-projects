import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

const USERS_KEY = "travel-users";
const CURRENT_USER_KEY = "travel-current-user";

function getStoredUsers() {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
}

function getStoredCurrentUser() {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
}

export function AuthProvider({ children }) {
    const [users, setUsers] = useState(getStoredUsers);
    const [currentUser, setCurrentUser] = useState(getStoredCurrentUser);

    useEffect(() => {
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
        } else {
            localStorage.removeItem(CURRENT_USER_KEY);
        }
    }, [currentUser]);

    const signup = (name, email, password) => {
        const existingUser = users.find((u) => u.email === email);
        if (existingUser) {
            return { success: false, message: "User already exists with this email." };
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            password
        };

        setUsers((prev) => [...prev, newUser]);
        setCurrentUser({ id: newUser.id, name: newUser.name, email: newUser.email });

        return { success: true, message: "Account created successfully." };
    };

    const login = (email, password) => {
        const foundUser = users.find(
            (u) => u.email === email && u.password === password
        );

        if (!foundUser) {
            return { success: false, message: "Invalid email or password." };
        }

        setCurrentUser({
            id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email
        });

        return { success: true, message: "Logged in successfully." };
    };

    const logout = () => {
        setCurrentUser(null);
    };

    const value = useMemo(
        () => ({
            currentUser,
            signup,
            login,
            logout,
            isLoggedIn: Boolean(currentUser)
        }),
        [currentUser, users]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return context;
}