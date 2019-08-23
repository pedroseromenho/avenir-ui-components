import React from 'react';
import { storiesOf } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Button from './index';

const faker = require('faker');


storiesOf('Button', module)
  .add('default', () => <Button text={faker.fake('{{lorem.word}}')} />)
  .add('primary', () => <Button text={faker.fake('{{lorem.word}}')} type="primary" />)
  .add('icon-light', () => <Button icon={<FontAwesomeIcon icon={faCoffee} />} type="light" />);
