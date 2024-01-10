import React, { useState, useCallback } from "react";
import { Notification } from "./components/utils/Notifications";
import "./App.css";

const App = () => {
  const [balance, setBalance] = useState("0");

  const getBalance = useCallback(async () => {
    // get balance
  });

  const logout = async () => {
     // logout
  };


  return (
    <>
      <Notification />



      <h1>ZK Login</h1>
    </>
  );
};

export default App;
