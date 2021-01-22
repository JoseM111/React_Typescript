import React, {useState} from "react"
import {InputComponent, RenderUserComponent, users, UserType} from "./ExtUserSearch"

/**| ™━━━━━━━━━━━━━━━━━━━━━━━━━━━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━™ |*/

const UserSearchComponent: React.FC = () => {
    //___________
    //: - ©COMPONENT-PROPERTIES|
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    const [name, setName] = useState<string>('')
    const [user, setUser] = useState<UserType>()
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/

    // #━━━━━━━━━━━━━━━ FUNCTIONS ━━━━━━━━━━━━━━━
    const onClick = (): void => {
        //..........
        const foundUsers = users.find( (user) => {
            /**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
             * @===:
             * ------------------------------------------
             * • Strict equality === checks that two values are the
                 same or not.
               • Value are not implicitly converted to some other
                 value before comparison.
               • If the variable values are of different types, then the
                 values are considered as unequal.
               • If the variable are of the same type, are not numeric, and
                 have the same value, they are considered as equal.
               • Lastly, If both variable values are numbers, they are considered
                 equal if both are not NaN (Not a Number) and are the same value.
             * ------------------------------------------
             **━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
            return user.name === name
        })

            console.log(setUser(foundUsers))
    }
    /// - END OF: onClick

    /**| ™- ━━━━━━━━━━━━━━━━━ HTML ━━━━━━━━━━━━━━━━━ |*/
    let element = <div>

                {/*━━━━ Text ━━━━*/}
        User Search
        {/*━━━━━━━━━━━━━*/}

        {/*━━━━ input ━━━━*/}
        <InputComponent
            value={name}
            onChange={event =>
                setName(event.target.value)
            } />
        {/*━━━━━━━━━━━━━*/}

        {/*━━━━ Button(onClick) ━━━━*/}
        <button onClick={onClick}>Find User</button>
        {/*━━━━━━━━━━━━━*/}

        {/*━━━━ Render foundUsers users onClick page ━━━━*/}
        {RenderUserComponent(user)}
        {/*━━━━━━━━━━━━━*/}

        </div>
    //___________
    return element

    /**| ™- ━━━━━━━━━━━━━━━━━ HTML ━━━━━━━━━━━━━━━━━ |*/
}

/// - END OF: UserSearchComponent

export default UserSearchComponent
