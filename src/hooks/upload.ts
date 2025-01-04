import axios from "axios";
import Cookies from "js-cookie";
export const UploadFile = async (data: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}files/upload`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${Cookies.get("tokenAcadamySite")}`
      },
     
    },
    
  );
  return response;
};