import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../components/Loading';

describe("Loading component test", () => {
  it("renders Loading component", () => {
    render(<Loading />);
  });
});
