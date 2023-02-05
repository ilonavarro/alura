import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AbBotao, Card } from '../dist';

const App = () => {
  return (
    <div>
      <AbBotao />
      <Card>Card</Card>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
