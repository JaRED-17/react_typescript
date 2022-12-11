import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom'
import core from "../../core/core"
import { observer } from "mobx-react"
import './Home.scss'

const Home: React.FC = observer(() => {
    const classPrefix = 'home-page';

    useEffect(() => {
        core.goods.API();
    }, []);

    const response = () => {
        return core.goods.status.response() || [];
    }

    const loading = () => {
        return core.goods.status.loading();
    }

    return (
        <div className={classPrefix}>
            <div className={`${classPrefix}__goods`}>
                {loading() ? "loading" : response().map((item: any) => (
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
});

export default withRouter(Home);