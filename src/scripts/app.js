
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    mountNode = document.getElementById("chart");
var rd3 = require('react-d3');

var Base = require('./base');
var BarChart = rd3.BarChart;
var BasesDiamond = require('./basesDiamond');
var OutsBars = require('./outsBars');
var initialState = require('./initialState');
var $ = require('jquery');
var Rcslider = require('rc-slider');
var VizHeader = require('./vizHeader');
var RunsDistribution = require('./runsDistribution');
var ProbabilityTable = require('./probabilityTable');

var BaseballMarkovChainViz = React.createClass({

    componentDidMount: function() {

        var params = {seq_length: 10,
            //p0: 0.69, p1: 0.23, p2: 0.05, p3: 0.005, p4: 0.025, max_score: 10
            p0: 0.5, p1: 0.5, p2: 0.0, p3: 0.00, p4: 0.0, max_score: 10
        };
        console.log('didmount', params);
        $.get('https://baseball-markov-chain.herokuapp.com/baseball_markov_chain',
            params, function(result) {
                console.log('result', result);
                this.setState({
                    'probabilities': JSON.parse(result).probs,
                    'data': JSON.parse(result).seq[0],
                    'seq': JSON.parse(result).seq,
                'idx': 0});
            }.bind(this)
        );

        this.timer = setInterval(this.increment, 500)
    },

    increment: function() {
        console.log('increment', this.state.idx);
        var newidx = this.state.idx + 1;
        if (newidx<30) {
          //  newidx = newidx > 9 ? 0 : newidx;
            this.setState({'idx': newidx, 'data': this.state.seq[newidx%10]});
        } else {
            clearInterval(this.timer.clear);
        };
    },

    getInitialState: function() {
        console.log('initialState', initialState);
        return initialState;
    },

    sliderChange: function() {
        console.log('slider');
    },

    render: function() {
        var svgw=800, svgh=800;
        var dx = 10;
        var dy = 10;
        var tr = 'translate(' + dx + ' ' + dy + ')';

        return <div>

            <VizHeader
                text={this.state.idx%10}
                />

            <Rcslider onChange={this.sliderChange} />
                <svg width={svgw} height={svgh} >
                <g transform={tr}>
                    <BasesDiamond
                        offsetx={300} offsety={350}
                        pixelsPerFoot={2}
                        stroke={'black'}
                        strokeWidth={0.5}
                        basesData={this.state.data}
                        />
                </g>
                <g>
                    <OutsBars
                        offsetx={330} offsety={275}
                        className={'blahfoo'}
                        barwidth={10}
                        barbuffer={2}
                        fill={'#333444'}
                        outsData={this.state.data}
                        maxheight={64*2*2}
                        fontSize={10}
                        />
            </g>

                    <g>
                        <RunsDistribution
                            offsetx={405} offsety={175}
                            className={'runs-distribution'}
                            nrow={20}
                            ncol={5}
                            radius={2}
                            circlebuffer={0.5}
                            columnbuffer={2}
                            runsData={this.state.data}
                            maxheight={64*2*2}
                            fontSize={10}
                            />
                    </g>

                    <g>
                        <ProbabilityTable
                            offsetx={700} offsety={35}
                            className={'probability-table'}
                            probs={this.state.probabilities}
                            fontSize={16}
                            />
                        </g>

                </svg>
        </div>;
    }
});

ReactDOM.render(<BaseballMarkovChainViz />, mountNode);

