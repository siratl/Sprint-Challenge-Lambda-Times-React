import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">
        {/* headline goes here */ props.card.headline}
      </div>
      <div className="author">
        <div className="img-container">
          <img
            alt="Displayed Card"
            src={props.card.img /* image source goes here */}
          />
        </div>
        <span>By {/* author goes here */ props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    author: PropTypes.string,
    img: PropTypes.string,
  }),
};

export default Card;
