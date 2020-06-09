import React from 'react'

function Food(props){
    return(
        <div>
           <b>Spicy Food: </b> { props.spicyItem } <br/>
           <b>Desert: </b>{ props.desertItem } <br/><br/>
        </div>
    )
}

export default Food