const BarGraph = () => {
	return `
        <div class="container__bar bar_graph">
            <div class="bar_graph__header">
                <span class="bar_graph__header__title">Number of accidents over time</span>

                <button class="bar_graph__header__settings_button button button--settings"></button>
            </div>
            <div class="bar_graph__content" id="chart_container">
                <canvas id="chart"></canvas>
            </div>
        </div>
    `;
};

const addEventsListeners = () => {};

export default BarGraph;
export { addEventsListeners };
