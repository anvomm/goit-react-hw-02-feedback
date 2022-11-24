import { List, Text, TextFromState } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <li>
        <TextFromState>
          good:<span>{good}</span>
        </TextFromState>
      </li>
      <li>
        <TextFromState>
          neutral:<span>{neutral}</span>
        </TextFromState>
      </li>
      <li>
        <TextFromState>
          bad:<span>{bad}</span>
        </TextFromState>
      </li>
      <li>
        <Text>
          Total:<span>{total}</span>
        </Text>
      </li>
      <li>
        <Text>
          Positive feedback:<span>{positivePercentage || 0}%</span>
        </Text>
      </li>
    </List>
  );
};

export default Statistics;
