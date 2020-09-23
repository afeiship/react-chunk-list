import NxOfflineSw from '@feizheng/next-offline-sw';
import ReactGithubCorner from '@feizheng/react-github-corner';
import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactChunkList from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = { hasUpdate: false, items: [] };

  componentDidMount() {
    NxOfflineSw.install({
      onUpdateReady: () => {
        this.setState({ hasUpdate: true });
      }
    });
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
      <div className="p-3 app-container">
        {/* Core components usage start */}
        <ReactChunkList
          items={this.state.items}
          interval={10}
          chunk={1000}
          template={({ item }) => {
            return <div key={item.id}>{item.value}</div>;
          }}
          className="bg-gray-800 mb-5 p-4 text-white"
        />
        <button className="button">I am a button</button>
        {/* Core components usage end */}
        <ReactSwUpdateTips value={this.state.hasUpdate} />
        <ReactGithubCorner value="https://github.com/afeiship/react-chunk-list" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
