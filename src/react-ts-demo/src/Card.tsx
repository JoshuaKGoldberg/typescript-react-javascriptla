import { ProLabel } from '@codecademy/gamut'
import React from 'react';

import './Card.css'

type CardProps = {
    courseName: string;
    courseType: string;
    clickHandler: () => void;
    showProLabel: boolean;
    tag: string;
}

export const Card: React.FC<CardProps> = (props) => {
    const { courseName, courseType, clickHandler, showProLabel, tag } = props;

    return (
        <div className="container" onClick={clickHandler}>
            <div className="header">
                {showProLabel && <ProLabel mode="light" />}
                <p>{courseType}</p>
            </div>
            <h3>{courseName}</h3>
            <div className="tag">{tag}</div>
        </div>
    );

};