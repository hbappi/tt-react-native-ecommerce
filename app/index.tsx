import LoadingView from "@/components/loading-view";
import { AppRouterPath } from "@/library/constants/app-router-path";
import { useAuthStore } from "@/library/store/auth.store";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const InitialScreen = () => {
  const { token } = useAuthStore();
  const [isMounted, setIsMounted] = useState(false);

  const handleInitialRoute = () => {
    const loginAs = "customer";
    if (!token) {
      if (router.canDismiss()) {
        router.dismissAll();
      }
      return router.replace(AppRouterPath.auth.login);
    } else if (loginAs === "customer") {
      return router.replace(AppRouterPath.customer.home);
    }
    // removeToken();
  };

  useEffect(() => {
    if (!isMounted) return;
    handleInitialRoute();
  }, [token, isMounted]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <SafeAreaView>
      <LoadingView />
    </SafeAreaView>
  );
};

export default InitialScreen;
