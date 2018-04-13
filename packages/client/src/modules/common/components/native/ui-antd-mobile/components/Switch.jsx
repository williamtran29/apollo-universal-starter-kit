import React from 'react';
import { Switch as SwitchComponent } from 'antd-mobile';
import PropTypes from 'prop-types';

const Switch = ({ checked, value, onValueChange, onChange, ...props }) => {
  return <SwitchComponent checked={value || checked} onChange={onValueChange || onChange} {...props} />;
};

Switch.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.bool,
  onValueChange: PropTypes.func,
  onChange: PropTypes.func
};

export default Switch;
