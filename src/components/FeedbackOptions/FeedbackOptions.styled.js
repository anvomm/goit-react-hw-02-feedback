import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  min-width: 80px;
  padding: 8px;
  font-size: 16px;
  text-transform: capitalize;
  border-radius: 5px;
  background-color: #d2eaf7;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: transform 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.05);
    background-color: #b6e0fa;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15), 0px 4px 8px rgba(0, 0, 0, 0.12),
      1px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
