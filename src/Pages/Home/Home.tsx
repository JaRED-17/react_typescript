import React from 'react';
import './Home.scss'

interface Goods {
    name: string
    image: string
}

const Home: React.FC = () => {
    const goods: Array<Goods> = [
        { name: "1", image: "./goods.jpg" },
        { name: "2", image: "./goods.jpg" },
        { name: "3", image: "./goods.jpg" },
        { name: "4", image: "./goods.jpg" },
        { name: "5", image: "./goods.jpg" },
        { name: "6", image: "./goods.jpg" },
        { name: "7", image: "./goods.jpg" },
        { name: "8", image: "./goods.jpg" },
        { name: "9", image: "./goods.jpg" },
        { name: "10", image: "./goods.jpg" }
    ];
    const classPrefix: string = 'home-page';

    return (
        <div className={classPrefix}>
            <div className={`${classPrefix}__goods`}>
                {goods.map(item => {
                    return (
                        <div key={item.name} className={`${classPrefix}__goods-item`}>
                            <div className={`${classPrefix}__goods-item-image`}>
                                <img src={item.image} alt="" />
                            </div>
                            <div className={`${classPrefix}__goods-item-name`}>{item.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Home;