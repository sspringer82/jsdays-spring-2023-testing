import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';
import User from './User';

const server = setupServer();

describe('App', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should handle an error', async () => {
    server.use(
      rest.post('http://localhost:3001/users', (request, response, context) => {
        if (response.body.firstname === 'Klaus') {
          return response(context.status(200))
        } else {
          return response(context.status(401));
        }
      })
    );
    render(<App />);

    const error = await screen.findByTestId('error');

    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent('Whoops an error happened!');
  });
});
