import {ChildAsFC} from './Child'

const Parent = () => {
    //___________
    const childBtnClicked = () => {
        console.log('Button has been clicked')
    }

    return <ChildAsFC color="blue" onClick={childBtnClicked}>

    </ChildAsFC>
}

export default Parent
