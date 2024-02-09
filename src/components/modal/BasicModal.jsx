import React, { useState } from "react";
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import {
  Button,
  FlexContainer,
  Label,
  TextArea,
  UserDetailsContainer,
} from "../Styles/Style";
import UserImage from "../userImage/UserImage";
import { Form, SubmitButton } from "../Styles/LoginStyle";
import { Input } from "@mui/material";
import axios from "axios";
import { ToasterMessage } from "../helper/ToastHelper";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -30%)",
  width: 400,
  bgcolor: "white",
  borderRadius: "5px",
  boxShadow: 24,
  p: 3,
  width: "50%",
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const [postDetails, setPostDetails] = useState({
    title: "",
    description: "",
    images: null,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setPostDetails({ ...postDetails, [e.target.name]: e.target.value });
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/linkedin/post/",
        {
          title: postDetails.title,
          content: postDetails.description,
          images: postDetails.images,
          // Content-Type: "multipart/form-data"
        },
        {
          headers: {
            projectID: "hv45l4abtvvc",
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWVhMWY1MmUyMWUyZjk3ZmVjMDM5NiIsImlhdCI6MTcwNTk0MzU0MSwiZXhwIjoxNzM3NDc5NTQxfQ.czAeNFN7xxc1ocRkvDlHlDJubmZ6mCGYAkgAFA4UM7w",
          },
        }
      );
      if (response.status === 201) {
        ToasterMessage("success", response.data.message);
      }
    } catch (error) {
      console.log("help");
      ToasterMessage("error", "Something went wrong please try again!");
    }

    handleClose();
  };
  console.log(postDetails);
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
            <UserDetailsContainer>
              <UserImage />
              <h4>john</h4>
            </UserDetailsContainer>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, height: "400px" }}
          >
            <Form onSubmit={handleSubmitPost}>
              <span width="100%">
                <Label>Title:</Label>
                <Input
                  type="text"
                  variant="standard"
                  style={{ width: "85%" }}
                  required
                  name="title"
                  onChange={(e) => handleChange(e)}
                />
              </span>
              <TextArea
                placeholder="What do you want to talk about?"
                rows={11}
                name="description"
                onChange={(e) => handleChange(e)}
              />
              <FlexContainer style={{ justifyContent: "space-between" }}>
                <input
                  type="file"
                  id="images"
                  name="images"
                  onChange={(e) => handleChange(e)}
                />
                <SubmitButton
                  style={{ width: "50px", padding: "4px" }}
                  type="submit"
                >
                  post
                </SubmitButton>
              </FlexContainer>
            </Form>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
