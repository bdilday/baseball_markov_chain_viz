/**
 * Created by bdilday on 2/7/16.
 */

var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({

    render() {
        var x = (this.props.columnwidth+this.props.columnbuffer)*parseInt(this.props.loc)
            + this.props.columnbuffer;
        var y = -this.props.barheight ;
        console.log('runsColumn', this.props, x, y);
        var tr = 'translate( ' + x + ' ' + 0 + ')';

        var r = this.props.radius;
        var that = this;
        var maxy = 2*this.props.nrow*(r+this.props.circlebuffer);
        var stuff = _.map(_.range(this.props.ncol*this.props.nrow), function(d) {
            var dy = 2*(r+that.props.circlebuffer)*(parseInt(d/that.props.ncol))
            var op = d <= parseInt(that.props.probability*100)-1 ? 1 : 0.1;
            return <circle
                r={r}
                cx={2*(r+that.props.circlebuffer)*(d % that.props.ncol)}
                cy={maxy-dy}
                opacity={op}>
            </circle>;
        });

        console.log('stuff', stuff);
        return (
            <g transform={tr}>
                {stuff}
                <text y={this.props.barheight}>{this.props.loc}</text>
            </g>
        );
    }
});

