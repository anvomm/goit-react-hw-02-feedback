import { List, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = props => (
  <List>
    <li>
      <Button type="button">good</Button>
    </li>
    <li>
      <Button type="button">neutral</Button>
    </li>
    <li>
      <Button type="button">bad</Button>
    </li>
  </List>
);
