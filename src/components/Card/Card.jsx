import React, { useContext, useState } from 'react';
import ContentLoader from 'react-content-loader';

import { priceFormat } from '../../utils/priceFormat';
import { AppContext } from '../../App';

import styles from './Card.module.scss';

const Card = ({
    id,
    name,
    price,
    imgUrl,
    onFavorite,
    onPlus,
    favorite = false,
    loading,
}) => {
    const { isItemAdded } = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorite);

    const formattedPrice = price && priceFormat(price);

    const onClickPlus = () => {
        onPlus({ id, name, imgUrl, price });
    };

    const onClickFavorite = () => {
        onFavorite({ id, name, imgUrl, price });
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={`${styles.card} mr-35`}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={150}
                    height={226}
                    viewBox="0 0 150 226"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect
                        x="0"
                        y="0"
                        rx="10"
                        ry="10"
                        width="150"
                        height="130"
                    />
                    <rect x="0" y="146" rx="3" ry="3" width="150" height="15" />
                    <rect x="0" y="165" rx="3" ry="3" width="93" height="15" />
                    <rect x="0" y="202" rx="8" ry="8" width="80" height="24" />
                    <rect
                        x="118"
                        y="194"
                        rx="8"
                        ry="8"
                        width="32"
                        height="32"
                    />
                </ContentLoader>
            ) : (
                <>
                    <div className={styles.favorite}>
                        <img
                            src={
                                isFavorite
                                    ? 'img/heart-liked.svg'
                                    : 'img/heart-unliked.svg'
                            }
                            alt="unliked"
                            onClick={onClickFavorite}
                            className="cu-p"
                        />
                    </div>
                    <img
                        width={'100%'}
                        height={135}
                        src={imgUrl.toString()}
                        alt="sneakers"
                        className="mb-15"
                    />
                    <h5 className="mb-10">{name}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена: </span>
                            <b>{formattedPrice} руб.</b>
                        </div>
                        <img
                            src={
                                isItemAdded(id)
                                    ? 'img/btn-checked.svg'
                                    : 'img/btn-plus.svg'
                            }
                            alt="plus"
                            onClick={onClickPlus}
                            className="cu-p"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;
