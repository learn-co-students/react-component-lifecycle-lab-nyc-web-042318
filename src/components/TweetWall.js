import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

  // TODO: componentWillMount()
  componentDidMount(){
    this.setState({tweets: [...this.props.newTweets]})
  }

  componentDidUpdate(prevProps){
    // console.log(prevProps.newTweets, this.props.newTweets)
    if(!prevProps.newTweets && this.props.newTweets[0].text !== prevProps.newTweets[0].text)
      this.setState({tweets: this.props.newTweets})

  }

//   UNSAFE_componentWillReceiveProps(nextProps)
// Note:
// Using this lifecycle method often leads to bugs and inconsistencies, and for that reason it is going to be deprecated in the future.
// If you need to perform a side effect (for example, data fetching or an animation) in response to a change in props, use componentDidUpdate lifecycle instead.
// For other use cases, follow the recommendations in this blog post about derived state.
// If you used componentWillReceiveProps for re-computing some data only when a prop changes, use a memoization helper instead.
// If you used componentWillReceiveProps to “reset” some state when a prop changes, consider either making a component fully controlled or fully uncontrolled with a key instead.
// In very rare cases, you might want to use the getDerivedStateFromProps lifecycle as a last resort.

  componentWillReceiveProps(nextProps){
    this.setState({tweets: [...nextProps.newTweets, ...this.state.tweets]})
  }
  // TODO: shouldComponentUpdate()

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.newTweets.length >0){return true}
    return false
  }
  // TODO: componentWillReceiveProps()

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);
    // console.log(this.state.tweets, this.props.newTweets)
    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
