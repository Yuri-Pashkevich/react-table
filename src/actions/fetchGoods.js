import axios from 'axios'
import { setItems } from '../reducers/goods'

export const fetchGoods = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/fakeDB.json')
            dispatch(setItems(response.data))
        } catch(e) {
            console.log(e)
        }
    }
}