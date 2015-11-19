import React from 'react';
import ReactDOM from 'react-dom';
import Terminal from '~/src/terminal';
import CommandController from '~/src/models/CommandController';

ReactDOM.render(<Terminal CommandController={CommandController} />, document.getElementById('dogs'));
