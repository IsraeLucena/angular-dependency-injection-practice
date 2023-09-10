import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { HostOptionalComponent } from "../host-optional/host-optional.component";
import { HostComponent } from "../host/host.component";
import { MessageService } from 'src/app/services/message.service';

@Component({
    selector: 'app-parent',
    standalone: true,
    imports: [HostComponent, HostOptionalComponent],
    template: `
      <div>
        <p>Parent Component</p>
        <p>Msg: {{ msg }}</p>
        <app-host></app-host>
        <app-host-optional></app-host-optional>
      </div>
    `,
    providers: [
      {
        provide: MessageService,
        useFactory: () => ({
          message() {
            return 'Message in Parent component';
          }
        }),
      }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class ParentComponent {
    msg = inject(MessageService).message();
  }