import style from 'styled-components'

export const StatusStyled = style.span`
  background: ${props => (props.isOnline ? 'green' : 'red')};
  color: black;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;