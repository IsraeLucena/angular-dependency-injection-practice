import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { OptionalComponent } from '../optional/optional.component';
import { SelfComponent } from '../self/self.component';
import { SelfOptionalComponent } from '../self-optional/self-optional.component';
import { SkipSelfOptionalComponent } from '../skip-self-optional/skip-self-optional.component';

@Component({
  selector: 'app-host-optional',
  standalone: true,
  template: `
    <div>
      <p>Host Optional Component</p>
      <p>Msg: {{ msg }}</p>
      <app-skip-self-optional></app-skip-self-optional>
      <app-self-optional></app-self-optional>
      <app-self></app-self>
      <app-optional></app-optional>
    </div>
  `,
  imports: [
    OptionalComponent,
    SelfComponent,
    SelfOptionalComponent,
    SkipSelfOptionalComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostOptionalComponent {
  service? = inject(MessageService, { host: true, optional: true });
  msg =
    this.service?.message() ??
    'Host Optional component returns default message';
}
