import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { 
  B2cStorefrontModule,
  provideConfigFromMetaTags,
  provideDefaultConfig,
  provideConfigFactory
} from '@spartacus/storefront';
import { 
  provideConfigFromMetaTagsFactory,
  defaultB2cStorefrontConfig 
} from '@spartacus/storefront';

@NgModule({
  imports: [
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
          prefix: '/occ/v2/'
        }
      },
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: ['electronics-spa']
      },
      i18n: {
        resources: {
          en: {
            common: {
              searchBox: {
                placeholder: 'Search in store'
              }
            }
          }
        }
      },
      features: {
        level: '6.0'
      }
    })
  ],
  providers: [
    provideDefaultConfig(defaultB2cStorefrontConfig),
    provideConfig({
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
          prefix: '/occ/v2/'
        }
      },
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: ['electronics-spa']
      },
      features: {
        level: '6.0'
      }
    })
  ]
})
export class SpartacusModule { }
