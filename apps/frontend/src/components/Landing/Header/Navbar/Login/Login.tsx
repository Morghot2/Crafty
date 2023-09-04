import { useState, useMemo } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { getLoginModalConfig } from "./Login.utils";

export const LoginModal = ({
  isLoginModalVisible,
  setLoginModalVisibility,
}) => {
  const [isUserRegistered, setIsUserRegistered] = useState(true);
  const handleClose = () => {
    setLoginModalVisibility(false);
  };
  const { title, description, buttonText } = useMemo(
    () => getLoginModalConfig(isUserRegistered),
    [isUserRegistered]
  );
  console.log(title, description);

  return (
    <>
      <Dialog open={isLoginModalVisible} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {description}
            <Button
              variant="text"
              onClick={() => setIsUserRegistered(!isUserRegistered)}
            >
              {buttonText}
            </Button>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
