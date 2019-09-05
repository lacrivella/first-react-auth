import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

function Dogs({ dogs }) {
  const dogList = dogs.map(dog => (
    <li key={dog.name}>
      <Dog dog={dog} />
    </li>
  ));

  return (
    <ul>
      {dogList}
    </ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    breed: PropTypes.string
  })).isRequired
};

export default Dogs;
