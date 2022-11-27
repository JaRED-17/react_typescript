import React from 'react';

interface Goods {
    name: string
}

const Home: React.FC = () => {
    const goods: Array<Goods> = [{ name: "1" }, { name: "2" }];
    const classPrefix = 'home-page'

    return (
        <div className={classPrefix}>
            <div className={`${classPrefix}__goods`}>
                {goods.map(item => <div className={`${classPrefix}__goods-item`}>{item.name}</div>)}
            </div>
        </div>
    );
};

export default Home;