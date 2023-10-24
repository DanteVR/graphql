import 'react-native';
import React from 'react';
import render from 'react-test-renderer';
import { it, expect } from '@jest/globals';

import { Badge } from '../src/components';

it('Renders correctly with the given text', () => {
  const tree = render.create(<Badge text="This is a text" />).toJSON();
  expect(tree).toMatchSnapshot();
});
