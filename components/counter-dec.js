var CounterDec = React.createClass({
  getDefaultProps: function() {
    console.log('getDefaultProps - setting default props; for example it could get props responsible for changing the value of conuter depending on actual time');
  },

  getInitialState: function() {
    console.log('getInitialState - setting the state of counter');
    return {
      counter: 0
    }
  },

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps - setting new state of counter depending on received props for example changing actual time');
  },

  decrementCount: function() {
    this.setState({
      counter: this.state.counter - 1
    })
  },

  componentWillMount: function() {
    console.log('componentWillMount - preparing component to render;');
  },

  shouldComponentUpdate: function() {
    console.log('shouldComponentUpdate - setting new state of counter means that counter should be rendered once more; it returns true');
    return true;
  },

  componentWillUpdate: function() {
    console.log('componentWillUpdate - is called following shouldComponentUpdate method, when it returns true; so when time is changed counter incements and it should be rendered');
  },

  render: function() {
      return React.createElement('div', {onClick: this.decrementCount},
        React.createElement('span', {}, "Decrementation counter: " + this.state.counter)
      )
  },

  componentDidUpdate: function() {
    console.log('componentDidUpdate - after rendering changed counter there could appear new actual time under the counter');
  },

  componentDidMount: function() {
    console.log('componentDidMount - component already rendered; DOM can be changed, for example changing the state fo the counter depending on actual time');
  },

  componentWillUnmount: function() {
    this.setState({
      counter: this.state.counter = 0
    });
    console.log('componentWillUnmount - it can be used to reset the counter before liquidate the component');
  }
})
