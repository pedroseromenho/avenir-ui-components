import React from 'react';
import { storiesOf } from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import {
  faCoffee, faUser, faCheck, faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import Button from './index';
import markdownProps from './Button.md';

const faker = require('faker');

const icons = [faCoffee, faUser, faCheck, faArrowLeft];
const icon = icons[Math.floor(Math.random() * icons.length)];

const doc = { notes: { markdown: markdownProps } };

storiesOf('Button', module)
  .add('Standard w/ text & icon', withPropsCombinations(
    Button,
    {
      type: [''],
      text: [faker.fake('{{name.title}}'), ''],
      icon: ['', icon],
      size: ['', 'medium', 'big'],
    },
  ))
  .add('default', () => <Button text={faker.fake('{{name.title}}')} />, doc)
  .add('primary', () => <Button text={faker.fake('{{name.title}}')} type="primary" />, doc)
  .add('secondary', () => <Button text={faker.fake('{{name.title}}')} type="secondary" />, doc)
  .add('w/ icon', () => <Button text={faker.fake('{{name.title}}')} icon={icon} />, doc)
  .add('primary w/ icon', () => <Button text={faker.fake('{{name.title}}')} type="primary" icon={icon} />, doc)
  .add('small', () => <Button text={faker.fake('{{name.title}}')} />, doc)
  .add('medium', () => <Button text={faker.fake('{{name.title}}')} size="medium" />, doc)
  .add('big', () => <Button text={faker.fake('{{name.title}}')} size="big" />, doc);
