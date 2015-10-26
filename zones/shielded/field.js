var React = require('react');

var Field = React.createClass({
    rectStyle: function() {
        return {
            fill: "url(#fieldPattern)",
            opacity: 0.7
        };
    },
    rectDims: function() {
        return [
            this.props.contWidth * 0.8,
            this.props.contHeight * 0.5
        ];
    },
    render: function() {
        var [w, h] = this.rectDims();
        return (
            <rect x={(this.props.contWidth / 2) - (w / 2)} y={(this.props.contHeight / 2) - (h / 2)}
                  width={w} height={h} style={this.rectStyle()}>
            </rect>
        );
    }
});

var FieldPattern = React.createClass({
    getInitialState: function() {
        return {
            width: 60,
            height: 60,
            path: "M 0,60 l 60,-60 M -105,15 l 30,-30M 45,75 l 30,-30",
            strokeWidth: 40,
            color: "#343434"
        };
    },
    componentDidMount: function() {
        var guiFolder = window.gui.addFolder('Field Pattern');
        guiFolder.add(this.state, 'strokeWidth', 1, 10).onChange((value) => this.setState({ "strokeWidth": value }));
        guiFolder.addColor(this.state, "color").onChange((value) => this.setState({ "color": value }));
    },
    render: function() {
        return (
            <pattern id="fieldPattern" patternUnits="userSpaceOnUse"
                     width={this.state.width} height={this.state.height}>
                <path d={this.state.path}
                      strokeWidth={this.state.strokeWidth} shapeRendering="auto"
                      stroke={this.state.color} strokeLinecap="square">
                </path>
            </pattern>
        );
    }
});

module.exports = {
    Field: Field,
    FieldPattern: FieldPattern
};