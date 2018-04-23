var CounterDec = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    }
  },
  decrementCount: function() {
    this.setState({
      counter: this.state.counter - 1
    })
  },

  render: function() {
      return React.createElement('div', {onClick: this.decrementCount},
        React.createElement('span', {}, "Decrementation counter: " + this.state.counter)
      )
  }
})
