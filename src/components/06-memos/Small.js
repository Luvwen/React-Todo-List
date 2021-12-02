import React, { memo } from 'react';

const Small = ({ value }) => {
  console.log('Me volvi a llamar unu');

  return <small>{value}</small>;
};

export default memo(Small);
