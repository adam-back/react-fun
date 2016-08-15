var React = require( 'react' );
var Router = require( 'react-router' );
var Link = Router.Link;
var styles = require( '../styles' );

var RestartButton = React.createClass({
  render: function() {
    return (
      <Link to='/playerOne'>
        <button type='button'  style={ Object.assign( styles.redBg, styles.defaultButton ) }>Reselect Players</button>
      </Link>
    );
  }
});

module.exports = RestartButton;