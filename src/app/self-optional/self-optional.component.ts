import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-self-optional',
  standalone: true,
  template: `
    <div>
      <p>Self Optional Component</p>
      <p>Msg: {{ msg }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelfOptionalComponent {
  service? = inject(MessageService, { self: true, optional: true });
  msg =
    this.service?.message() ??
    'Component does not inject MessageService itself and optional message is shown';
}
