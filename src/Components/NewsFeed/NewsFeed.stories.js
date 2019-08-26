import React from 'react';
import { storiesOf } from '@storybook/react';

import NewsFeed from './index';

const faker = require('faker');

storiesOf('NewsFeed', module)
  .add('default', () => <NewsFeed date="23/08/2019" img="https://placeimg.com/640/480" title="Whaaat??" excerpt={faker.random.words(15)} />);
