import React from "react"
import {ChangeEvent} from "../guestList+helpers/ExtGuestList"

export const users = [
    //___________
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 33},
    {name: 'Bobby', age: 25}
]
/**━━━━━━━━━━━━━━━━━━━━━ typealias ━━━━━━━━━━━━━━━━━━━━━*/
export type ChangeEventClosure = (event: ChangeEvent) => void
export type UserType = { name: string; age: number } | undefined

/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

export class InputComponent extends React.Component<{ value: string, onChange: ChangeEventClosure }> {
    //___________
    render = () => <input
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
    />
}

export const RenderUserComponent = (user: UserType) => {
    let element = <div>
            {/*
             ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
             * @? optional chaining:
             * ------------------------------------------
             * • this is a way of saying that when foo is defined, foo.bar.baz()
             *   will be computed; but when foo is null or undefined,
             *   stop what we’re doing and just return undefined
             * ------------------------------------------
             **━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
             */}

             <ul>
                <li>
                    {user?.name}
                    <br />
                    {user?.age}
                </li>
            </ul>
        </div>
    //___________
    return element
}
