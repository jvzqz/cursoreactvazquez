import React from 'react';
import cartwidget from '../cartwidget/index';
import itemlistconteiner from '../itemlistcontainer';

const navbar = () => {
  return (
    <div>
      <itemlistconteiner></itemlistconteiner>
      <cartwidget></cartwidget>
    </div>
  );
}

export default navbar