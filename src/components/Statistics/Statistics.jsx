import { List, Text, TextFromState } from './Statistics.styled';

const Statistics = ({ options, total, positiveFeedback }) => {
  const btnNames = Object.keys(options);

  return (
    <List>
      {btnNames.map(name => (
        <li key={name}>
          <TextFromState>
            {name}:<span>{options[name]}</span>
          </TextFromState>
        </li>
      ))}
      <li>
        <Text>
          Total:<span>{total}</span>
        </Text>
      </li>
      <li>
        <Text>
          Positive feedback:<span>{positiveFeedback || 0}%</span>
        </Text>
      </li>
    </List>
  );
};

export default Statistics;
