import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { MdSearch } from 'react-icons/md';

import { Input } from '../src';

storiesOf('Input', module)
  .add('Default', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        name="newhappen"
        placeholder="Placeholder"
        value={inputValue}
        setValue={setInputValue}
        icon={<MdSearch />}
        onClick={() => console.log('Clicked!')}
      />
    );
  })
  .add('Grey', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        grey={true}
        name="newhappen"
        icon={<MdSearch />}
        placeholder="Placeholder"
        value={inputValue}
        setValue={setInputValue}
        onClick={() => console.log('Clicked!')}
      />
    );
  });
