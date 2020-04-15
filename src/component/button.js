import React from "react";

const Button = props => {

    if(props.selectedCategory === props.movieCategory.urlText){
      return (
        <div>
        <div
          className="color button" 
          onClick={() => props.changeURL(props.movieCategory.urlText)}
        >
          <div>{props.movieCategory.buttonText}</div>
        </div>
          <style jsx>
            {`.color{
              background-color: silver;
            }`}
          </style>
       
      </div>
      )
    }else return (
      <div>
      <div
        className="button"
        onClick={() => props.changeURL(props.movieCategory.urlText)}
      >
        <div>{props.movieCategory.buttonText}</div>
      </div>
     
    </div>
    )
  

};

export default Button;
