import React from 'react'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'
import { PlusAction, SetTextAction } from '../store'

class About extends React.Component {
  render () {
    return (
      <div>
        <h1>about page</h1>
        <p>text: {this.props.text}</p>
        <p>count: {this.props.count}</p>
        <p>id: {this.props.router.query.id}</p>

        <button onClick={this.props.handlePlus}>plus</button>
        <button onClick={() => this.props.handleSetText('About')}>set About</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => {
      dispatch(PlusAction())
    },

    handleSetText: (text) => {
      dispatch(SetTextAction(text))
    }
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(About))