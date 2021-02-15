import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactChunkList from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = { hasUpdate: false, items: [] };
  componentDidMount() {
    this.genList();
  }

  genList() {
    const items = [];
    for (let index = 0; index < 4000; index++) {
      items.push({
        id: index,
        value: `value - ${index}`
      });
    }
    console.time('render');
    this.setState({ items });
  }

  componentDidUpdate() {
    console.timeEnd('render');
  }

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-chunk-list">
        <ReactChunkList
          items={this.state.items}
          interval={10}
          chunk={1000}
          template={({ item }) => {
            return <div key={item.id}>{item.value}</div>;
          }}
          className="bg-gray-800 mb-5 p-4 text-white"
        />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
