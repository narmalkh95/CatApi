import {HttpService} from "./httpService";
import {ICat, ICategory} from "../../store/slices/catSlice";

class CatService extends HttpService {
    async getCategoriesList(): Promise<ICategory[]> {
        const response = await this.get('/categories')
        return response?.data
    }

    async getCatsList(limit: number, page: number, category?: number ): Promise<ICat[]> {
        const response = await this.get('/images/search', {limit, page, category})
        return response?.data
    }
}

export default new CatService()
