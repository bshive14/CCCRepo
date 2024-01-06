import { combineReducers} from 'redux';
import landingreducer from "./landingreducer" 
import qreducer from "./qreducer"
const rootReducer = combineReducers({
    // landing:landingreducer,
    qreducer:qreducer,

})
export default rootReducer;