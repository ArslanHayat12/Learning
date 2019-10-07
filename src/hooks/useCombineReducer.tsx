export const useCombinedReducers = (reducersObject: any) => {
  const state = Object.keys(reducersObject).reduce(
    (stateObj, key) => ({ ...stateObj, [key]: reducersObject[key][0] }),
    {}
  );

  const dispatch = (action: any) =>
    Object.keys(reducersObject)
      .map(key => reducersObject[key][1])
      .forEach(func => func(action));

  return [state, dispatch];
};
