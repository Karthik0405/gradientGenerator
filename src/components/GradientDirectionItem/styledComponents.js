// Style your elements here
import styled from 'styled-components'

export const GradientListItem = styled.li`
  margin-right: 20px;
`

export const GradientButton = styled.button`
  outline: none;
  cursor: pointer;
  height: 50px;
  width: 100px;
  border-style: none;
  border-radius: 7px;
  background-color: #ededed;
  opacity: ${props => (props.isActive ? '1' : '0.5')};
  color: #334155;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 600;
`
