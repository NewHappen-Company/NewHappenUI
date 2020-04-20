import React from 'react';
import { storiesOf } from '@storybook/react';

import { FiBell } from 'react-icons/fi';

import { Button } from '../src';

storiesOf('Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('Outlined', () => <Button outlined>Outlined</Button>)
  .add('Disabled', () => <Button disabled>Default</Button>);
