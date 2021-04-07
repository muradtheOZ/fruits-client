import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './LoadSpin.css'



export default function LoadSpin() {
  return (
    <div className="custom-container">
    <div className="center-me">
      <CircularProgress color="secondary" />
    </div>
    </div>
  );
}