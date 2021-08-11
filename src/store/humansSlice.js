import { createSlice, nanoid } from '@reduxjs/toolkit';
import { tasksSlice } from './tasksSlice';

const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: []
});

const initialState = [
  createHuman('Rajat'),
  createHuman('Tata'),
  createHuman('Raango')
];

/**createSlice: A function that accepts an initial state, an object full of reducer functions,
 * and a "slice name", and automatically generates action creators and action types that
 * correspond to the reducers and state. */
export const humanSlice = createSlice({
  name: 'humans',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createHuman(action.payload));
    }
  },
  extraReducers: builder => {
    //this is how we subscribe to our other reducer in a different slice
    //here we need access to our task reducer so we can keep both task and human slice in sync with regards to tasks
    //so when tasksSlice assignToUser action is dispatched, the callback will trigger to update the task id for humansSlice
    builder.addCase(tasksSlice.actions.assignToUser, (state, action) => {
      for (const human of state) {
        if (human.id === action.payload.humanId) {
          human.taskIds.push(action.payload.taskId);
        }
        else {
          human.taskIds = human.taskIds.filter(id => id !== action.payload.taskId);
        }
      }
    })
  }
});
