import React from "react";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
function Alert({
  handleClose,
  handleSubmit,
  isOpen,
  hasTwoButton = false,
  submitButtonText,
  title,
  text
}) {
  return (
    <Dialog
      open={isOpen}
      transition={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>

      <DialogActions>
        {hasTwoButton ? (
          <Button onClick={handleClose} variant="raised" color="primary">
            {"CANCEL"}
          </Button>
        ) : null}
        <Button onClick={handleSubmit} color="primary">
          {submitButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Alert;
