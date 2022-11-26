// import React from "react";

function StringTrim(text){
  return text.length>100? text.substring(0,100)+'....':text;
};

export {StringTrim}; //default를 빼려면 {}로 묶어야 함..