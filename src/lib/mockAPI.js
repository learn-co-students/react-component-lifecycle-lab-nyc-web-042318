const tweets = require('./data/tweets.json').statuses;
let numTweetsSent = 0;

export const getTweets = () => {
  // get num tweets to send (between 0 and 4)
  const numTweets = Math.floor(Math.random() * 4);

  // if the stream has reached 100 tweets, reset
  if ((numTweetsSent + numTweets) > 100) {
    numTweetsSent = 0;
  }
  numTweetsSent = numTweetsSent + numTweets;
  // console.log(tweets.slice(numTweetsSent - numTweets, numTweetsSent))
  return tweets.slice(numTweetsSent - numTweets, numTweetsSent);
}
