import axios from "axios";

export const followUser = async (id) => {
  try {
    const response = await axios.post(
      "https://academics.newtonschool.co/api/v1/linkedin/follow/65aea1f52e21e2f97fec0396",
      "",
      {
        headers: {
          projectID: "hv45l4abtvvc",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWVhMWY1MmUyMWUyZjk3ZmVjMDM5NiIsImlhdCI6MTcwNTk0MzU0MSwiZXhwIjoxNzM3NDc5NTQxfQ.czAeNFN7xxc1ocRkvDlHlDJubmZ6mCGYAkgAFA4UM7w",
        },
      }
    );

    if(response.status === 200)
    {
        alert('followed successfull')
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
};
