import React from 'react'

const PageProps = (carDatas)=>{
  console.log(carDatas);
  const {carname, speed, color} = carDatas;

  return(
    <div className=" bg-light text-primary">
      <h6>props on function component down below</h6>
      my cars is > {carname} <br />
      the speed is > {speed} <br />
      the colors is > {color}
    </div>
  )
}

export default PageProps
