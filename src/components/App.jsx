import { Component } from 'react';
import { GlobalStyles } from 'utils/GlobalStyles';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedbackScore = e => {
    const feedbackScore = e.target.textContent;
    document.activeElement.blur();
    this.setState(prevState => ({
      [feedbackScore]: (prevState[feedbackScore] += 1),
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => {
      return el + acc;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            addFeedbackScore={this.addFeedbackScore}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            options={this.state}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
        <GlobalStyles />
      </div>
    );
  }
}
