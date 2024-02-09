import axios from "axios";
import { ToasterMessage } from "./ToastHelper";

export const unfollowUser = async (id) => {
  try {
    const response = await axios.delete(
      `https://academics.newtonschool.co/api/v1/linkedin/follow/${id}`,
      {
        headers: {
          projectID: "hv45l4abtvvc",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWVhMWY1MmUyMWUyZjk3ZmVjMDM5NiIsImlhdCI6MTcwNTk0MzU0MSwiZXhwIjoxNzM3NDc5NTQxfQ.czAeNFN7xxc1ocRkvDlHlDJubmZ6mCGYAkgAFA4UM7w",
        },
      }
    );
    console.log(response);
    if(response.status === 201){
        ToasterMessage('info','unfollowed user successfully')
    }
  } catch (error) {
    console.log(error);
  }
};
