import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})

