import { Router } from 'express';
// import { signInUserValidation } from '../constants/validations/user';
// import controller from '../controllers/auth';
// import { asyncMiddleware } from '../middlewares';
// import { validateMiddlware } from '../middlewares/validations';
// import { authenticateUser } from '../middlewares/user';

const routes = Router();

//routes.post(
//   '/',
//   signInUserValidation,
//   validateMiddlware,
//   asyncMiddleware(controller.signIn)
// );
// routes.post('/signout', asyncMiddleware(controller.signOut));
// routes.post('/refresh', asyncMiddleware(controller.refresh));
// routes.get(
//   '/fetch',
//   asyncMiddleware(authenticateUser),
//   asyncMiddleware(controller.fetch)
// );

// /**
//  * Recovery routes
//  */
// routes.post('/recovery', asyncMiddleware(controller.sendRecoveryCode));
// routes.post('/recovery/update', asyncMiddleware(controller.updatePassword));

routes.get('/', (req, res) => {
  res.send({ message: `Welcome!` });
});

export default routes;
