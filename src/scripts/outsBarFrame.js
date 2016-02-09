/**
 * Created by bdilday on 2/1/16.
 */

var React = require('react');
var rd3 = require('react-d3');
var d3 = require('d3');

module.exports = React.createClass({

    render() {
        var x = 0;
        var y = -this.props.maxheight ;
        console.log('outsBarFrame', this.props, x, y);
        var t = 'translate( ' + this.props.offsetx + ' ' + this.props.offsety + ')';
        var w= (this.props.barwidth+this.props.barbuffer)*4 + this.props.barbuffer;

        return (
            <g>
            <rect
                className={'outs-bar-frame'}
                {...this.props}
                fill={"None"}
                transform={t}
                width={w}
                height={this.props.maxheight+this.props.barbuffer}
                x={x}
                y={y}
                />

                <text
                    fontSize={this.props.titleFontSize}

                    className={'outs-title'}
                    transform={t}
                    x={3*this.props.barbuffer+2*this.props.barwidth}
                    y={-this.props.maxheight-4}
                    textAnchor={"middle"}
                    >outs</text>

                <text
                    fontSize={this.props.labelFontSize}

                    className={'outs-label'}
                    transform={t}
                    x={1*this.props.barbuffer+0.5*this.props.barwidth}
                    y={14}
                    textAnchor={"middle"}
                    >0</text>

                <text
                    fontSize={this.props.labelFontSize}

                    className={'outs-label'}
                    transform={t}
                    x={2*this.props.barbuffer+1.5*this.props.barwidth}
                    y={14}
                    textAnchor={"middle"}
                    >1</text>

                <text
                    fontSize={this.props.labelFontSize}

                    className={'outs-label'}
                    transform={t}
                    x={3*this.props.barbuffer+2.5*this.props.barwidth}
                    y={14}
                    textAnchor={"middle"}
                    >2</text>

                <text
                    fontSize={this.props.labelFontSize}
                    className={'outs-label'}
                    transform={t}
                    x={4*this.props.barbuffer+3.5*this.props.barwidth}
                    y={14}
                    textAnchor={"middle"}
                    >3</text>

            </g>
        );
    }
});

