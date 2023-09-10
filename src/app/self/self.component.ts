import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-self',
  standalone: true,
  template: `
    <div>
      <p>Self Component</p>
      <p>Msg: {{ msg }}</p>
    </div>
  `,
  providers: [
    {
      provide: MessageService,
      useFactory: () => ({
        message() {
          return 'Provide MessageService in SelfComponent';
        },
      }),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelfComponent {
  service = inject(MessageService, { self: true });
  msg = this.service.message();
}
