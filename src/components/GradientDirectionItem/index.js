// // Write your code here
import {GradientListItem, GradientButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItem, onGradientClicked, isActive} = props
  const {directionId, displayText} = eachItem
  const gradientClicked = () => onGradientClicked(directionId)
  return (
    <GradientListItem>
      <GradientButton onClick={gradientClicked} isActive={isActive}>
        {displayText}
      </GradientButton>
    </GradientListItem>
  )
}

export default GradientDirectionItem
