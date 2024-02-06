import React, { useState } from "react";
import { ContactInfoConatiner } from "../Styles/ProfileStyle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "40%",
  left: "40%",
  transform: "translate(-50%, -30%)",
  width: '250px',
  height:"200px",
  bgcolor: "white",
  borderRadius: "5px",
  boxShadow: 24,
  p: 3,
};
const ContactInfoModal = ({phone, email}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ContactInfoConatiner type="click" onClick={handleOpen}>
        contact info
      </ContactInfoConatiner>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >Contact Info</Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, height: "400px"}}
          >
            <div style={{display:"flex",gap:"15px", alignItems:"center"}}>
                <IoCall size={23}/>
                <div>
                    <div>Phone</div>
                    <div>{phone} (Mobile)</div>
                </div>
            </div>
            <div style={{display:"flex",gap:"15px", alignItems:"center", marginTop:"25px"}}>
                <MdOutlineMail size={25}/>
                <div>
                    <div>Email</div>
                    <Link to={`mailto:${email}`}>{email}</Link>
                </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ContactInfoModal;
