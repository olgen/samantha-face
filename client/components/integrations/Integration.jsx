var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li className="integration">
        <span className="integration-name">{this.props.name}</span>
      </li>
    );
  }
});
