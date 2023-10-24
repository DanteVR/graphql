import 'react-native';
import React from 'react';
import render from 'react-test-renderer';
import { it } from '@jest/globals';

import { Card } from '../src/components';

it('Renders correctly', () => {
  render.create(<Card />);
});
