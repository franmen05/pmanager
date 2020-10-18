import { Moment } from 'moment';
import { IPrescription } from 'app/shared/model/prescription.model';
import { IPatient } from 'app/shared/model/patient.model';

export interface IRecord {
  id?: number;
  description?: string;
  createDate?: Moment;
  lastUpdateDate?: Moment;
  presciptions?: IPrescription[];
  patient?: IPatient;
  patient?: IPatient;
}

export class Record implements IRecord {
  constructor(
    public id?: number,
    public description?: string,
    public createDate?: Moment,
    public lastUpdateDate?: Moment,
    public presciptions?: IPrescription[],
    public patient?: IPatient,
    public patient?: IPatient
  ) {}
}
