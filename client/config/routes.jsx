var React = require('react');
var Router = require('react-router');
var App = require('../components/layout/App.jsx');
var IntegrationsView = require('../components/integrations/View.jsx');
var AboutView = require('../components/static/AboutView.jsx');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute name='integrations' handler={IntegrationsView}/>
    <Route name="about" handler={AboutView}/>
  </Route>
 );
