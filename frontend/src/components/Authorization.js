// frontend/src/components/Authorization.js

import React from 'react';
import { useSelector } from 'react-redux';

const Authorization = ({ requiredRoles, children }) => {
  const user = useSelector((state) => state.user);
  
  const hasRequiredRoles = requiredRoles.some((role) => user.roles.includes(role));
  
  return hasRequiredRoles ? children : null;
};

export default Authorization;