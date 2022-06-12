import React from 'react';

// console.log("title at first..")

function Title({title}){
//   console.log('title',title);
  return <h3> {title}</h3>
}
export default React.memo(Title)
// export default (Title)