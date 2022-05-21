import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "../../../store/store";
import {getCatsListAction, ICat} from "../../../store/slices/catSlice";
import styles from './style.module.scss';
import {Loading} from "../../index";

const CatListComponent: FC = () => {
    const dispatch = useDispatch();
    const {listData, isLoading} = useSelector(state => state.cat);
    const {data} = listData;

    useEffect(() => {
        dispatch(getCatsListAction())
    }, [])

    return (
        <div className={styles.mainCatListDiv}>
            <div className={styles.listItemsDiv}>
                {
                    data?.map(({url, id}: ICat) => (
                        <div
                            key={id}
                            className={styles.catItem}
                        >
                            <div className={styles.imageDiv}>
                                <img src={url} alt={id}/>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className={styles.loadMoreBtn}>
                {isLoading ? <Loading/> :
                    data?.length ?
                        <button onClick={() => dispatch(getCatsListAction())}>Load more images</button> :
                        null
                }
            </div>
        </div>
    )
}

export default CatListComponent
