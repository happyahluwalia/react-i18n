import React, { Component, PropTypes } from 'react';
import Cookie from 'js-cookie';

const propTypes = {
  locale: PropTypes.string.isRequired,
};

class LocaleButton extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Cookie.set('locale', this.props.locale === 'en' ? 'es' : 'en');
    window.location.reload();
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.locale === 'en' ? 'Spanish' : 'English'}</button>;
  }
}

LocaleButton.propTypes = propTypes;

export default LocaleButton;