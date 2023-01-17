import React from 'react';

const TrackForm = () => (
  <form>
    <label for="name">Name</label>
    <input type="text" name="name" id="name"></input>
    <label for="address">Web Address</label>
    <input type="text" name="address" id="address"></input>
  </form>
);

export default TrackForm;
