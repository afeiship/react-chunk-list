import nxChunk from '@feizheng/next-chunk';
import noop from '@feizheng/noop';
import ReactList from '@feizheng/react-list';
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
     * If node name is React.Framgment.
     */
    virtual: PropTypes.bool,
    /**
     * Use customize node name(tagName or ReactElement).
     */
    nodeName: PropTypes.any,
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
    nodeName: 'div',
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

    clearInterval(this.timer);
    const chunks = nxChunk(inItems, chunk);
    this.timer = setInterval(() => {
      const { runtime } = this.state;
      const _runtime = [].concat(runtime, chunks.shift());
      this.setState({ runtime: _runtime });
      if (!chunks.length) {
        clearInterval(this.timer);
      }
    }, interval);
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
