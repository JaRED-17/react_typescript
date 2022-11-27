import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import './Home.scss'

interface Goods {
    id: number,
    name: string,
    image: string
}

const Home: React.FC = () => {
    const goods: Array<Goods> = [
        { id: 1, name: "1", image: "./goods.jpg" },
        { id: 2, name: "2", image: "./goods.jpg" },
        { id: 3, name: "3", image: "./goods.jpg" },
        { id: 4, name: "4", image: "./goods.jpg" },
        { id: 5, name: "5", image: "./goods.jpg" },
        { id: 6, name: "6", image: "./goods.jpg" },
        { id: 7, name: "7", image: "./goods.jpg" },
        { id: 8, name: "8", image: "./goods.jpg" },
        { id: 9, name: "9", image: "./goods.jpg" },
        { id: 10, name: "10", image: "./goods.jpg" }
    ];
    const classPrefix: string = 'home-page';

    return (
        <div className={classPrefix}>
            <div className={`${classPrefix}__goods`}>
                {goods.map(item => {
                    return (
                        <Link key={item.id} to={`/store/item/${item.id}`}>
                            <div className={`${classPrefix}__goods-item`}>
                                <div className={`${classPrefix}__goods-item-image`}>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className={`${classPrefix}__goods-item-name`}>{item.name}</div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default withRouter(Home);