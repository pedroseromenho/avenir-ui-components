import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

const faker = require('faker');


storiesOf('Button', module)
  .add('default', () => <Button text={faker.fake('{{lorem.word}}')} />)
  .add('primary', () => <Button text={faker.fake('{{lorem.word}}')} type="primary" />);
