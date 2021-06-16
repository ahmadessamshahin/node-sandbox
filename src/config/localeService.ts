import type { I18n, Replacements } from 'i18n';

export class LocaleService {
  /**
   *
   * @param i18nProvider The i18n provider
   */
  constructor(private readonly i18nProvider: I18n) {
    this.i18nProvider = i18nProvider;
  } /**
   *
   * @returns {string} The current locale code
   */

  getCurrentLocale() {
    return this.i18nProvider.getLocale();
  } /**
   *
   * @returns string[] The list of available locale codes
   */

  getLocales(): string[] {
    return this.i18nProvider.getLocales();
  } /**
   *
   * @param locale The locale to set. Must be from the list of available locales.
   */

  setLocale(locale: string) {
    if (this.getLocales().indexOf(locale) !== -1) {
      this.i18nProvider.setLocale(locale);
    }
  } /**
   *
   * @param string String to translate
   * @param args Extra parameters
   * @returns {string} Translated string
   */

  translate(str: string, ...args: string[]) {
    return this.i18nProvider.__(str, ...args);
  }

  translateReplacement(str: string, args: Replacements) {
    return this.i18nProvider.__(str, args);
  }
  /**
   *
   * @param phrase Object to translate
   * @param count The plural number
   * @returns {string} Translated string
   */

  translatePlurals(phrase: string, count: number): string {
    return this.i18nProvider.__n(phrase, count);
  }
}
