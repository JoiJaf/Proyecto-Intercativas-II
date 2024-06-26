import { useEffect, useState } from "react";

export const useFetchUsers = () => {
    
  const [data, setData] = useState([]);

  const getData = async () => {
    try{
      const response = await fetch("http://taskflowbackend.test/api/userSpecific/all");
      const data = await response.json();
      setData(data);
      console.log(data)
    }catch(error){
      console.log(error)
    }
 
  }

  useEffect(() => {
    getData() 
  }, []) 

  return {
    data
  }

}