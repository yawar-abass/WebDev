import React from "react";

export default function Note(props){
    return(
        <div className="note">
                <h2>Title: {props.title}</h2>
                 <p>Desc:{props.desc} </p>
            </div>
    )
}