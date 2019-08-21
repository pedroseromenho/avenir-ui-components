import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  faCoffee, faUser, faCheck, faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import Button from './index';

const faker = require('faker');

const icons = [faCoffee, faUser, faCheck, faArrowLeft];
const icon = icons[Math.floor(Math.random() * icons.length)];

storiesOf('Button', module)
  .add('default', () => <Button text={faker.fake('{{name.title}}')} />)
  .add('primary', () => <Button text={faker.fake('{{name.title}}')} type="primary" />)
  .add('secondary', () => <Button text={faker.fake('{{name.title}}')} type="secondary" />)
  .add('w/ icon', () => <Button text={faker.fake('{{name.title}}')} icon={icon} />)
  .add('primary w/ icon', () => <Button text={faker.fake('{{name.title}}')} type="primary" icon={icon} />)
  .add('small', () => <Button text={faker.fake('{{name.title}}')} />)
  .add('medium', () => <Button text={faker.fake('{{name.title}}')} size="medium" />)
  .add('big', () => <Button text={faker.fake('{{name.title}}')} size="big" />);
