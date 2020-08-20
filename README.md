# Vue Scandit Component

This library serves as a convienence wrapper for the Scandit Web SDK in order
to provide a simpler integration with VueJS.

## Installation
```
npm install --save vue-scandit
```

## Usage

Import the module via one of the following methods:

```javascript
import Vue from 'vue';
import VScandit from 'vue-scandit';
 
Vue.use(VScandit);
```

```html
<v-scandit license-key="AQz..." 
           :configuration-options="{ engineLocation: 'https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/' }"
           :scan-settings="{ enabledSymbologies: ['ean8', 'ean13', 'upca', 'upce'] }" />
```

### Options:

#### License-Key

Type: `String`

This value is the license key string that you will have from your account dashboard, either from a purchased license, or from an active trial.

If no license key is provided, then a default demo license key is used to provide a demo of the Scandit SDK functionality. This should not be abused and is not guaranteed to work as the license key matches the key that is provided in Scandit's Web SDK Demo. 


#### Configuration Options

Type: `Object`

Default: 
```json
{
    "engineLocation": "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/"
}
```

This value is the options object passed to the `ScanditSDK.configure` method. Additional options and documentation for this method can be found on Scandit's Documentation site:

[ScanditSDK.configure() Documentation](https://docs.scandit.com/stable/web/globals.html#configure)

#### Scan Settings

Type: `Object`

Default:
```json
{
    "enabledSymbologies": ["ean8", "ean13", "upca", "upce"]
}
``` 

This value is the barcode scanner options object passed to the `ScanditSDK.BarcodePicker.create` method, specifically under the `scanSettings` option that's passed to the `create` method.

Additional options and documentation for this method and the available `ScanSettings` fields can be found on Scandit's Documentation site:

[ScanditSDK.BarcodePicker.create() Documentation](https://docs.scandit.com/stable/web/classes/barcodepicker.html#create)
[ScanditSDK.ScanSettings() Documentation](https://docs.scandit.com/stable/web/classes/scansettings.html)

## Contributing
```
# Install Dependencies
npm install
 
# Serve the v-scandit.vue component with hot reload functionality
npm run dev
 
# Build the updated files for distribution
npm run build
```

If you find a bug, or would like to contribute new functionality, please open a pull request with your changes and a brief description of the new functionality or fix that was added. Thanks!

## License
This library is provided for use under the GNU GPL v3 license.

## Disclaimer 
It is in no way affiliated with Scandit AG and is provided without warranty or
any assurances. The contributors of this project provide no warranty and are not
liable for incorrect or misuse of this library.  
