import React from 'react';
import PropTypes from 'prop-types';
import createProps from '../createProps';
import getClass from '../classNames';

const propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

function Grid(props) {
  const containerClass = getClass(props.fluid ? 'container-fluid' : 'container', Grid.localCss);
  const classNames = [props.className, containerClass];
  return React.createElement(props.tagName || 'div', createProps(propTypes, props, classNames));
}

Grid.localCss = {}
Grid.propTypes = propTypes;
export default Grid
