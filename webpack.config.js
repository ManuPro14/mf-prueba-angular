const { withModuleFederation } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederation({
  name: 'angularRemote',
  filename: 'remoteEntry.js',
  exposes: {
    './UserDetails': './src/app/user-details/user-details.component.ts',
  },
  shared: {
    "@angular/core": { singleton: true, strictVersion: true },
    "@angular/common": { singleton: true, strictVersion: true },
    "@angular/router": { singleton: true, strictVersion: true },
    "rxjs": { singleton: true, strictVersion: true }
  }
});