import {PUBLIC_ROUTES_ENUM} from "../../../constants/routes";
import { Link } from 'react-router-dom';
import notFoundImg from '../../../assets/Images/not-found.png';

const PageNotFound = () => {
    return (
        <div className="page-status">
            <div className="page-status-content">
                <img className="page-status-img" src={notFoundImg} alt="Page not found" width={288} height={260}/>
                <h1 className="page-status-title">Page not found</h1>
                <p className="page-status-desc">The link you followed probably broken or the page has been removed.</p>
                <Link to={PUBLIC_ROUTES_ENUM.HOME}>
                    Go to Home Page
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound
