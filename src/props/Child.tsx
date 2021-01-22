import React from "react"

// section interface IChildProps
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface IChildProps {
    //: - ©Global-PROPERTIES
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    color: string
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/

    /// -™ Function to be implemented
    onClick: () => void
}
// #™━━━━━━━━━━━━━━━━━━|END

export const Child = ({ color, onClick }: IChildProps): JSX.Element => {
    //___________
    return <div>
        { color }
        <button onClick={onClick}>Click Me</button>
    </div>
}

/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * @React.FC<IChildProps>:
 * • ChildAsFC will be a react-component
 * • ChildAsFC might have properties assigned to it
 *   propTypes and contextTypes
 * • ChildAsFC will receive props of type IChildProps
 *
 **━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
export const ChildAsFC: React.FC<IChildProps> = ({ color, onClick, children }) => {
    //___________
    return <div>
        { color }
        { children }
        <button onClick={onClick}>Click Me</button>
    </div>
}

