import React from 'react';
import TweetWall from './TweetWall';

import { getTweets }from '../lib/mockAPI';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      latestTweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount(){
    this.fetchTweets();

  }
  componentDidMount(){

    this.startInterval();
  }

  componentWillUnmount(){
    this.cleanUpInterval();
  }
  // TODO: componentDidMount()
  // TODO: componentWillUnmount()

  startInterval = () => {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval = () => clearInterval(this.interval);

  fetchTweets = () => {
    const newTweets = getTweets();
    // console.log(newTweets)
    this.setState({
      latestTweets: newTweets
    });
  }

  render() {
    console.log(this.state.latestTweets)
    return (
      <div>
        <TweetWall newTweets={this.state.latestTweets} />
      </div>
    )
  }
}

export default App;
