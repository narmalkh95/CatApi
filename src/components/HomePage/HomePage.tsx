import {FC} from 'react'
import CatSidebarComponent from "../CatComponents/CatSidebarCategories";
import CatListComponent from "../CatComponents/CatListComponent";

const HomePage: FC = () => {

    return (
        <div className="App">
            <CatSidebarComponent/>
            <CatListComponent/>
        </div>
    )
}

export default HomePage;
