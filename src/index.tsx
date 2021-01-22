import ReactDOM from 'react-dom'
import UserSearchComponent from "./refs/UserSearch"

const App = () => {
    /**| ™- ━━━━━━━━━━━━━━━━━ HTML ━━━━━━━━━━━━━━━━━ |*/
    let app = <div>

        <UserSearchComponent/>

    </div>
    /**| ™- ━━━━━━━━━━━━━━━━━ HTML ━━━━━━━━━━━━━━━━━ |*/
    return app
}

ReactDOM.render(
    //___________
    <App/>,
    document.querySelector('#root')
)
