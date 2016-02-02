/**
 * Created by bdilday on 2/1/16.
 */


var React = require('react');

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
        var sx = (this.props.x + 0.5*this.props.width).toString();
        var sy = (this.props.y + 0.5*this.props.height).toString();

        var t = 'rotate(' + this.props.rotate + ' ' + sx + ' ' + sy + ')';
        return (
            <rect
                className='rect-as-base'
                {...this.props}
                fill={this.props.fill}
                transform={t}
                onMouseOver={this.props.handleMouseOver}
                onMouseLeave={this.props.handleMouseLeave}
                />
        );
    }
});

