import { configureStore } from '@reduxjs/toolkit';
import { humanSlice } from './humansSlice';
import { tasksSlice } from './tasksSlice';
/**configureStore is a layer provided by redux toolkit on top of createStore where additional configs like dev tools enhancers,
 * middlewares such as thunks are already configured for us
 */
export const store = configureStore({
  //similar to combineReducers, configureStore will take in all our reducers
  //as shown below and automatically associate reducer slice name with the actual reducer
  reducer: {
    tasks: tasksSlice.reducer,
    humans: humanSlice.reducer
  }
});
