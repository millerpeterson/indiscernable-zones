var React = require('react'),
    ReactDOM = require('react-dom');

var Shielded = require('./zones/shielded/shielded.js');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Shielded width={640} height={480} />,
        document.getElementById('shielded')
    );
});

window.zones = zones;
