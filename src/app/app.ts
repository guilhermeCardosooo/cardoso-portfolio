import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioScreen } from './modules/screens/portfolio/portfolio';
import { StorageService } from './modules/services/local-storage.service';

@Component({
	imports: [RouterOutlet, PortfolioScreen],
	selector: 'app-root',
	styleUrl: './app.scss',
	templateUrl: './app.html',
})
export class App {
	_storage = inject(StorageService);
}
