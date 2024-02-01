import * as React from "react";
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
            <UserDetailsContainer>
              <UserImage />
              <h4>john</h4>
            </UserDetailsContainer>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, height: "400px" }}
          >
            <Form>
              <span width="100%">
                <Label>Title:</Label>
                <Input
                  type="text"
                  variant="standard"
                  style={{ width: "85%" }}
                  required
                />
              </span>
              <TextArea
                placeholder="What do you want to talk about?"
                rows={11}
              />
              <FlexContainer style={{justifyContent:"space-between"}}>
                <input type="file" id="images" />
                <SubmitButton style={{ width: "50px", padding:"4px" }} type="submit">post</SubmitButton>
              </FlexContainer>
            </Form>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
