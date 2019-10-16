import React from 'react';

import createRouter from '../src/routes';

export default function App() {
  const Routes = createRouter();
  return <Routes />;
}
