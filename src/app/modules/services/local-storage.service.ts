import { Injectable, computed, signal } from '@angular/core';
import { Locales } from '../models/locale.type';
import { ThemeMode } from '../models/theme-mode.type';
import PortfolioInfo from '../models/portfolio-info.model';
import { SECTION_TRANSLATIONS } from '../constants/translations';
import profileData from '@/assets/profile.json';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    readonly userLocale = signal<Locales>('en-US');
    readonly userTheme = signal<ThemeMode>('dark');
    readonly portfolio = signal<PortfolioInfo | undefined>(undefined);
    readonly isMenuOpen = signal<boolean>(false);
    readonly languages: Locales[] = ['en-US', 'pt-BR', 'es-ES', 'fr-FR'];

    readonly labels = computed(() => {
        return SECTION_TRANSLATIONS[this.userLocale()];
    });

    private _rawProfileData: any = profileData;

    constructor() {
        this.applyLanguage(this.userLocale());
    }

    private applyLanguage(lang: Locales): void {
        if (!this._rawProfileData) return;

        const normalizedKey = lang.toLowerCase();
        const localizedProfile = this._rawProfileData[normalizedKey]?.profile;

        const fullData: PortfolioInfo = {
            bannerUrl: this._rawProfileData.profile?.banner,
            avatarUrl: this._rawProfileData.profile?.photo,
            name: this._rawProfileData.profile?.name ?? '',
            role: localizedProfile?.role ?? '',
            about: localizedProfile?.about ?? [],
            languages: this._rawProfileData.language ?? [],
            databases: this._rawProfileData.database ?? [],
            technologies: this._rawProfileData.technology ?? [],
            projects: this._rawProfileData.projects ?? [],
            socialLinks: this._rawProfileData.socialLinks ?? []
        };

        this.userLocale.set(lang);
        this.portfolio.set(fullData);
    }

    onChangeLanguage(lang: Locales): void {
        this.applyLanguage(lang);
        this.isMenuOpen.set(false);
    }

    onChangeTheme(): void {
        this.userTheme.update(current => (current === 'dark' ? 'light' : 'dark'));
    }

    toggleMenu(): void {
        this.isMenuOpen.update(open => !open);
    }
}