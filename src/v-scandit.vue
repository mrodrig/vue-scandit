<template>
    <div id="v-scandit-barcode-scanner" />
</template>

<script>
//https://www.npmjs.com/package/scandit-sdk
import * as ScanditSDK from 'scandit-sdk';

    export default {
        name: 'VScandit',

        props: {
            licenseKey: {
                type: String,
                // Web demo default license key - allow module to be evaluated the same way as the Web SDK demo on Scandit's site allows the library to be tested
                default: 'AQjvfCXeBTtdD+3eawdysDo9qrUDIyNkkWjjT+tVf8tcczdAeg+yq8ZpY6MzS9P6KHqLfo9Y94+Yac9RNjZTEGhVTiYBPPNMWnknxc5giYVBA35sAj4MSrpu79sRV/u7ZlywMY47XpGfDf8u7SedkegM2y5MHgHAUN4XVXsoDKpyI48Qz8PI/j4JDURNsI8Q9/JasL34Bmvv4veuI+lB3mLyxj0Evgpxu/EKCzzjCOQkHLWXpWYtjdiSGv8TTvyNba7C7yBigjdAzc0FuQsqWeenJFoPLvRHUReHuaCeVlo5HinNPTJfIlsNtC/dSQJMX2rKJ0tLfL9NShEEhhjS3l6zp2utSpVKgApS0PICvnA5+gmaQjn8q940GAXYHbxSJAswT7xywDoLZeTWzm3xmyQu+wRe247CL1XpTtTzydhUPuIdvr4cjNAp6Y5rJUPX31TJ5V1UmZC/24tT+GJs8ini53ALzDlTfF06hEKLnoEmNI/YEqCzWMNmZsUnMNDJW3LOkIHtQ9EB7bqIJeLppO7MCzyHLA4V2Xrb7mBRueFTykRJHxT14nxE8oN8mZDgdQTZa4ORZFMNygrfmEhWFeKQ4OYvzaOLP1A009v3+eObZHlwMSn1LAW5xajuzWN/Uz8HbZmNsX8xponJYEqwDsLFXMd9Oe2I5h71WR6Tl9l99WtHAXIDPpOy2RtYcJEP9ERHEg5FpmbOfHuIWgDcd/Hz2uDX0pJC/2C3d6ItKAEFKQVOt7wrAPjvmDDqKPksPGBN29r6RVf8RZCHqyaJxisA5t5lRW78oaIcHcwSZKBTBgQbjeg3OPnYBiMW6iNjnb4=',
                required: false
            },
            configurationOptions: {
                type: Object,
                default: () => ({
                    engineLocation: 'https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/',
                }),
                required: false
            },
            scanSettings: {
                type: Object,
                default: () => ({
                    enabledSymbologies: ['ean8', 'ean13', 'upca', 'upce'],
                }),
                required: false
            }
        },

        mounted() {
            let component = this;

            ScanditSDK.configure(this.licenseKey, this.configurationOptions)
                .then(() => {
                    return ScanditSDK.BarcodePicker.create(document.getElementById('v-scandit-barcode-scanner'), {
                        // enable some common symbologies
                        scanSettings: new ScanditSDK.ScanSettings(component.scanSettings),
                    });
                })
                .then((barcodePicker) => {
                    component.barcodePicker = barcodePicker;
                    this.$emit('barcodePicker', barcodePicker);

                    // barcodePicker is ready here, show a message every time a barcode is scanned
                    barcodePicker.on('scan', (scanResult) => {
                        this.$emit('scan', scanResult);
                    });
                });
        },

        beforeDestroy() {
            if (this.barcodePicker) {
                this.barcodePicker.accessCamera = false
                this.barcodePicker.destroy();
            }
        },

        data: () => ({
            barcodePicker: null,
        }),
    }
</script>
