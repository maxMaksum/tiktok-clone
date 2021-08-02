import React, {useState, useEffect} from 'react';

// import { Counter } from './features/counter/Counter';
import './App.css';
import Video from './Video';
import video from "./video.mp4"
import db from "./firebase";

function App() {

  const [videos, setVideos] = useState(null);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  if (videos) console.log(videos)
  return videos == null? (<p>loading..</p>): (
    <div className="mx-auto h-screen bg-gray-700 flex flex-col flex-1 max-w-md justify-center items-center relative">
  
     <div className = "app__videos">
     {videos.map(
          ({ url, channel, description, song, likes, messages, shares,  }) => (

            <Video
              key={likes}
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
        <Video/>
        <Video/>
        <Video/>

     </div>
    
    </div>
  )

}

export default App;
