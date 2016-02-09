/**
 * Created by bdilday on 2/9/16.
 */

var React = require('react');
var _ = require('lodash');

var ProbabilityTable = React.createClass({

    render: function() {
        var tr = 'translate( ' + this.props.offsetx + ' ' + this.props.offsety + ' )';

        var that = this;
        console.log('prob', that.props);

        var stuff = _.map(['out', '1B', '2B', '3B', 'HR'], function(d, i) {
            var k = 'prob' + i.toString();
            console.log('k', k);
            var s = d + ': ' + that.props.probs[k].toString();

            return <text
                fontSize={that.props.fontSize}
                transform={tr}
                x={0}
                y={i*20}
                textAnchor={"end"}
                >{s}</text>
        });


        return <g>
            {stuff}
        </g>
    }
})

module.exports = ProbabilityTable;
