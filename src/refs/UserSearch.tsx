import React, {useState, useRef, useEffect} from "react"
// import {ChangeEvent} from "../state/guestList+helpers/ExtGuestList"

export const users = [
    //___________
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 33},
    {name: 'Bobby', age: 25}
]

/**━━━━━━━━━━━━━━━━━━━━━ typealias ━━━━━━━━━━━━━━━━━━━━━*/
// export type ChangeEventClosure = (event: ChangeEvent) => void
export type UserOrUndefined = { name: string; age: number } | undefined
export type User = { name: string; age: number }
export type HTMLInputElementOrNULL = HTMLInputElement | null
export type MutableRefObjectInputOrNULL = React.MutableRefObject<HTMLInputElementOrNULL>
export type PreviousStateStr = (((prevState: string) => string) | string)
/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

const RenderNameAge = (user: UserOrUndefined) => {
    //___________
    let render = <div>
            <ul>
                <li>
                    {user?.name}
                    <hr />
                    {user?.age}
                </li>
            </ul>
        </div>
    //___________
    return render
}

const InputComponent = (
    inputRef: MutableRefObjectInputOrNULL,
    name: string,
    setName: (value: PreviousStateStr) => void) => {
    //___________
    let input = <input
        ref={inputRef}
        value={name}
        onChange={event =>
            setName(event.target.value)
        } />
    //___________
    return input
}

/**| ™━━━━━━━━━━━━━━━━━━━━━━━━━━━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━™ |*/

const UserSearchComponent: React.FC = () => {
    //___________
    //: - ©COMPONENT-PROPERTIES|
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
        /// -™ HOOKS
    const inputRef = useRef<HTMLInputElementOrNULL>(null)
    const [name, setName] = useState<string>('')
    const [user, setUser] = useState<UserOrUndefined>()
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/

    // #━━━━━━━━━━━━━━━ FUNCTIONS ━━━━━━━━━━━━━━━

    /// -™ HOOKS
    /**| deps: Only gets run once, then it is disposed |*/
    useEffect(() => inputRef.current?.focus(), [])
    /// - END OF: useEffect

    const onClick = (): void => {
        //..........
        const foundUsers = users.find( (event: User) =>
            //___________
            event.name === name
        )

        setUser( foundUsers)
    }
    /// - END OF: onClick

    /**| ™- ━━━━━━━━━━━━━━━━━ HTML ━━━━━━━━━━━━━━━━━ |*/
    let element = <div>

        {/*━━━━ Text ━━━━*/}
        User Search
        {/*━━━━━━━━━━━━━*/}

        {/*━━━━ input ━━━━*/}
        {InputComponent(
            inputRef,
            name,
            setName)
        }
        {/*━━━━━━━━━━━━━*/}

        {/*━━━━ Button(onClick) ━━━━*/}
        <button
            onClick={onClick}>
            Find User
        </button>
        {/*━━━━━━━━━━━━━*/}

        {/*━━━━ Render foundUsers users onClick page ━━━━*/}
        {RenderNameAge(user)}
        {/*━━━━━━━━━━━━━*/}

        </div>
    //___________
    return element

    /**| ™- ━━━━━━━━━━━━━━━━━ HTML ━━━━━━━━━━━━━━━━━ |*/
}

/// - END OF: UserSearchComponent

export default UserSearchComponent
