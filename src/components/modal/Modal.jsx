import * as React from "react";
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Button } from "./../Styles/Style";
import UserImage from "../userImage/UserImage";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -36%)",
  width: 400,
  bgcolor: "white",
  borderRadius: "5px",
  boxShadow: 24,
  p: 3,
  width: "50%",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button type="click" onClick={handleOpen}>
        Start a post
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <UserImage/>
            <h4>john</h4>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, height: "400px", backgroundColor: "pink" }}
          >
           <form>
            <label>Title:</label>
            <input type="text"/>
            <textarea placeholder="What do you want to talk about?"/>
            <input type="file"/>
           </form>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
