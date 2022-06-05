import AppHeader from "../AppHeader/AppHeader";
import PostAddFrom from "../PostAddForm";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";
import "./App.css";

const App =() => {
    return (
        <div className="app">
            < AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList />
            <PostAddFrom />
        </div>
    )
}

export  default App