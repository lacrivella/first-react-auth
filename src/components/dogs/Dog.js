import React from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from '../../Auth0Provider';

function Dog({ dog }) {
  const { isAuthenticated, loading, user } = useAuth0();
  return (
    <>
      <h2>{dog.name}</h2>
      <p>owner: {isAuthenticated && !loading ? user.nickname : 'unknown'}</p>
      <p>breed: {dog.breed}</p>
    </>
  );
}

Dog.propTypes = {
  dog: PropTypes.shape({
    name: PropTypes.string.isRequired,
    breed: PropTypes.string
  }).isRequired
};

export default Dog;
