// redux-actions 사용방식
import { createAction, handleActions } from 'redux-actions';

// 모듈이름/액션이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 여러 개를 내보낼 수 있고, Import시 {} 로 불러온다
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number: 0
};

const counter = handleActions({
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
}, initialState);

// 단일건만 내보낼 수 있다
export default counter;


/* 기본형식
// 모듈이름/액션이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 여러 개를 내보낼 수 있고, Import시 {} 로 불러온다
export const increase = () => ({ type: INCREASE});
export const decrease = () => ({ type: DECREASE});

const initialState = {
    number: 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

// 단일건만 내보낼 수 있다
export default counter;
*/