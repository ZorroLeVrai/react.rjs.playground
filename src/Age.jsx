import React from 'react'
import PropTypes from 'prop-types';
import withToolTip from './hoc/withToolTip';
import Tooltip from './Tooltip';

const Age = ({age}) => {
  return (
    <div data-testid="age_label" className="padding-medium border-light">Votre age: {age}</div>
  );
}

Age.propTypes = {
  age: PropTypes.number
};

Age.defaultProps = {
  age: 18
}

//export default Age;
export default withToolTip(Age, () => <Tooltip text="Affiche votre age"/>);