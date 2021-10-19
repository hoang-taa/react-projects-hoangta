import React, { useEffect } from 'react';

const Alert = ({ type, msg, showRemoveAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showRemoveAlert();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
