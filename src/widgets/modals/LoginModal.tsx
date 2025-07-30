import { BottomSheet } from "@wallpay/components";
import { useChatBotStore } from "@wallpay/domains/chatBot/useChatBotStore";

import { Login } from "@wallpay/domains/signup/Signup";
import { useProfileStore } from "@wallpay/domains/profile/useProfileStore";
import { isLoggedIn, useAppStore } from "@wallpay/hooks";
import { forwardRef, useImperativeHandle, useState } from "react";

type LoginModalProps = {};

export const LoginModal = forwardRef((_: LoginModalProps, ref) => {
  const { logout } = useAppStore();
  const { resetProfile } = useProfileStore();
  const { resetMessages } = useChatBotStore();

  const [shouldShowLogin, setShouldShowLogin] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      async checkLogin() {
        if (!isLoggedIn()) {
          return await handleOpenLogin();
        }

        return Promise.resolve(true);
      },
    };
  }, []);

  const handleOpenLogin = async () => {
    logout();
    resetProfile();
    resetMessages();
    setShouldShowLogin(true);

    return new Promise<boolean>((resolve) => {
      const unsubscribe = useAppStore.subscribe((state, prevState) => {
        if (state.auth?.accessToken && !prevState.auth?.accessToken) {
          unsubscribe();
          handleCloseLogin();
          resolve(true);
        }
      });
    });
  };

  const handleCloseLogin = () => {
    setShouldShowLogin(false);
  };

  if (isLoggedIn()) {
    return <></>;
  }

  return (
    <BottomSheet open={shouldShowLogin} onClose={handleCloseLogin}>
      <Login shouldNavigateAfterLogin={false} />
    </BottomSheet>
  );
});
