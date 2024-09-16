import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientBgContainer,
  GradientHeading,
  GradientPara,
  GradientListContainer,
  GradientInputColorContainer,
  GradientInput,
  GradientInputContainer,
  GradientGenrateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    gradientDirectionInput: gradientDirectionsList[0].value,
    gradientDirection: gradientDirectionsList[0].value,
    gradient1Input: '#8ae323',
    gradient2Input: '#014f7b',
    gradientColor1: '#8ae323',
    gradientColor2: '#014f7b',
  }

  onGradientClicked = id => {
    const direction = gradientDirectionsList.find(
      eachItem => eachItem.directionId === id,
    )
    this.setState({gradientDirectionInput: direction.value})
  }

  gettingColor1 = e => {
    this.setState({gradient1Input: e.target.value})
  }

  gettingColor2 = e => {
    this.setState({gradient2Input: e.target.value})
  }

  changeBackground = () => {
    const {gradientDirectionInput, gradient1Input, gradient2Input} = this.state
    this.setState({
      gradientDirection: gradientDirectionInput,
      gradientColor1: gradient1Input,
      gradientColor2: gradient2Input,
    })
  }

  render() {
    const {
      gradientDirectionInput,
      gradientDirection,
      gradientColor1,
      gradientColor2,
      gradient1Input,
      gradient2Input,
    } = this.state
    return (
      <GradientBgContainer
        direction={gradientDirection}
        color1={gradientColor1}
        color2={gradientColor2}
        data-testid="gradientGenerator"
      >
        <GradientHeading>Generate a CSS Color Gradient</GradientHeading>
        <GradientPara>Choose Direction</GradientPara>
        <GradientListContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              eachItem={eachItem}
              key={eachItem.directionId}
              onGradientClicked={this.onGradientClicked}
              isActive={eachItem.value === gradientDirectionInput}
            />
          ))}
        </GradientListContainer>
        <GradientPara>Pick the Colors</GradientPara>
        <GradientInputColorContainer>
          <GradientInputContainer>
            <GradientPara>{gradient1Input}</GradientPara>
            <GradientInput
              type="color"
              value={gradient1Input}
              onChange={this.gettingColor1}
            />
          </GradientInputContainer>
          <GradientInputContainer>
            <GradientPara>{gradient2Input}</GradientPara>
            <GradientInput
              type="color"
              value={gradient2Input}
              onChange={this.gettingColor2}
            />
          </GradientInputContainer>
        </GradientInputColorContainer>
        <GradientGenrateButton onClick={this.changeBackground}>
          Generate
        </GradientGenrateButton>
      </GradientBgContainer>
    )
  }
}

export default GradientGenerator
