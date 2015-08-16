import './main.less';

import React from 'react';
import App from './components/App';
import persist from './libs/persist'
import alt from './libs/alt'
import storage from './libs/storage'

main();

function main() {
	persist(alt,storage,'zzz');
  const app = document.createElement('div');
  app.id = 'asdf';
  document.body.appendChild(app);

  React.render(<App />, app);
}