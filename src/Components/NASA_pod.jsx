import React, { useEffect, useState} from 'react';
import axios from 'axios';

const NASA_api_url = "https://api.nasa.gov/planetary/apod?api_key=3s60vZlgb3cbrCMXWXhCsIqvsAyZgh7wlxgU2iCp"

const NASA_pod = () => {
    const [photoData, setPhotoData] = useState(null);
  
    useEffect(() => {
      fetchPhotoOfTheDay();
    }, []);

    const fetchPhotoOfTheDay = async () => {
        try {
          const response = await axios.get(NASA_api_url);
          setPhotoData(response.data);
        } catch (error) {
          console.log(error);
        }
    };

    if (photoData && photoData.media_type == "image"){
        return (
            <div>
              {/* Render the photo data */}
              {photoData && (
                <>
                  <center><img src={photoData.url} alt={photoData.title} style={{width: "60%", height: "60%"}}/></center>
                  <h2 id="pod_title">{photoData.title}</h2>
                  <p id="pod_description">{photoData.explanation}</p>
                </>
              )}
            </div>
          );
    } else {
        //handle edge case where NASA's photo of the day is actually a video
        return (
            <div>
            {/* Render the photo data */}
            {photoData && (
                <>
                    <center><iframe src={photoData.url} alt={photoData.title} style={{width: "60%"}}/></center>
                    <h2 id="pod_title">{photoData.title}</h2>
                    <p id="pod_description">{photoData.explanation}</p>
                </>
            )}
            </div>
        );
    }
  };
  
  export default NASA_pod;