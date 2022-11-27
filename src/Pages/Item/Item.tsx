import React from 'react';
import Goods from "../../types/interfaces"
import goods from "../../store/store"

const Item: React.FC<any> = ({ id }) => {
    const getItemById = (id: string) => {
        let item: Goods = { id: 0, image: "", name: "" };

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
        </div>
    );
};

export default Item;