import nxChunk from '@jswork/next-chunk';
import noop from '@jswork/noop';
import ReactList from '@jswork/react-list';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'react-chunk-list';

export default class ReactChunkList extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * List data source.
     */
    items: PropTypes.array,
    /**
     * List item template.
     */
    template: PropTypes.func,
    /**
     * The timer duration.
     */
    interval: PropTypes.number,
    /**
     * The chunk size.
     */
    chunk: PropTypes.number
  };

  static defaultProps = {
    items: [],
    template: noop,
    interval: 100,
    chunk: 5
  };

  constructor(inProps) {
    super(inProps);
    this.state = { runtime: [] };
    this.timer = null;
  }

  componentDidMount() {
    const { items } = this.props;
    this.chunkRender(items);
  }

  shouldComponentUpdate(inProps) {
    const { items } = inProps;
    if (items !== this.props.items) {
      this.chunkRender(items);
    }
    return true;
  }

  chunkRender(inItems) {
    if (!inItems.length) return;
    const { chunk, interval } = this.props;
    const chunks = nxChunk(inItems, chunk);
    this.reset();
    this.timer = setInterval(() => {
      const { runtime } = this.state;
      const _runtime = [].concat(runtime, chunks.shift());
      this.setState({ runtime: _runtime });
      if (!chunks.length) {
        clearInterval(this.timer);
      }
    }, interval);
  }

  reset() {
    this.state.runtime = [];
    clearInterval(this.timer);
  }

  render() {
    const { className, items, ...props } = this.props;
    const { runtime } = this.state;

    return (
      <ReactList
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        items={runtime}
        {...props}
      />
    );
  }
}
