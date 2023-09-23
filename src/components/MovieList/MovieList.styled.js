import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 8px 8px;
  border-radius: 4px;

  &:hover {
    color: white;
    background-color: #0735e2;
    border-radius: 3px;
  }
`;
