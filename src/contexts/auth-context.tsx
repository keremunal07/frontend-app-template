import { createContext, useContext, useState } from 'react';
import { AuthContext } from 'types';

const AuthContext = createContext<AuthContext>({
  isAuth: false,
  setIsAuth: () => null,
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>;
};
