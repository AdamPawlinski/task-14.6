var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {},
        React.createElement(Counter, {})    
      )
    )
  }
});
