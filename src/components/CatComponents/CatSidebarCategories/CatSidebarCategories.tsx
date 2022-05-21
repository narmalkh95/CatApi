import {FC, useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "../../../store/store";
import {
    getCategoriesListAction,
    ICategory,
    setSelectedCategoryIdAction
} from "../../../store/slices/catSlice";
import styles from './style.module.scss';

const CatSidebarComponent: FC = () => {
    const dispatch = useDispatch();
    const {data: catCategories, selectedCategoryId} = useSelector(state => state.cat.categoriesList);

    useEffect(() => {
        dispatch(getCategoriesListAction())
    }, [])

    const memoizedCategoriesList = useMemo(() => {
        return catCategories?.map(({name, id}: ICategory) => (
            <li
                key={id}
                className={`${styles.listEl} ${selectedCategoryId === id ? styles.activeListEl : ''}`}
                onClick={() => dispatch(setSelectedCategoryIdAction(id))}
            >
                {name}
            </li>
        ))
    }, [catCategories, selectedCategoryId])

    if(!catCategories?.length) return null;

    return (
        <div className={styles.catSideBarDiv}>
            <ul className={styles.listDiv}>
                {memoizedCategoriesList}
            </ul>
        </div>
    )
}

export default CatSidebarComponent
