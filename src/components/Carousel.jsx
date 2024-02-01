import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";



function Carousel() {
  const [count, setCount] = useState(0);
  const data = { images}; // Replace with your actual array of image URLs
  const image = data.images[count].img;
  const text1=data.images[count].subtitle;
  const text2=data.images[count].title;
  console.log(data)
  console.log(image);
  console.log(text1,text2)

  const Forward=()=>{
    if(count==2){
        setCount(0);
    }else{
    setCount((val)=>{
        return val+1
    })
}
  }
  const Backward=()=>{
    if(count==0){
        setCount(2);
    }else{
    setCount((val)=>{
        return val-1
    })
}
  }
  return (
    <div className="flex">
      <ArrowBackIosIcon className="arrow" onClick={Backward}/>
      <div className="flex2">
      <h2 className="h22">{text2}</h2>
      {image && <img src={image} alt="" />}
      <h2 className="h21">{text1}</h2>
      </div>
      
      <ArrowForwardIosIcon className="arrow" onClick={Forward} />
    </div>
  );
}

export default Carousel;
