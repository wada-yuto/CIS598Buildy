import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function WorkoutRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box sx={{ width: 230 }}>
      <Typography component="legend">No rating given</Typography>
      <Rating onChange={(event, newValue) => {
          setValue(newValue);
        }}
        name="no-value" value={null} />
    </Box>
  );
}