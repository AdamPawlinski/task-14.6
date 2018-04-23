var CounterInc = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    }
  },
  incrementCount: function() {
    this.setState({
      counter: this.state.counter + 1
    })
  },

  render: function() {
      return React.createElement('div', {onClick: this.incrementCount},
      React.createElement('span', {}, "Incrementation counter: " + this.state.counter)
      )
  }
})
