var React = require('react');
var Integration = require('./Integration.jsx');

module.exports = React.createClass({
  render: function() {
    var integrations = this.props.data.map(function(integration) {
      return (
        <Integration key={integration.id} name={integration.name} />
      );
    });

    return (
      <ul className="integrations-list">
        {integrations}
      </ul>
    );
  }
});
