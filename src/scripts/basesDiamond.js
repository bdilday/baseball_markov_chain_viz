
var React = window.React = require('react');
var Base = require('./base');
var d3 = require('d3');
var _ = require('lodash');

var BasesDiamond = React.createClass({

    render: function() {
        var lumscale = d3.scale.linear().range([1,0]).domain([0,1]);
        console.log('basesData', this.props.basesData);
        console.log('man1', this.props.basesData['man1']);
        var data = this.props.basesData;

        var fills = _.map(['man1', 'man1', 'man2', 'man3'], function(d) {
            console.log(d, data[d]);
            return d3.hsl(
                200, 0.42, lumscale(data[d])
                ).toString();
        });

        fills[0] = d3.hsl(200, 0.42, 0).toString();

        console.log('fills', fills);

        var tr = 'translate( ' + this.props.offsetx + ' ' + this.props.offsety + ' )';
        return <g>
                    <Base
                        loc={'top'}
                        fill={fills[2]}
                        {...this.props}
                        />

                    <Base
                        loc={'right'}
                        fill={fills[1]}
                        {...this.props}
                        />

                    <Base
                        loc={'bottom'}
                        fill={fills[0]}
                        {...this.props}
                        />

                    <Base
                        loc={'left'}
                        fill={fills[3]}
                        {...this.props}
                        />
        </g>;
    }
});

module.exports = BasesDiamond;
