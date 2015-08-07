var React = require('react');
var Reqwest = require('reqwest');
var IntegrationsView = require('../integrations/View.jsx');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {origin: 'http://localhost:3000/api' };
  },
  readFromApi: function(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },
  render: function() {
    return (
      <div id="content">
        <IntegrationsView origin={this.props.origin} readFromApi={this.readFromApi}/>
      </div>
    );
  }
});
