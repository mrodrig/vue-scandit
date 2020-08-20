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
                default: 'AQZOrRteBEkNL00Y2BzlDawGLF+INUj7V0OVEW4Lmj5oYTPF+kjyUjA3teTSf6JkdBp2jJxHosY9bJjU5kAHEgJ2TgfxJmP/3XKgn7ZIoW+laxrLzHsC4E1DGE9uePRx/Webii0FzQgYJij0agLqr+6v54OnkD6bUPbyAtVXf86RJHNkMlMkZDXyrOkAkbFz+6s7xAKEaXdsFOxxtB2I94VvbEtg/Y5DjumsqwuGs+uQEYgo40I28fAY04uegvVzhPJxy2Uajgod5qcda4Ou3zLkisEBZd8kFmGk2XWWfFR5eViTjiAxncRNmvrYABiF6jA78BVH70/H/Ca3JX3s7E/Y8VdyE+QUW4t5TVmPQA9Dl6WGYQmxWEB0TrRJ+upZBYQhkHBNDEnazyZpIRc4MjnSLmjh8E9fMOelewwDVh39mdo09asD/l7SJH8w1OQmPZ6df6QjvI8nZ8O2xdQNKZW6UrKAYF4lhTOohddaggikYQ5pxUp8WH+87fDiDo7VcRcBXPiGwCoRGvmc7GAibybhz0mJ50mX5h+5rqLNONo5iHCD8HGTv9FOIgaScV8/TkeX1rB49Kcbkp/8D5dQV0QiiqxCF1dNGKMmd75RKFjBnOyGvOo0QN3pALJ5L1Ug68vfVsLqa7OWPypnvNhRYrmWvdDPKoMoJqhpN5UJPX2M/Q1bgZlwxZeSGHlDFphJNXOoMDhH6uNFjbgwzLNfe0p8bXBmYUrsz0b9NsVIv2WqnSWE5/cf9+DmCbEMLo1lb8pvzFC6ZU31YME67X5To+BcdtE330WE+C6JFUAH9yv9s8YfYRMQwBNC9vvfx5A=',
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

        methods: {

        }
    }
</script>
