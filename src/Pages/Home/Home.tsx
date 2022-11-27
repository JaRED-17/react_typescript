import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import goods from "../../store/goods"
import './Home.scss'

const Home: React.FC = () => {
    const classPrefix = 'home-page';

    return (
        <div className={classPrefix}>
            <div className={`${classPrefix}__goods`}>
                {goods.map(item => (
                    <Link key={item.id} to={`/store/item/${item.id}`}>
                        <div className={`${classPrefix}__goods-item`}>
                            <div className={`${classPrefix}__goods-item-image`}>
                                <img src={item.image} alt="" />
                            </div>
                            <div className={`${classPrefix}__goods-item-name`}>{item.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default withRouter(Home);