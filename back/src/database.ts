import { Sequelize } from 'sequelize-typescript';
import { Message, Ticket } from './models';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  define: { underscored: true },
  logging: false,
  models: [Message, Ticket],
});

sequelize.sync({ force: true });

export default sequelize;
