/**
 * Created by bdilday on 2/1/16.
 */


var React = require('react');
var constants = require('./constants');

module.exports = React.createClass({

    propTypes: {
        fill: React.PropTypes.string,
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        rotate: React.PropTypes.number,
        x: React.PropTypes.number,
        y: React.PropTypes.number,
        className: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            offset: 0,
            className: 'rect-as-base'
        };
    },

    render() {
        var x = parseInt(constants.locationMap[this.props.loc].x*127*this.props.pixelsPerFoot);
        var y = parseInt(constants.locationMap[this.props.loc].y*127*this.props.pixelsPerFoot);

        var sz = this.props.pixelsPerFoot*constants.baseSizeInFeet*4;

        var sx = (x + 0.5*sz).toString();
        var sy = (y + 0.5*sz).toString();
        var t = 'rotate(45 ' + sx + ' ' + sy + ')';
        var baseSizeInFeet = 1.25;

        return (
            <rect
                className='rect-as-base'
                {...this.props}
                fill={this.props.fill}
                transform={t}
                width={sz}
                height={sz}
                x={x}
                y={y}
                onMouseOver={this.props.handleMouseOver}
                onMouseLeave={this.props.handleMouseLeave}
                />
        );
    }
});

