import React, { Component } from 'react'
import { Switch } from '../switch'

// Removes risk of multiple calls to setState
function updateState(state) {
  return { on : !state.on }
}

class Toggle extends Component {
  state = {
    on: false
  }

  toggle = () =>
    this.setState(
      updateState(this.state),
      () => {
        this.props.onToggle(this.state.on)
      },
    )

  render() {
    return <Switch on={this.state.on} onClick={this.toggle} />
  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the Toggle component.
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return <Toggle onToggle={onToggle} />
}
Usage.title = 'Build Toggle'

export {Toggle, Usage as default}
