import axios from "axios";
import { useEffect, useState } from "react";
import { Params } from "../interfaces/params";
import { url as urlUtil } from "../utils/url";
import apiKey from "../key.json";
import { useSelector } from "react-redux";

interface props {
  url?: URL;
  params?: Params;
}

export const useFetch = <T>({ url, params }: props) => {
  const selector = useSelector((state) => state);

  const [data, setData] = useState<any>({items:[], panging:{cursors:{after:null}}});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false)
  //leer el archivo key.json

  useEffect(() => {
    if (!apiKey.key) throw new Error("No API key found");
    // console.log(urlUtil(url, selector));
    fetchData();    
  }, [selector]);

  const fetchData = async () => {
    setLoading(true);
    try {
      await axios.post<any>(apiKey.proxy, {
        url: urlUtil(url, selector),
        key: apiKey.key
      }).then((response) => {
        if(data)
        {
          //@ts-ignore
          if(selector.isNew){            
            setData(response.data);
            setHasMore(true);
          }else{

            setData({items:[...data.items, ...response.data.items], paging:response.data.paging});
            if(response.data.paging.cursors.after) {
              setHasMore(true);
              console.log("has more");
            }
            else {
              setHasMore(true)
            };
          }
          
         
        }  
        else {
          setData(response.data);
        }        
        
        
        setLoading(false);
        setError(false);
      });
        

      
      
      
      
    } catch (error) {
      console.log(error);
      
      setError(true);
    }
    setLoading(false);
  };

  return { data, loading, error, fetchData, hasMore };
};
