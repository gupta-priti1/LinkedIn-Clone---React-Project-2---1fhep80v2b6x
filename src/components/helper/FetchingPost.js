import axios from "axios"

export const fetchingPost = async ()=>{
    try{
        const response = await axios.get(
            `https://academics.newtonschool.co/api/v1/linkedin/post?limit=10&page=1`,
            {
              headers: {
                projectID: "hv45l4abtvvc",
              },
            }
          )
          console.log(response);

          if(response.status === 200)
          {
            return response.data.data;
          }
    }
    catch(error){
        console.log(error);
    }
}