import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseService } from '../data/serveces/base.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  contactsBase = inject(BaseService).contactsBase
  footerInfoBase = inject(BaseService).footerInfoBase
}


