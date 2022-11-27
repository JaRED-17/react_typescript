import React from 'react';

const Item: React.FC<any> = ({ id }) => {
    return (
        <div className='item-page'>
            {`Item page ${id}`}
        </div>
    );
};

export default Item;