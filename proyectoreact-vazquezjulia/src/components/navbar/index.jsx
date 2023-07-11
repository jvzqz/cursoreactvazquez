import React from 'react';
import cartwidget from '../cartwidget/index';

const navbar = () => {
  return (
    <div>
     <nav>
        <ul>
           <li><a href="/">Inicio</a></li>
           <li><a href="/about">Acerca de</a></li>
           <li><a href="/contact">Contacto</a></li>
         </ul>
      </nav>
      <cartwidget/>
    </div>
  );
}

export default navbar