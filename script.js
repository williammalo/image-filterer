var imageFilter=function(img,filterFunction){
  var canvas=document.createElement("canvas");
  canvas.width=img.width
  canvas.height=img.height
  var ctx=canvas.getContext("2d");
  ctx.drawImage(img,0,0)
  var imgdata=ctx.getImageData(0, 0, img.width, img.height).data;
  var newimgdata=ctx.createImageData(img.width,img.height);
  var i,foo;
  for(i=0;i<newimgdata.data.length;i+=4){
    foo=filterFunction(imgdata[i],imgdata[i+1],imgdata[i+2],imgdata[i+3]);
    newimgdata.data[i]=foo.r
    newimgdata.data[i+1]=foo.g
    newimgdata.data[i+2]=foo.b
    newimgdata.data[i+3]=foo.a
  }
  ctx.clearRect(0,0,img.width,img.height)
  ctx.putImageData(newimgdata, 0, 0);

  img.src=canvas.toDataURL();
};