import { createAction, createSlice, nanoid } from '@reduxjs/toolkit';

const createTask = (title) => ({
  id: nanoid(),
  title,
  completed: false,
  assignedTo: ''
});

const initialState = [
  createTask('Study Redux course on Fe masters'),
  createTask('Clean the kitchen'),
  createTask('Watch walking dead')
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createTask(action.payload));
    },
    //verbose version in Task would use this reducer. We are using our own actionCreator now
    // toggle: (state, action) => {
    //   const task = state.find((task) => task.id === action.payload.taskId);
    //   task.completed = action.payload.completed;
    // },
    assignToUser: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.assignedTo = action.payload.humanId;
    }
  }
});

//creating our own action
export const toggleTask = createAction('tasks/toggle', (taskId, completed) => ({
  payload: { taskId, completed }
}));
