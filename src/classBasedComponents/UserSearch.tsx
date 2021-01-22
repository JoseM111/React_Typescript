import {Component} from "react"

/**| ™━━━━━━━━━━━━━━━━━━━━━━━━━━━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━™ |*/

/**| ™- React.Component<P,S>: Takes in age generic <prop, state> |*/
class UserSearchComponent extends Component<IUserSearchProps, IUserSearchState> {
    //: - ©MEMBER-PROPERTIES|
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    state: IUserSearchState = {
        name: '',
        user: undefined
    }
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    onClick = (): void => {
        //..........
        const {find} = this.props.users/**|<<- destructuring/*/
        const {name} = this.state/**|<<- destructuring/*/

        const foundUsers = find( ({name: userName}) => userName === name)
        console.log(this.setState({ user: foundUsers }))
    }

    /**| ™- ━━━━━━━━━━━━━━━━━ HTML ━━━━━━━━━━━━━━━━━ |*/
    render() {
        //___________
        /**|<<- destructuring/*/
        const {onClick: onClick1, setState, state: state1} = this
        const {name, user} = state1

        let element = <div>

            {/*|━━━━ TEXT ━━━━|*/}
            User Search
            {/*\━━━━━━━━━━━━━/*/}

            {/*|━━━━ INPUT ━━━━|*/}
            <input
                value={name}
                onChange={ event => {
                    setState({name: event.target.value})
                }} />
            {/*\━━━━━━━━━━━━━/*/}

            {/*|━━━━ Button ━━━━|*/}
            <button
                onClick={onClick1}>
                Find User
            </button>
            {/*\━━━━━━━━━━━━━/*/}

            {/*|━━━━ UserOrUndefined rendered to page ━━━━|*/}
            <div>
                {name}
                <br />
                {user?.age}
            </div>
            {/*\━━━━━━━━━━━━━/*/}

        </div>
        //___________
        return element
    }
    /**| ™- ━━━━━━━━━━━━━━━━━ HTML ━━━━━━━━━━━━━━━━━ |*/
}
/// - END OF: UserSearchComponent

export default UserSearchComponent
//|━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**| ™━━━━━━━━━━━━━━━━━━━━━━━━ END OF: COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━™ |*/

/**|━━━━━━━━━━━━━━━━━━━━━ <PROPS, STATE> ━━━━━━━━━━━━━━━━━━━━━|*/
export type User = { name: string, age: number }
export interface IUserSearchProps {
    //: - ©MEMBER-PROPERTIES
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    users: User[]
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/

    /// -™ Function to be implemented
}
// #™━━━━━━━━━━━━━━━━━━|END

export type UserState = User | undefined
export interface IUserSearchState {
    //: - ©MEMBER-PROPERTIES
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    name: string
    user: UserState
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/

    /// -™ Function to be implemented
}
// #™━━━━━━━━━━━━━━━━━━|END
/**|━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━|*/
