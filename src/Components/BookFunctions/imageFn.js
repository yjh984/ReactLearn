async function createImg(photo){
  const img = new Image();
  // console.log('new img:',photo);
  // return img;
  img.src = photo;
  return new Promise(((resolve, reject)=>{
    img.onload=()=>resolve(img);
    // if(img.complete) resolve(img);
    img.onerror=(e)=>reject(e);
  }))
}

async function resizeImg(photo, size){
  const canvas=document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx=canvas.getContext('2d');
  // console.log('before createImg')
  const img= await createImg(photo);
  // console.log('img:',img.src);
  // console.log(img);
  const scale=Math.min(canvas.width/img.width, canvas.height/img.height);
  const x = canvas.width/2 - img.width/2*scale;
  const y = canvas.height/2 - img.height/2*scale;
  ctx.drawImage(img,x,y,img.width*scale,img.height*scale);
  return new Promise(resolve=>{
    // console.log("Promise:",img.src)
    canvas.toBlob(blob=>
      resolve(blob)
    , 'image/jpeg');
  });
}

async function getBase64URL(file){
  if(!file || !file.type.startsWith('image/')) {
    console.log('error!');
    throw new Error('no image file...');
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);

  return new Promise(resolve=>{
    reader.onload=(e)=>{
      resolve(e.target.result);
    }
  })
}

export {resizeImg, getBase64URL}