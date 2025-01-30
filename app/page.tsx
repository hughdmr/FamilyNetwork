'use client';

import { useState } from 'react';
import { Button } from '@mantine/core';
import CreateFamily from './components/modals/CreateFamily';

export default function Home() {
  const [openedCreateFamily, setOpenedCreateFamily] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenedCreateFamily(true)}>Create Family</Button>
      <CreateFamily opened={openedCreateFamily} onClose={() => setOpenedCreateFamily(false)} />
    </>
  );
}
