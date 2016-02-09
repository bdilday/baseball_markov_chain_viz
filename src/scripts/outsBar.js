/**
 * Created by bdilday on 2/1/16.
 */

var React = require('react');
var rd3 = require('react-d3');

module.exports = React.createClass({

    propTypes: {
        fill: React.PropTypes.string,
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        offsetx: React.PropTypes.number,
        offsety: React.PropTypes.number,
        className: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            offset: 0,
            className: 'rect-as-base'
        };
    },

    render() {
        var x = (this.props.barwidth+this.props.barbuffer)*parseInt(this.props.loc) + this.props.barbuffer;
        var y = -this.props.barheight ;
        console.log('outsBar', this.props, x, y);
        var t = 'translate( ' + this.props.offsetx + ' ' + this.props.offsety + ')';

        return (
            <rect
                className='outs-bar'
                {...this.props}
                fill={this.props.fill}
                transform={t}
                width={this.props.barwidth}
                height={this.props.barheight}
                x={x}
                y={y}
                onMouseOver={this.props.handleMouseOver}
                onMouseLeave={this.props.handleMouseLeave}
                />
        );
    }
});

