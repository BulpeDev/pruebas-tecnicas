import { createContext } from "react";

interface IAppContext {}

interface IAppProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({});

export const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
