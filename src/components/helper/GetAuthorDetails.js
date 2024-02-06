import axios from "axios";

export const fetchAuthorDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/linkedin/user/${id}`,
      {
        headers: {
          projectID: "hv45l4abtvvc",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWVhMWY1MmUyMWUyZjk3ZmVjMDM5NiIsImlhdCI6MTcwNTk0MzU0MSwiZXhwIjoxNzM3NDc5NTQxfQ.czAeNFN7xxc1ocRkvDlHlDJubmZ6mCGYAkgAFA4UM7w",
        },
      }
    );
    console.log(response);
    if (response.status === 200) {
      return {
        userDetails: response.data.data,
        isFollowed: response.data.data.isFollowed,
      };
    }
  } catch (error) {
    console.log(error);
  }
};
