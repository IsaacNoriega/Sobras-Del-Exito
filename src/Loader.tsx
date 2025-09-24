import React, { useEffect, useState } from 'react';
import logo from '../public/logo.png';
import './styles/loader.css';

export default function Loader() {
  return (
    <div className="app-loader">
      <img src={logo} alt="Logo" className="app-loader-logo" />
    </div>
  );
}
