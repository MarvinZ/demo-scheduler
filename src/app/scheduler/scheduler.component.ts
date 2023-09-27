import { Component, enableProdMode } from '@angular/core';

import { Appointment, Service } from './scheduler.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'scheduler.component.html',
  providers: [Service],
})
export class SchedulerComponent {
  appointmentsData: Appointment[];

  currentDate: Date = new Date(2021, 2, 28);

  constructor(service: Service) {
    this.appointmentsData = service.getAppointments();
  }
}
