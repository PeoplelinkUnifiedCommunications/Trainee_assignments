import * as React from 'react';
import Box from '@mui/material/Box';
import { IoLogOutOutline } from "react-icons/io5"
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button} from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IoLogOutOutline onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are You sure to Logout
          </Typography>
          <Button>Logout</Button>
        </Box>
      </Modal>
    </div>
  );
}