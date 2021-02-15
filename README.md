# react-chunk-list
> List with time chunk for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-chunk-list
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-chunk-list/dist/style.css";

  // or use sass
  @import "~@jswork/react-chunk-list/dist/style.scss";

  // customize your styles:
  $react-chunk-list-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactChunkList from '@jswork/react-chunk-list';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-chunk-list">
          <ReactChunkList className="mb-5 has-text-white" />
          <button className="button is-primary is-fullwidth">Start~</button>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-chunk-list/


## license
Code released under [the MIT license](https://github.com/afeiship/react-chunk-list/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-chunk-list
[version-url]: https://npmjs.org/package/@jswork/react-chunk-list

[license-image]: https://img.shields.io/npm/l/@jswork/react-chunk-list
[license-url]: https://github.com/afeiship/react-chunk-list/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-chunk-list
[size-url]: https://github.com/afeiship/react-chunk-list/blob/master/dist/react-chunk-list.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-chunk-list
[download-url]: https://www.npmjs.com/package/@jswork/react-chunk-list
