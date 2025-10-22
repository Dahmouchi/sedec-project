declare module "wowjs" {
  export class WOW {
    constructor(options?: { live?: boolean; animateClass?: string; offset?: number });
    init(): void;
  }
}
