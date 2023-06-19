import React, { useContext } from "react";
import { AuthContext } from "../Contexts/UserContext";
import { Navigate } from "react-router-dom";
const PrivateRoutes = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  if(loading){
    return <span className="loading loading-dots loading-lg absolute top-2/4 left-2/4"></span>;
  }

  if (user && user.uid) {
    return children; 
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
