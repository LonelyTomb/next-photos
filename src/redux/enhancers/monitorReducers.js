const round = (number) => Math.round(number * 100) / 100;

const monitorReducerEnhancer = (createStore) => (
  reducer,
  initialState,
  enhancer,
) => {
  const monitoredReducer = (state, action) => {
    console.time('time taken')
    const newState = reducer(state, action);
    console.timeEnd('time taken')

    return newState;
  };

  return createStore(monitoredReducer, initialState, enhancer);
};

export default monitorReducerEnhancer;
