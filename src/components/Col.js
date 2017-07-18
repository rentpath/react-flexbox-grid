import React from 'react';
import PropTypes from 'prop-types';
import createProps from '../createProps';
import getClass from '../classNames';
import { ColumnSizeType, ViewportSizeType } from '../types';

const propTypes = {
  xs: ColumnSizeType,
  sm: ColumnSizeType,
  md: ColumnSizeType,
  lg: ColumnSizeType,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  first: ViewportSizeType,
  last: ViewportSizeType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

const classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset'
};

function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function getColClassNames(props, localCss) {
  const extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  if (props.first) {
    extraClasses.push(getClass('first-' + props.first, localCss));
  }

  if (props.last) {
    extraClasses.push(getClass('last-' + props.last, localCss));
  }

  return Object.keys(props)
    .filter(key => classMap[key])
    .map(key => getClass((isInteger(props[key]) ? (classMap[key] + '-' + props[key]) : classMap[key]), localCss))
    .concat(extraClasses);
}

export function getColumnProps(props, localCss) {
  return createProps(propTypes, props, getColClassNames(props, localCss));
}

function Col(props) {
  const { tagName, ...columnProps } = props;
  return React.createElement(tagName || 'div', getColumnProps(columnProps, Col.localCss));
}

Col.localCss = {}
Col.propTypes = propTypes;
export default Col
