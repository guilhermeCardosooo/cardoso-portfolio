import { Component, input } from '@angular/core';
import { StorageService } from '../../services/local-storage.service';
import { UpperCasePipe } from '@angular/common';

@Component({
   imports: [UpperCasePipe],
   selector: 'app-screen-portfolio',
   styleUrl: './portfolio.scss',
   templateUrl: './portfolio.html',
})
export class PortfolioScreen {
   readonly storage = input.required<StorageService>();
}
