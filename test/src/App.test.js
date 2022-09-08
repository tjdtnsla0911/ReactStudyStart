import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  console.log('render  Start !!!!!!1');
  render(<App />);
  console.log('render  Start !!!!!!2');
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
