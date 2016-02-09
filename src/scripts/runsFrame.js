
var React = require('react');

var RunsFrame = React.createClass({

    render: function() {
        var tr = 'translate( ' + -85 + ' ' + -20 + ' )';
        var s = 'Runs (' + this.props.runsData.mean_runs.toFixed(2).toString() + ' mean )';
        return <g>
            <text
                fontSize={this.props.titleFontSize}
                className={'runs-title'}
                transform={tr}
                x={100}
                y={0}
                textAnchor={"left"}
                >{s}</text>
        </g>
    }
})

module.exports = RunsFrame;
