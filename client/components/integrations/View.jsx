var React = require('react');
var IntegrationsList = require('./List.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data:[]};
  },
  componentDidMount: function() {
    this.readIntegrationsFromApi();
  },
  readIntegrationsFromApi: function() {
    this.props.readFromApi(this.props.origin + "/integrations", function(integrations) {
      this.setState({data: integrations});
    }.bind(this));
  },
  render: function() {
    return (
      <div className="integrations-view">
        <IntegrationsList data={this.state.data} />
      </div>
    );
  }
});
