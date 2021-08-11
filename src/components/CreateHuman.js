import { Box } from '@twilio-paste/box';
import { Input } from '@twilio-paste/input';
import { Label } from '@twilio-paste/label';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { humanSlice } from '../store/humansSlice';

export const CreateHuman = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  return (
    <Box marginBottom="space60">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          /*notice how we automatically have access to actions without us having to create ourselves
          redux toolkit wires actions for us based on reducer names we give.
          In devtools, the redux action that gets generated will be humans/add (sliceName/reducerName) */
          dispatch(humanSlice.actions.add(name));
          setName('');
        }}
      >
        <Label htmlFor="create-human-name">Name</Label>
        <Input
          id="create-human-name"
          placeholder="New Human"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
    </Box>
  );
};
