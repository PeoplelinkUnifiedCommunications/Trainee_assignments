import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, IconButton,  iconButtonClsses } from '@mui/material';
import { Tooltip } from '@material-ui/core';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 8,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Tooltip title="info" placement='right' arrow>
        <IconButton><LogoutIcon onClick={handleOpen}/></IconButton>
     </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are You Sure To Logout
          </Typography>
          <Button variant='contained'>Logout</Button>
        </Box>
      </Modal>
    </div>
  );
}