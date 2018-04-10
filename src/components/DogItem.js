import React from "react"

const DogItem = props => {
  return(
    <div>
      <p>{props.dog.name}</p>
      <img src={props.dog["imageUrl"]} style={{"width":"30%"}} />
    </div>
  )
}

export default DogItem;
