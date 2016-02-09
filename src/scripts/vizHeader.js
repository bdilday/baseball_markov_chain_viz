/**
 * Created by bdilday on 2/7/16.
 */

var React = require('react');

module.exports = React.createClass({

    render: function() {
        console.log('header', this.props);
        return <div className={"viz-header"} x={this.props.x} y={this.props.y}>
            <span>plate appearance {this.props.text}</span>
        </div>;
    }
});

