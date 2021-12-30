import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { useState } from 'react/cjs/react.production.min';
import BlockTable from '../components/BlockTable';

const Blockscan = () => {
  const [paused, setPaused] = useState(false)
  return (
    <>
      <BlockTable />
      <Button variant="contained" color="primary" onClick={() => { setPaused(!paused) }}>
        { paused ? "Resume" : "Pause" }
      </Button>
    </>

  )

}

export default Blockscan;