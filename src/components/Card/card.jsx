import React from 'react';

import cardStyles from "./card.module.scss"

const Card = () => {
    return (
        <div className={cardStyles.card}>
            <h1>Title Card</h1>
            <h1 className={cardStyles.h1}>Title 2 Card</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, minus voluptas animi doloribus labore cumque nisi, culpa adipisci recusandae doloremque et similique dignissimos officiis sint, ea excepturi placeat blanditiis repellat?
           </p>
            <button>Button Card</button>
        </div>
    );
};

export default Card;