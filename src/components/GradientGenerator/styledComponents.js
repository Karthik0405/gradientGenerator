// Style your elements here
import styled from 'styled-components'

export const GradientBgContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
`

export const GradientHeading = styled.h1`
  color: #ffffff;
  font-family: Roboto;
  font-size: 37px;
  font-weight: 600;
`
export const GradientPara = styled.p`
  color: #ededed;
  font-family: Roboto;
  font-weight: 400;
  font-size: 22px;
`
export const GradientListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
`
export const GradientInputColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const GradientInputContainer = styled.div`
  margin-right: 20px;
  margin-left: 20px;
`

export const GradientInput = styled.input`
  padding: 0px;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  height: 60px;
  width: 100px;
  background-color: transparent;
`

export const GradientGenrateButton = styled.button`
  outline: none;
  cursor: pointer;
  height: 50px;
  width: 130px;
  border-style: none;
  border-radius: 7px;
  background-color: #00c9b7;
  margin-top: 15px;
  color: #1e293b;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 600;
`
