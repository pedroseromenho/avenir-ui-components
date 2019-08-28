import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import {
  faUser, faCheck, faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import Button from './index';

const faker = require('faker');

const icons = [faUser, faCheck, faArrowLeft];
const icon = icons[Math.floor(Math.random() * icons.length)];

storiesOf('Button', module)
  .add('outlined w/ text & icon', withPropsCombinations(
    Button,
    {
      type: ['outlined'],
      text: [faker.fake('{{name.title}}')],
      icon: ['', icon],
      size: ['', 'medium', 'big'],
    },
  ))
  .add('outlined w/ icon', withPropsCombinations(
    Button,
    {
      type: ['outlined'],
      text: [''],
      icon: [icon],
      size: ['', 'medium', 'big'],
    },
  ))
  .add('default', () => <Button handleClick={action('clicked')} text={faker.fake('{{name.title}}')} />)
  .add('outlined', () => <Button handleClick={action('clicked')} text={faker.fake('{{name.title}}')} type="outlined" />)
  .add('primary', () => <Button handleClick={action('clicked')} text={faker.fake('{{name.title}}')} type="primary" />)
  .add('secondary', () => <Button handleClick={action('clicked')} text={faker.fake('{{name.title}}')} type="secondary" />)
  .add('text w/ icon', () => <Button handleClick={action('clicked')} text={faker.fake('{{name.title}}')} icon={icon} />)
  .add('w/ icon', () => <Button handleClick={action('clicked')} icon={icon} />);
