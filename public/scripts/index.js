// Utils
import { createStateEvent } from './utils/index.js';

// Api
import * as api from './api/index.js';

// Components
import * as App from './pages/App.js';
import * as NotFound from './pages/NotFound.js';
import * as Tool from './pages/Tool.js';

// setTimeout(() => {
// 	const root = document.getElementById('list-example');
// 	root.dispatchEvent(createStateEvent({ data: ['John', 'Marry'] }));
// }, 3000);

import stateManager from './utils/StateManager.js';
// console.log(stateManager.getState());

// Router
const routes = {
	'/': App,
	'/not-found': NotFound,
	'/tool': Tool,
};

let pathname = location.pathname;
let html = '';

if (!routes[pathname]) {
	window.location.pathname = '/not-found';
}

html = routes[pathname].default();
document.body.innerHTML = html;
routes[pathname].initialize();
