import { Component } from 'react';
import { GlobalStyles } from 'utils/GlobalStyles';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

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
        <GlobalStyles />
      </div>
    );
  }
}
