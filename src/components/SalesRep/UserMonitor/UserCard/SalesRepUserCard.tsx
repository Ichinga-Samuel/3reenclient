/* eslint-disable prettier/prettier */
import React from 'react';
import { UserCardContain } from './SalesRepUserCard.styled';

export const SalesRepUserCard = ({ title, figure, image }) => {
    return (
        <UserCardContain>
            <div className="card">
                <div className="card-body my-2">
                    <div className="card__details">
                        <div className="card__text">
                            <h4 className="title">{title}</h4>

                            <h3 className="figure">{figure}</h3>
                        </div>

                        <div className="card__icon">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </UserCardContain>
    );
};

export default SalesRepUserCard;
