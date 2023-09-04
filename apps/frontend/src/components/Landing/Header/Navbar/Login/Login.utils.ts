export const getLoginModalConfig = (isUserRegistered: boolean) => {
  return isUserRegistered
    ? {
        title: "Log in your account",
        description: "Don’t have an account?",
        buttonText: "Join here",
      }
    : {
        title: "Create a new account",
        description: "Already have an account?",
        buttonText: "Sign in",
      };
};
