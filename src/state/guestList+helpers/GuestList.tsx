import React, {useState} from "react"
import {BtnComponent, ChangeEvent} from "./ExtGuestList"
import {InputComponent} from "../userSearch+helpers/ExtUserSearch"

// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const GuestListComponent: React.FC = () => {
    //___________
    //: - ©COMPONENT-PROPERTIES|
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    const [name, setName] = useState<string>('')
    const [guests, setGuests] = useState<string[]>([])
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/

        // #━━━━━━━━━━━━━━━ FUNCTIONS ━━━━━━━━━━━━━━━

    const onChangeSetName = (setName: (value: string) => void) => {
            //___________
            return (event: ChangeEvent) => setName(event.target.value)
        }
    /// - END OF: onChangeSetName

    const onClick = (): void => {
        //..........
        /// -™ Sets the name added
        setName('')
        /// -™ Adds the name of the new guest & the guests themselves
        setGuests([...guests, name])
    }
    /// - END OF: onClick

    const mappingGuest = (guests: string[]) =>
        //___________
        guests.map(guest => <li key={guest}>
                {guest}
            </li>)
    /// - END OF: mappingGuest

    /**| ™- ━━━━━━━━━━━━━━━━━ HTML ━━━━━━━━━━━━━━━━━ |*/
    let element = <div>

            {/*━━━━ Header(Text) ━━━━*/}
        <h3>Guest List</h3>
        {/*━━━━━━━━━━━━━*/}

        {/*━━━━ Mapping through guest ━━━━*/}
        <ul>
            {mappingGuest(guests)}
            </ul>
        {/*━━━━━━━━━━━━━*/}

        {/*━━━━ Input field for the guest ━━━━*/}
        <InputComponent value={name}
                        onChange={onChangeSetName(setName)}
        />
        {/*━━━━━━━━━━━━━*/}

        {/*━━━━ Button to added guest ━━━━*/}
        <BtnComponent onClick={onClick} />
        {/*━━━━━━━━━━━━━*/}

        </div>
    //___________
    return element

    /**| ™- ━━━━━━━━━━━━━━━━━ HTML ━━━━━━━━━━━━━━━━━ |*/
}
/// - END OF: GuestListComponent

export default GuestListComponent

