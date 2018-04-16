import React from 'react';
import ReactDOM from 'react-dom';

//create a new component.
const App = () => {
  return <div>Hi!</div>;
}

//take this component and generate html

ReactDOM.render(<App />, document.querySelector('.container'));
