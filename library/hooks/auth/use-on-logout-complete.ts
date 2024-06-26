import { useAuthStore } from "@/library/store/auth.store";
import { useUserStore } from "@/library/store/user.store";
import { useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import { router } from "expo-router";
import { AppRouterPath } from "@/library/constants/app-router-path";

export const useOnLogoutComplete = () => {
  const onComplete = useCallback(() => {
    try {
      if (router.canDismiss()) router.dismissAll();
    } catch (e) {
    } finally {
      router.replace(AppRouterPath.auth.login);
    }

    // console.log("login complete. token is: ", token);
    // const obj = jwtDecode(token);
    // console.log("after decode: ", typeof obj, obj);
  }, []);

  return {
    onComplete,
  };
};
