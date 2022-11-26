import React, { useState } from "react";
import styled, {css} from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  width: 300px;
  height: 300px;
  border: #ffff 2px dashed;
  margin: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({dragEnter})=>dragEnter && css`
    border-color: blue;
  `}
`;

function DropBox({onFiles}){
  const [dragEnter, setDragEnter] = useState(false);

  const handleFiles=(e)=>{
    console.log(e.target.files);
    onFiles(e.target.files);
    setDragEnter(false);
  }

  const handleDragEnter=(e)=>{
    e.stopPropagation();
    e.preventDefault();
    setDragEnter(true);
  }

  const handleDragLeave=(e)=>{
    e.stopPropagation();
    e.preventDefault();
    setDragEnter(true);
  }

  const handleDragOver=(e)=>{
    e.stopPropagation();
    e.preventDefault();
    setDragEnter(true);
  }

  const handleDrop=(e)=>{
    e.stopPropagation();
    e.preventDefault();
    onFiles(e.dataTransfer.files);
    setDragEnter(false);
  }
  return (
    <div className="bookPhotos">
      <div className="dropbox">
        <StyledLabel
          onDrop={handleDrop} onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          dragEnter={dragEnter}
          onDragEnter={handleDragEnter} 
          htmlFor="images-upload">drop a photo file</StyledLabel>
        <input onChange={handleFiles} multiple type="file" name="images-upload" id='images-upload' className="visually-hidden"/>
      </div>
    </div>
  )
}

export default DropBox;