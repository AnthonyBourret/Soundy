/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { AddIconChecked, AddIconUnchecked } from '../../svg';

function FavCheckBox() {
  return (
    <label className="swap">
      <input type="checkbox" />
      <div className="swap-on">
        <AddIconChecked width="32px" height="32px" />
      </div>
      <div className="swap-off">
        <AddIconUnchecked width="32px" height="32px" />
      </div>
    </label>
  );
}

export default FavCheckBox;
