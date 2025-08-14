# Spartacus Storefront for SAP Commerce Cloud

This is a Spartacus-based Angular storefront configured for deployment on SAP Commerce Cloud.

## Features

- **Angular 16** with TypeScript
- **Spartacus 6.x** - SAP's headless commerce storefront
- **Server-Side Rendering (SSR)** for better SEO and performance
- **Responsive Design** with modern UI components
- **Cloud-Ready** configuration for SAP Commerce Cloud deployment

## Prerequisites

- Node.js 18.x or higher
- npm 8.x or higher
- SAP Commerce Cloud subscription
- SAP Commerce Platform 2211.42 (as configured in core-customize)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure the backend URL in `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  occBaseUrl: 'https://your-commerce-cloud-url.com',
  occApiPrefix: '/occ/v2/',
  baseSite: 'electronics-spa',
  currency: 'USD',
  language: 'en'
};
```

## Development

### Start Development Server
```bash
npm start
```

The application will be available at `http://localhost:4200`

### Build for Production
```bash
npm run build:prod
```

### Build with SSR
```bash
npm run build:ssr
```

### Serve SSR Build
```bash
npm run serve:ssr
```

## Testing

### Unit Tests
```bash
npm test
```

### E2E Tests
```bash
npm run e2e
```

## Deployment to SAP Commerce Cloud

1. **Build the application:**
```bash
npm run build:ssr
```

2. **Push to your repository:**
   - Ensure your repository is connected to SAP Commerce Cloud
   - Push the `js-storefront` folder to your repository

3. **Deploy via Cloud Portal:**
   - Log in to https://portal.commerce.ondemand.com
   - Create a new build
   - Deploy to your environment

4. **Configure the endpoint:**
   - In the Cloud Portal, go to Environments
   - Find the JS Storefront endpoint
   - Configure IP filters or change base rules to allow traffic

## Configuration

### Spartacus Configuration
The main Spartacus configuration is in `src/app/spartacus/spartacus.module.ts`:

```typescript
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
  features: {
    level: '6.0'
  }
})
```

### Environment Variables
- `NODE_ENV`: Set to 'production' for cloud deployment
- `PORT`: Server port (default: 4000)

## Project Structure

```
js-storefront/
├── src/
│   ├── app/
│   │   ├── spartacus/
│   │   │   └── spartacus.module.ts    # Spartacus configuration
│   │   ├── app.component.ts           # Main app component
│   │   ├── app.module.ts              # Main app module
│   │   └── app.server.module.ts       # SSR module
│   ├── environments/
│   │   ├── environment.ts             # Development config
│   │   └── environment.prod.ts        # Production config
│   ├── styles.scss                    # Global styles
│   ├── main.ts                        # App entry point
│   └── main.server.ts                 # SSR entry point
├── server.ts                          # Express server for SSR
├── manifest.json                      # Cloud deployment config
├── package.json                       # Dependencies and scripts
└── angular.json                       # Angular CLI config
```

## Troubleshooting

### Common Issues

1. **Build Errors:**
   - Ensure Node.js version is 18.x or higher
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`

2. **SSR Issues:**
   - Check that all components are SSR-compatible
   - Ensure no browser-only APIs are used in server context

3. **Deployment Issues:**
   - Verify manifest.json configuration
   - Check environment variables in Cloud Portal
   - Ensure repository is properly connected

## Support

For more information about Spartacus:
- [Spartacus Documentation](https://sap.github.io/spartacus-docs/)
- [SAP Commerce Cloud Help](https://help.sap.com/viewer/product/SAP_COMMERCE_CLOUD_PUBLIC_CLOUD/latest/en-US)

## License

This project is licensed under the Apache Software License, version 2.0.
