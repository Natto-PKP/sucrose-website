import { v4 as UUID } from 'uuid';
import {
  Model,
  DataType,
  PrimaryKey,
  Default,
  Column,
  Table,
  Validate,
  AllowNull,
  BelongsTo,
} from 'sequelize-typescript';

import { Message } from '.';

export interface TicketModel {
  uuid: string;
  user: string;
  channel: string;
  reason?: string | undefined;
  archived: boolean;

  messages: Message[]
}

@Table({ tableName: 'ticket' })
export class Ticket extends Model implements TicketModel {
  @PrimaryKey
  @Default(() => UUID())
  @Column({ type: DataType.TEXT })
  declare uuid: string;

  @Validate({ is: /[0-9]{16,}/ })
  @AllowNull(false)
  @Column({ type: DataType.TEXT })
  declare user: string;

  @Validate({ is: /[0-9]{16,}/ })
  @AllowNull(false)
  @Column({ type: DataType.TEXT })
  declare channel: string;

  @AllowNull(true)
  @Column({ type: DataType.TEXT })
  declare reason?: string | undefined;

  @AllowNull(false)
  @Default(() => false)
  @Column({ type: DataType.BOOLEAN })
  declare archived: boolean;

  @BelongsTo(() => Message)
  declare messages: Message[];
}
