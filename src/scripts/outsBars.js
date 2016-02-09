/**
 * Created by bdilday on 2/3/16.
 */


var React = window.React = require('react');

var OutsBar = require('./outsBar');
var d3 = require('d3');
var _ = require('lodash');
var OutsBarFrame = require('./outsBarFrame');

var OutsBars = React.createClass({

    componentWillUpdate: function() {
        console.log('outsBars will update', this.state, this.props);

    },

    componentWillReceiveProps: function(nextprops) {
        console.log('outsBars will props', this.state, this.props, nextprops);
    },

    componentDidMount: function(nextprops) {
        console.log('outsBarsMount', this.state, this.props, nextprops);
    },

    render: function() {
        console.log('props', this.props);
        var tr = 'translate( ' + this.props.offsetx + ' ' + this.props.offsety + ' )';
        var barscale = d3.scale.linear().range([0,this.props.maxheight]).domain([0,1])
        var barheights = _.map([this.props.outsData.out0,
            this.props.outsData.out1,
            this.props.outsData.out2,
            this.props.outsData.out3], function(d) {
            return barscale(d);
        });
        console.log('barheights', barheights);
        return <g>

            <OutsBarFrame
                maxheight={this.props.maxheight}
                stroke={'black'}
                labelFontSize={10}
                titleFontSize={14}
                {...this.props}
                />

            <OutsBar
                loc={0}
                        barheight={barheights[0]}
                        {...this.props}
                        />

                    <OutsBar
                        loc={1}
                        barheight={barheights[1]}
                        {...this.props}
                        />

                    <OutsBar
                        loc={2}
                        barheight={barheights[2]}
                        {...this.props}
                        />

                    <OutsBar
                        loc={3}
                        barheight={barheights[3]}
                        {...this.props}
                        />
        </g>;
    }
});

module.exports = OutsBars;
