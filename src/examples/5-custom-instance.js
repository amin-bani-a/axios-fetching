import { useEffect } from "react";
import authFetch from "../final/axios/custom";
import axios from "axios";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    const resp1 = await authFetch("/react-store-products");
    const resp2 = await axios(randomUserUrl);
    console.log("custom axios instance");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
