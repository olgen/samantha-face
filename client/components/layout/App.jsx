var React = require('react');
var Reqwest = require('reqwest');
var IntegrationsView = require('../integrations/View.jsx');

var Menu = require('./Menu.jsx');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
  getDefaultProps: function() {
    return {origin: 'http://localhost:3000/api' };
  },
  getInitialState: function() {
    return {showMenu: false};
  },
  handleMenuClick: function() {
    this.setState({showMenu: !this.state.showMenu});
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
    var menu = this.state.showMenu ? 'show-menu' : 'hide-menu';
    return (
      <div id="app" className={menu}>
        <Menu sendMenuClick={this.handleMenuClick} />
        <div id="content">
          <RouteHandler origin={this.props.origin} readFromApi={this.readFromApi}/>
        </div>
      </div>
    );
  }
});
