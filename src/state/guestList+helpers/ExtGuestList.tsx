// #━━━━━━━━━━━━━━━ typealias ━━━━━━━━━━━━━━━
import React from "react"
import {ChangeEventClosure} from "../userSearch+helpers/ExtUserSearch"

export type ChangeEvent =  React.ChangeEvent<HTMLInputElement>
export type onClickClosure = { onClick: () => void }

export const BtnComponent = (props: onClickClosure) => {
    let element = <>
        {/*━━━━ Button ━━━━*/}
        <button
            onClick={props.onClick}
        >
            Add Guest
        </button>
        {/*━━━━━━━━━━━━━*/}
        </>
    return element
}

export const InputComponent = (props: { value: string, onChange: ChangeEventClosure }) => {
    let element = <>
    <input type="text" value={props.value}
           onChange={
               props.onChange
           }
    />
        {/*━━━━━━━━━━━━━*/}
    </>
    return element
}
