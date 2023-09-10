import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-optional',
  standalone: true,
  template: `
    <div>
      <p>Optional Component</p>
      <p>Msg: {{ msg }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionalComponent {
  service? = inject(MessageService, { optional: true });

  msg = this.service
    ? this.service.message()
    : 'Cannot inject MessageService and optional flag enabled.';
}
