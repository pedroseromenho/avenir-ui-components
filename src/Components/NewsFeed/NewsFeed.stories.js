import React from 'react';
import { storiesOf } from '@storybook/react';

import NewsFeed from './index';

const faker = require('faker');

storiesOf('NewsFeed', module)
  .add('default', () => (
    <NewsFeed
      date="Il y a 3 heures"
      img={faker.fake('{{image.imageUrl}}')}
      title={faker.fake('{{lorem.sentences}}')}
      excerpt={faker.random.words(15)}
    />
  ));
