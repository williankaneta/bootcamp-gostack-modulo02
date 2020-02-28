import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Willian Tetsuo Kaneta',
    email: 'tetsuokaneta@gmail.com',
    password_hash: '12312312',
  });
  res.json({ user });
});

export default routes;
