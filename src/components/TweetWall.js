import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount(props) {
    this.setState({
      tweets: this.props.newTweets
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.newTweets.length !== 0)
  }


  componentWillReceiveProps(nextProps) {
    let updatedTweets = [...nextProps.newTweets, ...this.state.tweets]
    this.setState({
      tweets: updatedTweets
    })
  }

  // TODO: componentWillMount()
  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()

  render() {
    // console.log(this.props.newTweets)
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
