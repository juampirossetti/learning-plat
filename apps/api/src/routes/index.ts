import authRoutes from './auth';
import { someFunction } from '@learning-plat/test-lib';

export default (app) => {
  app.use('/auth', authRoutes);
  app.get('/api', (req, res) => {
    res.send({ message: `Welcome to my-express-app! ${someFunction()}` });
  });

  //   //app.use('/users', userRoutes);
  //   //   app.use('/courses', courseRoutes);
  //   //   app.use('/sections', sectionRoutes);
  //   //   app.use('/lessons', lessonRoutes);
  //   //   app.use('/inscriptions', inscriptionRoutes);
  //   //   app.use('/corrector', correctorRoutes);
  //   app.get('/', function (req, res) {
  //     res.send('ok');
  //   });
};
