import React from 'react';
import Goods from "../../types/interfaces"
import goods from "../../store/goods"
import currency from "../../store/currency"

const Item: React.FC<any> = ({ id }) => {
    const getItemById = (id: string) => {
        let item: Goods = { id: 0, image: "", name: "", cost: 0 };

        goods.forEach(i => {
            if (i.id.toString() == id) {
                item = i;
            }
        });

        return item;
    }
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