'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowProps = getRowProps;

var _classNames = require('../classNames');

var _classNames2 = _interopRequireDefault(_classNames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = require('../createProps');

var _createProps2 = _interopRequireDefault(_createProps);

var _types = require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

var propTypes = {
  reverse: _propTypes2.default.bool,
  start: _types.ViewportSizeType,
  center: _types.ViewportSizeType,
  end: _types.ViewportSizeType,
  top: _types.ViewportSizeType,
  middle: _types.ViewportSizeType,
  bottom: _types.ViewportSizeType,
  around: _types.ViewportSizeType,
  between: _types.ViewportSizeType,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};

function getRowClassNames(props, localCss) {
  var modificators = [props.className, (0, _classNames2.default)('row', localCss)];

  for (var i = 0; i < rowKeys.length; ++i) {
    var key = rowKeys[i];
    var value = props[key];
    if (value) {
      modificators.push((0, _classNames2.default)(key + '-' + value, localCss));
    }
  }

  if (props.reverse) {
    modificators.push((0, _classNames2.default)('reverse', localCss));
  }

  return modificators;
}

function getRowProps(props, localCss) {
  return (0, _createProps2.default)(propTypes, props, getRowClassNames(props, localCss));
}

function Row(props) {
  return _react2.default.createElement(props.tagName || 'div', getRowProps(props, Row.localCss));
}

Row.localCss = {};
Row.propTypes = propTypes;

exports.default = Row;