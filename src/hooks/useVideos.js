import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async term => {
        const response = await youtube.get('/search', {
          params:{
            q: term
          }
        });
        setVideos(response.data.items);
    };
    //we can return also [videos, search] as the React convention
    //would like or as the JS convention like { videos, search }
    return [videos, search];
};

export default useVideos;