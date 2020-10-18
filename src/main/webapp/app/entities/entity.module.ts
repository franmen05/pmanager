import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'patient',
        loadChildren: () => import('./patient/patient.module').then(m => m.PmanagerPatientModule),
      },
      {
        path: 'record',
        loadChildren: () => import('./record/record.module').then(m => m.PmanagerRecordModule),
      },
      {
        path: 'prescription',
        loadChildren: () => import('./prescription/prescription.module').then(m => m.PmanagerPrescriptionModule),
      },
      {
        path: 'turn',
        loadChildren: () => import('./turn/turn.module').then(m => m.PmanagerTurnModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class PmanagerEntityModule {}
