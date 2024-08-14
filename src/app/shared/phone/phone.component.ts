import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent {
  @Input('align')
  align = 'center';
}
