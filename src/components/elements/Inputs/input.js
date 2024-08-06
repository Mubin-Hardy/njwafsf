import { TextField } from '@mui/material';

// TODO (enhancement & documentation) : PropTypes and JSDoc
// change inputLabelProps Style to tailwind rather than having to implicitly specify it via hex through style
export default function Input(props) {
  return (
    <TextField
      variant="filled"
      className={'flex-grow-0 focus:outline-none ' + props?.classes}
      id="filled--input"
      InputProps={{ disableUnderline: true, inputMode: props?.type }}
      InputLabelProps={{
        style: { color: '#8f8f8f' },
      }}
      {...props}
    />
  );
}
