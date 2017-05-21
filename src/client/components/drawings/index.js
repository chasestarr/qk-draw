import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { debounce } from 'lodash';

import * as actions from '../../state/actions';
import * as selectors from '../../state/selectors';
import Drawing from './drawing';
import styles from './styles.css';

class Drawings extends React.Component {
  componentDidMount() {
    if (!this.props.drawings.length) {
      // this.props.requestDrawing('alarm_clock');
      [...Array(5)].forEach(() => this.props.requestDrawing('alarm_clock'));
    }
    window.addEventListener('scroll', () => this.handleScroll());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
  }

  loadMore() {
    this.props.requestDrawing('alarm_clock');
  }

  handleScroll() {
    const windowHeight = 'innerHeight' in window
      ? window.innerHeight
      : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    const buffer = 100;

    if (windowBottom >= docHeight - buffer) {
      debounce(() => this.props.requestDrawing('alarm_clock'), 500);
    }
  }

  render() {
    if (!this.props.drawings.length) {
      return null;
    }

    return (
      <div className={styles.column}>
        {this.props.drawings.map(drawing => <Drawing key={drawing.id} src={drawing} />)}
      </div>
    );
  }
}

export default connect(
  createStructuredSelector({
    drawings: selectors.selectDrawings()
  }),
  { requestDrawing: actions.drawing.request }
)(Drawings);
