import React, {Component, PropTypes} from 'react';

export default class Col extends Component {

  constructor(props) {
    super(props);

    this._classMap = {
      xs: 'col-xs-',
      sm: 'col-sm-',
      md: 'col-md-',
      lg: 'col-lg-',
      xsOffset: 'col-xs-offset-',
      smOffset: 'col-sm-offset-',
      mdOffset: 'col-md-offset-',
      lgOffset: 'col-lg-offset-'
    };
  }

  render() {
    let classes = [];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    if (this.props.reverse) {
      classes.push('reverse');
    }

    for (let key in this.props) {
      if (this.props.hasOwnProperty(key) && this._classMap[key]) {
        classes.push(this._classMap[key] + this.props[key]);
      }
    }

    return React.createElement('div', Object.assign({}, this.props, {
      className: classes.join(' ')
    }), this.props.children);
  }
}

Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  reverse: PropTypes.bool
};
