import { Injector } from '@angular/core';

export class GlobalInjector {
  private static injector: Injector;

  static setInjector(injector: Injector) {
    GlobalInjector.injector = injector;
  }

  static get<T>(token: any): T {
    return GlobalInjector.injector.get<T>(token);
  }
}
