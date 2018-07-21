import React from 'react'
import Tweet from './Tweet'

class TweetWall extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      tweets: []
    }
  }

  componentWillMount (nextProps) {
    this.setState({
      tweets: this.props.newTweets
    })
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.newTweets.length > 0
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      tweets: [...nextProps.newTweets, ...this.state.tweets]
    })
  }
  // componentWillMount (nextProps) {
  //   this.setState({
  //     tweets: nextProps.newTweets
  //   })
  // }
  // TODO: componentWillMount()
  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()

  render () {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />)

    return (
      <div>{tweets}</div>
    )
  }
}

export default TweetWall
