import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loading from '../components/Loading';

describe("Loading component test", () => {
  it("renders Loading component", () => {
    render(<Loading />);
  });
});
