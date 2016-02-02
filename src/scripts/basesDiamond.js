
var React = window.React = require('react');

var Base = require('./base');

var BasesDiamond = React.createClass({

    render: function() {
        var tr = 'translate( ' + this.props.offsetx + ' ' + this.props.offsety + ' )';
        return <div>
            <svg width={this.props.svgw} height={this.props.svgh}>
                <g transform={tr}>

                    <Base
                        width={10}
                        height={10}
                        fill={'#3182bd'}
                        strokeWidth={2}
                        stroke={'red'}
                        rotate={45}
                        x={64}
                        y={0}
                        />

                    <Base
                        width={10}
                        height={10}
                        fill={'#3182bd'}
                        strokeWidth={2}
                        stroke={'red'}
                        rotate={45}
                        x={0}
                        y={64}
                        />

                    <Base
                        width={10}
                        height={10}
                        fill={'#3182bd'}
                        strokeWidth={2}
                        stroke={'red'}
                        rotate={45}
                        x={128}
                        y={64}
                        />

                    <Base
                        width={10}
                        height={10}
                        fill={'#3182bd'}
                        strokeWidth={2}
                        stroke={'red'}
                        rotate={45}
                        x={64}
                        y={128}
                        />
    </g>
</svg>
        </div>;
    }
});

module.exports = BasesDiamond;
