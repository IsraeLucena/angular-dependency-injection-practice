import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { OptionalComponent } from '../optional/optional.component';
import { SelfComponent } from '../self/self.component';
import { SelfOptionalComponent } from '../self-optional/self-optional.component';
import { SkipSelfOptionalComponent } from '../skip-self-optional/skip-self-optional.component';

@Component({
  selector: 'app-host',
  standalone: true,
  template: `
    <div>
      <p>Host Component</p>
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
  providers: [
    {
      provide: MessageService,
      useFactory: () => ({
        message() {
          return 'Host component of SkipSelfComponent.  Both components should see this message';
        },
      }),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostComponent {
  service = inject(MessageService, { host: true });
  msg = this.service.message();
}
