import React, { Component } from 'react';
import { FormattedMessage, intlShape, injectIntl, defineMessages } from 'react-intl';

const propTypes = {
  intl: intlShape.isRequired
};
const messages = defineMessages({
  helloWorld2: {
    id: 'app.hello_world2',
    defaultMessage: 'Hello world 2!'
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <h1><FormattedMessage id='app.hello_world'
              defaultMessage='Hello cute world!'
              description="Hello world header greeting" />
        </h1>
        <h1>
            {this.props.intl.formatMessage(messages.heloWorld2)}
        </h1>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default injectIntl(App);