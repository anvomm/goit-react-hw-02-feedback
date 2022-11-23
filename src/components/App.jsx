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

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics></Statistics>
        </Section>
        <GlobalStyles />
      </div>
    );
  }
}
