import React from 'react';
import { storiesOf } from '@storybook/react';

import { Dropdown } from '../src';

storiesOf('Dropdown', module)
  .add('Default', () => <Dropdown/>);
