import React from 'react';
import notification from 'helpers/notification';
import { store } from 'rc-notifications';
import { getType, getMessage, getTitle } from 'helpers/randomize';

export default class ContainerExample extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  add(container) {
    const type = getType();

    return store.addNotification(
      Object.assign({}, notification, {
        title: getTitle(type),
        message: getMessage(type),
        container,
        type
      })
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 offset-lg-3 column col-md-10 offset-md-1 col-sm-12">
          <h6>Container</h6>
          <div>
            <code className="white-code">Container</code> can be set from predefined values{' '}
            <code className="white-code">top-left</code>,{' '}
            <code className="white-code">top-right</code>,{' '}
            <code className="white-code">top-center</code>,{' '}
            <code className="white-code">bottom-left</code>,{' '}
            <code className="white-code">bottom-right</code>,{' '}
            <code className="white-code">bottom-center</code>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => this.add('top-left')}
            >
              Top Left
            </button>{' '}
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => this.add('top-right')}
            >
              Top Right
            </button>{' '}
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => this.add('top-center')}
            >
              Top Center
            </button>{' '}
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => this.add('center')}
            >
              Center
            </button>{' '}
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => this.add('bottom-left')}
            >
              Bottom Left
            </button>{' '}
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => this.add('bottom-right')}
            >
              Bottom Right
            </button>{' '}
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => this.add('bottom-center')}
            >
              Bottom Center
            </button>{' '}
          </div>
        </div>
      </div>
    );
  }
}
