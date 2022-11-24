import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnNames = Object.keys(options);
  return (
    <List>
      {btnNames.map(name => (
        <li key={name}>
          <Button type="button" onClick={onLeaveFeedback}>
            {name}
          </Button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
