import React from "react";

export default function BackgroundVideo() {
    const videoSource = "https://firebasestorage.googleapis.com/v0/b/getaxed-b55f7.appspot.com/o/getaxed.mp4?alt=media&token=aa131492-c8ef-493d-87c0-fd32d3371835"
    return (
        <video 
        className="absolute top-0 w-full bg-center bg-cover"
        autoPlay loop muted id="video">
            <source src={videoSource} type='video/mp4' />
        </video>
    )
}