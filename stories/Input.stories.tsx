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
        placeholder="NewHappen..."
        value={inputValue}
        setValue={setInputValue}
      />
    );
  })
  .add('With Icon', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        name="newhappen"
        icon={<MdSearch />}
        placeholder="NewHappen..."
        value={inputValue}
        setValue={setInputValue}
      />
    );
  })
  .add('Light Default', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        light
        name="newhappen"
        placeholder="NewHappen..."
        value={inputValue}
        setValue={setInputValue}
      />
    );
  })
  .add('Light With Icon', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        light
        name="newhappen"
        icon={<MdSearch />}
        placeholder="NewHappen..."
        value={inputValue}
        setValue={setInputValue}
      />
    );
  });
