import React from "react";

import "./Card.css";

interface CardProps {
  // courseName: string;
  courseType: string;
  // clickHandler: () => void;
  showProLabel: boolean;
  // tag: string;
};

export const Card: React.FC<CardProps> = (props) => {
  const { courseType, showProLabel } = props;

  return (
    <div className="container">
      <div className="header">
        {showProLabel && <span>Pro</span>}
        <p>{courseType}</p>
      </div>
      {/* <h3>{courseName}</h3>
      <div className="tag">{tag}</div> */}
    </div>
  );
};
