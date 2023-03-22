import React from 'react';
import PropTypes from 'prop-types';

const TrackForm = ({
  handleFunc
}) => (
  <form onSubmit={() => handleFunc()}>
    <label for="name">Name</label>
    <input type="text" name="name" id="name"></input>
    <label for="address">Web Address</label>
    <input type="text" name="address" id="address"></input>
  </form>
);

TrackForm.propTypes = {
  handleFunc: PropTypes.func.isRequired,
};

export default TrackForm;
