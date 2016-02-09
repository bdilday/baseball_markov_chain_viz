/**
 * Created by bdilday on 2/7/16.
 */


var React = window.React = require('react');

var OutsBar = require('./outsBar');
var d3 = require('d3');
var _ = require('lodash');
var RunsFrame = require('./runsFrame');
var RunsColumn = require('./runsColumn');

var RunsDistribution = React.createClass({

    componentWillUpdate: function() {
        console.log('runsD will update', this.state, this.props);

    },

    componentWillReceiveProps: function(nextprops) {
        console.log('runsD will props', this.state, this.props, nextprops);
    },

    componentDidMount: function(nextprops) {
        console.log('runsD', this.state, this.props, nextprops);
    },

    render: function() {
        console.log('runs D props', this.props);
        var tr = 'translate( ' + this.props.offsetx + ' ' + this.props.offsety + ' )';

        var barscale = d3.scale.linear().range([0,this.props.maxheight]).domain([0,1])
        var columnwidth = this.props.ncol*(2*this.props.radius+this.props.columnbuffer);

        var that = this;
        var rc = _.map(_.range(10), function(i) {
            return <RunsColumn
                {...that.props}
                probability={that.props.runsData['run'+i.toString()]}
                columnwidth={columnwidth}
                loc={i}
                />;
        });

        return <g transform={tr}>

            <RunsFrame
                maxheight={this.props.maxheight}
                stroke={'black'}
                labelFontSize={10}
                titleFontSize={14}
                {...this.props}
                />

            {rc}

        </g>;
    }
});

module.exports = RunsDistribution;
