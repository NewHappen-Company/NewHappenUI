import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Modal, Button } from '../src';

storiesOf('Modal', module).add('Test Modal', () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>

      <Modal title="Modal Title" open={open} setOpen={setOpen}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ante. In ultricies purus id urna faucibus semper. Nulla eu facilisis leo. Duis sit amet arcu bibendum, tincidunt neque vitae, euismod tortor. Aenean lacinia rhoncus erat, nec rutrum justo pulvinar in. Suspendisse pharetra iaculis risus, ac sodales dolor lobortis pretium. Nullam tincidunt libero eu accumsan ullamcorper.
      </Modal>
    </>
  );
});
