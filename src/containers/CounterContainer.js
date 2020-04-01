// react-redux의 Hooks 사용하는 방식
// useSelector, useDispatch
import React, { useCallback } from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
    // useCallback 으로 최적화 하기
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <div>
            <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
        </div>
    );

    // 기본형태
    // const number = useSelector(state => state.counter.number);
    // const dispatch = useDispatch();

    // return (
    //     <div>
    //         <Counter number={number} onIncrease={() => dispatch(increase())} onDecrease={() => dispatch(decrease())} />
    //     </div>
    // );
};

export default CounterContainer;


/*
// connect 함수사용하는 방식
import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
//import { bindActionCreators } from 'redux';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <div>
            <Counter number={number} onIncrease={increase} onDecrease={decrease} />
        </div>
    );
};

// Orignal 사용법1
// const mapStateToProps = state => ({
//     number: state.counter.number,
// });
// const mapDispatchToProps = dispatch => ({
//     increase: () => { dispatch(increase()) },
//     decrease: () => { dispatch(decrease()) },
// });
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 사용법2
// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     dispatch => ({
//         increase: () => { dispatch(increase()) },
//         decrease: () => { dispatch(decrease()) },
//     }),
// )(CounterContainer);

// 사용법3
// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     dispatch => bindActionCreators(
//         {
//             increase,
//             decrease,
//         },
//         dispatch,
//     ),
// )(CounterContainer);

// 사용법
export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease,
    }
)(CounterContainer);
*/