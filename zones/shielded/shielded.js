var React = require('react'),
    dat = require('../../vendor/dat.gui'),
    {Star, StarPattern} = require('./star'),
    {Field, FieldPattern} = require('./field');

window.gui = new dat.GUI();

var Plane = React.createClass({
    rectStyle: function() {
        return {
            fill: "#CCCCCC"
        };
    },
    render: function() {
        return (
            <rect x="0" y="0" width={this.props.contWidth} height={this.props.contHeight} style={this.rectStyle()}/>
        );
    }
});


var Shielded = React.createClass({
    getInitialState: function() {
        return {
            contWidth: this.props.width,
            contHeight: this.props.height,
            time: 0.0
        };
    },
    render: function() {
        return (
            <svg width={this.props.width} height={this.props.height}>
                <defs>
                    <StarPattern />
                    <FieldPattern />
                </defs>
                <Plane {...this.state} />
                <Star {...this.state} />
                <Field {...this.state} />
            </svg>
        );
    }
});

module.exports = Shielded;