import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({open, titleText, bodyText, handleAccept, handleCancel, acceptText = 'Aceptar', cancelText = 'Cancelar'}) {

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {titleText}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { bodyText }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>{cancelText}</Button>
          <Button onClick={handleAccept} autoFocus>
            {acceptText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}