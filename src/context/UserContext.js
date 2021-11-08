.import React from "react";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [logado, setLogado] = React.useState(false);

  React.useEffect(() => {
    const userLogado = localStorage.getItem('userLogado')
    setLogado(Boolean(userLogado));
  }, [logado])

  return (
    <UserContext.Provider value={{ logado, setLogado }}>
      {children}
    </UserContext.Provider>
  );
};
