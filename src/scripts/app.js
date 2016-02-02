
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    mountNode = document.getElementById("chart");
var rd3 = require('react-d3');

var Base = require('./base');
var BarChart = rd3.BarChart;
var BasesDiamond = require('./basesDiamond');

var BaseballMarkovChainViz = React.createClass({
    render: function() {
        return <div>

                    <BasesDiamond
                        offsetx={10} offsety={10}
                        svgw={500} svgh={500}
                        />

        </div>;
    }
});

ReactDOM.render(<BaseballMarkovChainViz />, mountNode);

