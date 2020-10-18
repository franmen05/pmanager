import { Moment } from 'moment';
import { IRecord } from 'app/shared/model/record.model';
import { ITurn } from 'app/shared/model/turn.model';
import { ResquestStatus } from 'app/shared/model/enumerations/resquest-status.model';

export interface IPatient {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  reEnrollment?: boolean;
  phoneNumber?: string;
  whatsapp?: string;
  cellNumber?: string;
  emergencyNumber?: string;
  address?: string;
  birthDate?: Moment;
  createDate?: Moment;
  status?: ResquestStatus;
  records?: IRecord[];
  turns?: ITurn[];
}

export class Patient implements IPatient {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public reEnrollment?: boolean,
    public phoneNumber?: string,
    public whatsapp?: string,
    public cellNumber?: string,
    public emergencyNumber?: string,
    public address?: string,
    public birthDate?: Moment,
    public createDate?: Moment,
    public status?: ResquestStatus,
    public records?: IRecord[],
    public turns?: ITurn[]
  ) {
    this.reEnrollment = this.reEnrollment || false;
  }
}
