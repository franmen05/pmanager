import { Moment } from 'moment';
import { IPatient } from 'app/shared/model/patient.model';

export interface ITurn {
  id?: number;
  position?: number;
  createDate?: Moment;
  lastUpdateDate?: Moment;
  patient?: IPatient;
  patient?: IPatient;
}

export class Turn implements ITurn {
  constructor(
    public id?: number,
    public position?: number,
    public createDate?: Moment,
    public lastUpdateDate?: Moment,
    public patient?: IPatient,
    public patient?: IPatient
  ) {}
}
