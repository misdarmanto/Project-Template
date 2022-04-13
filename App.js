import React, { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import AppNavigations from "./navigations/AppNavigations";

export default function App() {
  const [isOffline, setIsOfflineStatus] = useState(false);
  useEffect(() => {
    const getNetInfo = NetInfo.addEventListener((state) => {
      setIsOfflineStatus(!state.isConnected || !state.isInternetReachable);
    });
    return () => getNetInfo();
  }, [isOffline]);

  console.log(isOffline)

  return <AppNavigations />;
}

