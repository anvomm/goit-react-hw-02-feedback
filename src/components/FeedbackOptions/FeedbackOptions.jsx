import { List, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, addFeedbackScore }) => {
  const btnNames = Object.keys(options);
  return (
    <List>
      {btnNames.map(name => (
        <li key={name}>
          <Button type="button" onClick={addFeedbackScore}>
            {name}
          </Button>
        </li>
      ))}
    </List>
  );
};
