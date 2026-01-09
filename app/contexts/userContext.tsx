'use client'

import React, { createContext, useContext } from "react";

export type User = {
  id: string;
  name: string;
} | null;

export const UserContext = createContext<User>(null);

export function UserContextProvider({
  user,
  children,
}: {
  user: User;
  children: React.ReactNode;
}) {
  return <UserContext.Provider value={user}>
    
    {children}
    
    </UserContext.Provider>;
}

export function useUser(){

    return useContext(UserContext)
}
