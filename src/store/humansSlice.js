import { createSlice, nanoid } from '@reduxjs/toolkit';

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
  }
})