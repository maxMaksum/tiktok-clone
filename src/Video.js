import React, {useRef, useState} from 'react'
import "./Video.css";
import video from "./video.mp4"
import VideoFooter from './VideoFooter';
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {

    const [play, setPlay] =useState(false)
    const videoRef = useRef(null)
    console.log("video"+likes )
    const onVideoPress=()=>{
        if(play){
            videoRef.current.pause()
            setPlay(false)
        }else{
            videoRef.current.play()
            setPlay(true)
        }
       
    }

    return (

        <div className ="video">
        <div className="video__player">
           <video
            ref={videoRef}
           loop
     
           onClick ={onVideoPress}
            src={url}
           >
               {/* <source src={url} type="video/mp4"/> */}
           </video>

           <VideoFooter
           channel={channel} description={description}
            song ={song}
           
           />
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
            </div>
        </div>
    )
}

export default Video
