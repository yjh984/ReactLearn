import React from "react";

function Trial({trial}){
  return(
    <>
    {/* {console.log('trial:',trial)} */}
    <li>
      {trial}
    </li>
    </>
  )
}
export default React.memo(Trial);
// export default Trial;