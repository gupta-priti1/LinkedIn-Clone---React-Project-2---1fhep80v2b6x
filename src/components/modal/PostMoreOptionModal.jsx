import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { MdDeleteForever } from "react-icons/md";
import { ToasterMessage } from "../helper/ToastHelper";
import axios from "axios";
import { likePostContext } from "../context/LikePostContext";
const style = {
  position: "absolute",
  top: "42%",
  left: "55%",
  transform: "translate(60%, -50%)",
  width: "30px",
  height: "15px",
  bgcolor: "white",
  borderRadius: "5px",
  boxShadow: 24,
  p: "5px 5px 20px 5px",
  // display:"flex",
  // alignItems:"center",
  // justifyContent:"center"
};
const PostMoreOptionModal = ({ id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { like, setLike } = likePostContext();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://academics.newtonschool.co/api/v1/linkedin/post/${id}`,
        {
          headers: {
            projectID: "hv45l4abtvvc",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWVhMWY1MmUyMWUyZjk3ZmVjMDM5NiIsImlhdCI6MTcwNTk0MzU0MSwiZXhwIjoxNzM3NDc5NTQxfQ.czAeNFN7xxc1ocRkvDlHlDJubmZ6mCGYAkgAFA4UM7w",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response);
      if (response.status === 204) {
        ToasterMessage("info", "Post deleted");
        setLike(like + 1);
        handleClose();
      }
    } catch (error) {}
  };
  return (
    <>
      <BsThreeDots onClick={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <MdDeleteForever fontSize={"30px"} onClick={handleDelete} />
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default PostMoreOptionModal;
