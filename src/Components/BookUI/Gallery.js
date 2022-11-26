import React from "react";
import Image from "./Image";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  >div{
    margin: 4px;
  }
`

function Gallery ({imgs, id}){
  // console.log("imgs",imgs[0].slice(-4));
  return(
    <StyledDiv>
      {/* <div> */}
      {imgs.map(img=><Image key={img.slice(-5)} img={img} id={id} alt="" />)}
      {/* </div> */}
    </StyledDiv>
  )
}

export default Gallery;