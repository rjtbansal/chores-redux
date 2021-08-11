import { Card } from '@twilio-paste/card';
import { Checkbox } from '@twilio-paste/checkbox';
import { Flex } from '@twilio-paste/flex';
import { Label } from '@twilio-paste/label';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSlice, toggleTask } from '../store/tasksSlice';
import { SelectHuman } from './SelectHuman';

export const Task = ({ taskId }) => {
  const dispatch = useDispatch();

  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  return (
    <Card>
      <Flex marginBottom="space40">
        <Checkbox
          id={`task-${taskId}`}
          checked={task.complete}
          //onChange={(event) => dispatch(tasksSlice.actions.toggle({ taskId, completed: event.target.checked}))}
          //above is too verbose, lets use our own actionCreator we created in tasksSlice
          onChange={(event) =>
            dispatch(toggleTask(taskId, event.target.checked))
          }
        />
        <Label htmlFor={`task-${taskId}`}>{task.title}</Label>
      </Flex>
      <Flex>
        <SelectHuman task={task} />
      </Flex>
    </Card>
  );
};
