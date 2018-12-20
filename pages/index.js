import React from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import { PlusAction, SetTextAction } from '../store'

class Index extends React.Component {
  static async getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    if (isServer) reduxStore.dispatch(SetTextAction('hello world'))

    const endpoint = 'https://qiita.com/api/v2/users/kousaku-maron/items?page=1&per_page=100'
    const res = await fetch(endpoint)
    const data = await res.json()

    const result = data.map(record => record.title)

    return {
      result: result,
    }
  }

  render () {
    return (
      <div>
        <h1>index page</h1>
        <p>text: {this.props.text}</p>
        <p>count: {this.props.count}</p>
        {this.props.result.map(title => (
          <p key={title}>{title}</p>
        ))}

        <button onClick={this.props.handlePlus}>plus</button>
        <button onClick={() => this.props.handleSetText('Index')}>set Index</button>

        <Link as="/p/1" href="/about?id=1"><a>go to about page</a></Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Index)