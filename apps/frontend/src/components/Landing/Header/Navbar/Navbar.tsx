import { useState } from "react";
import { LoginButton } from "./Navbar.styles";
import { LoginModal } from "./Login/Login";

export const Navbar = () => {
  const [isLoginModalVisible, setLoginModalVisibility] = useState(false);
  return (
    <>
      <LoginButton onClick={() => setLoginModalVisibility(true)}>
        Login
      </LoginButton>
      <LoginModal
        isLoginModalVisible={isLoginModalVisible}
        setLoginModalVisibility={setLoginModalVisibility}
      />
    </>
  );
};
