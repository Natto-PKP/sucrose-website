import { v4 as UUID } from 'uuid';
import {
  AllowNull,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Validate,
} from 'sequelize-typescript';

import { Ticket } from '.';

export interface MessageModel {
  uuid: string;
  author: string;
  content?: string | undefined;
  attachments?: string | undefined;

  ticketId: string;
}

@Table({ tableName: 'message' })
export class Message extends Model implements MessageModel {
  @PrimaryKey
  @Default(() => UUID())
  @Column({ type: DataType.TEXT })
  declare uuid: string;

  @Validate({ is: /[0-9]{16,}/ })
  @AllowNull(false)
  @Column({ type: DataType.TEXT })
  declare author: string;

  @AllowNull(true)
  @Column({ type: DataType.TEXT })
  declare content?: string | undefined;

  @AllowNull(true)
  @Column({ type: DataType.JSON })
  declare attachments?: string | undefined;

  @AllowNull(false)
  @ForeignKey(() => Ticket)
  @Column({ type: DataType.TEXT })
  declare ticketId: string;
}
