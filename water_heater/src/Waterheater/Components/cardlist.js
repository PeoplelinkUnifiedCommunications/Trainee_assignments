import React from "react";
import CardItem from "./cardItem";
const cardslist = (props) => {
    const { cards } = props;
    console.log(props);
    return (
        <>
         <p className="ptag"><b>your hybrid electric water recomended options</b></p>
         
            <div className="resColRow">
                {cards.map((cards, id) =>
                    <CardItem cardData={cards} />
                )

                }
            </div>

        </>
    )
}
export default cardslist;