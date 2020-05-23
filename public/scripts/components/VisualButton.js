import { visualDescription } from './ToolNavbar.js';
import StateManager from '../utils/StateManager.js';
import * as Visualizer from './Visualizer.js';
import { getDomElementFromDomString, eventApplyForm } from '../utils/index.js';

const VisualButton = ({ id, text }) => {
	return `<a href="#" style="display: block" id="a-${id}">${text}</a>`;
};

const addEventsListeners = (id) => {
	const root = document.getElementById(id);
	const current = document.getElementById('current-visual');

	// console.log(root);
	// console.log(current.dataset.currentVisualId);

	root.addEventListener('click', (event) => {
		event.preventDefault();

		const currentVisual = document.querySelector('.visual-container');
		StateManager.setState({ visualType: root.id.substr(2) });

		// console.log(currentVisual.children[0]);
		// console.log(getDomElementFromDomString(Visualizer.default()));

		currentVisual.children[0].replaceWith(
			getDomElementFromDomString(Visualizer.default()),
		);

		Visualizer.initializeVisualsByType(StateManager.getState().visualType)(
			StateManager.getStateForVisual().fetchedData,
		);

		current.textContent = 'Current: ' + visualDescription[root.id.substr(2)];
		current.dataset.currentVisualId = root.id.substr(2);

		const optionsContainer = document.querySelector('.options-container');
		if (optionsContainer) {
			optionsContainer.remove();
		}
	});

	root.addEventListener(eventApplyForm.type, (event) => {
		event.preventDefault();

		const currentVisual = document.querySelector('.visual-container');
		StateManager.setState({ visualType: root.id.substr(2) });

		// console.log(currentVisual.children[0]);
		// console.log(getDomElementFromDomString(Visualizer.default()));

		currentVisual.children[0].replaceWith(
			getDomElementFromDomString(Visualizer.default()),
		);

		Visualizer.initializeVisualsByType(StateManager.getState().visualType)(
			StateManager.getStateForVisual().fetchedData,
		);

		current.textContent = 'Current: ' + visualDescription[root.id.substr(2)];
		current.dataset.currentVisualId = root.id.substr(2);

		const optionsContainer = document.querySelector('.options-container');
		if (optionsContainer) {
			optionsContainer.remove();
		}
	});
};

export default VisualButton;
export { addEventsListeners };
