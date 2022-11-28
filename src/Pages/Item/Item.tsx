import React from 'react';
import Goods from "../../types/interfaces"
import goods from "../../store/goods"
import currency from "../../store/currency"

const Item: React.FC<any> = ({ id }) => {
    const getItemById = (id: string): Goods => goods.filter(i => i.id.toString() === id)[0]
    const item: Goods = getItemById(id);

    return (
        <div className='item-page'>
            <h3>{item.id}</h3>
            <img src={item.image} alt="" />
            <p>{`Стоимость: ${item.cost} ${currency}`}</p>
        </div>
    );
};

export default Item;