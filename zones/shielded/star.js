var React = require('react');

var Star = React.createClass({
    getInitialState: function() {
        return {
            radius: this.circleRadius(),
            path: "M 0,10 l 10,-10 M 0,2.5 l 5,-5M 7.5,12.5 l 5,-5",
            strokeWidth: 10,
            color: "#FF0000"
        };
    },
    componentDidMount: function() {
        var guiFolder = window.gui.addFolder('Star');
        guiFolder.add(this.state, 'strokeWidth', 1, 50).onChange((value) => this.setState({"strokeWidth": value}));
        guiFolder.addColor(this.state, "color").onChange((value) => this.setState({"color": value}));
    },
    circleStyle: function() {
        return {
            fill: "url(#starPattern)",
            stroke: "black",
            strokeWidth: "2px",
            opacity: "0.7"
        }
    },
    circlePosition: function() {
        return [
            this.props.contWidth * 0.5,
            this.props.contHeight * 0.5
        ];
    },
    circleRadius: function() {
        return this.props.contHeight * 0.2;
    },
    render: function() {
        var [cx, cy] = this.circlePosition();
        return (
            <circle cx={cx} cy={cy} r={this.circleRadius()} style={this.circleStyle()}>
            </circle>
        );
    }
});

var StarPattern = React.createClass({
    getInitialState: function() {
        return {
            width: 10,
            height: 10,
            path: "M 0,10 l 10,-10 M 0,2.5 l 5,-5M 7.5,12.5 l 5,-5",
            strokeWidth: 10,
            color: "#FF0000"
        };
    },
    componentDidMount: function() {
        var guiFolder = window.gui.addFolder('Star Pattern');
        guiFolder.add(this.state, 'strokeWidth', 1, 10).onChange((value) => this.setState({"strokeWidth": value}));
        guiFolder.addColor(this.state, "color").onChange((value) => this.setState({"color": value}));
    },
    render: function() {
        return (
            <pattern id="starPattern" patternUnits="userSpaceOnUse"
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
    Star: Star,
    StarPattern: StarPattern
};