import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import inject from "@rollup/plugin-inject";

export default defineConfig({
    plugins: [
        inject({
            $: "jquery",
        }),
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.js",
                // 'public/backend/assets/js/app.js',
                // 'public/backend/assets/css/app.css',
                // 'public/backend/assets/js/pages/apexcharts.init.js',
                // 'public/backend/assets/js/pages/calendar.init.js',
                // 'public/backend/assets/js/pages/chartjs.init.js',
                // 'public/backend/assets/js/pages/coming-soon.init.js',
                // 'public/backend/assets/js/pages/dashboard.init.js',
                // 'public/backend/assets/js/pages/datatables.init.js',
                // 'public/backend/assets/js/pages/ecommerce-add-product.init.js',
                // 'public/backend/assets/js/pages/ecommerce-cart.init.js',
                // 'public/backend/assets/js/pages/ecommerce-checkout.init.js',
                // 'public/backend/assets/js/pages/ecommerce-customer-datatables.init.js',
                // 'public/backend/assets/js/pages/ecommerce-order-datatables.init.js',
                // 'public/backend/assets/js/pages/flot.init.js',
                // 'public/backend/assets/js/pages/fontawesome.init.js',
                // 'public/backend/assets/js/pages/form-advanced.init.js',
                // 'public/backend/assets/js/pages/form-editor.init.js',
                // 'public/backend/assets/js/pages/form-element.init.js',
                // 'public/backend/assets/js/pages/form-mask.init.js',
                // 'public/backend/assets/js/pages/form-validation.init.js',
                // 'public/backend/assets/js/pages/form-wizard.init.js',
                // 'public/backend/assets/js/pages/form-xeditable.init.js',
                // 'public/backend/assets/js/pages/gmaps.init.js',
                // 'public/backend/assets/js/pages/jquery-knob.init.js',
                // 'public/backend/assets/js/pages/kanban.init.js',
                // 'public/backend/assets/js/pages/lightbox.init.js',
                // 'public/backend/assets/js/pages/materialdesign.init.js',
                // 'public/backend/assets/js/pages/product-filter-range.init.js',
                // 'public/backend/assets/js/pages/range-sliders.init.js',
                // 'public/backend/assets/js/pages/rating-init.js',
                // 'public/backend/assets/js/pages/remix-icons-list.js',
                // 'public/backend/assets/js/pages/roundslider.init.js',
                // 'public/backend/assets/js/pages/session-timeout.init.js',
                // 'public/backend/assets/js/pages/sparklines.init.js',
                // 'public/backend/assets/js/pages/sweet-alerts.init.js',
                // 'public/backend/assets/js/pages/table-editable.init.js',
                // 'public/backend/assets/js/pages/table-responsive.init.js',
                // 'public/backend/assets/js/pages/toastr.init.js',
                // 'public/backend/assets/js/pages/vector-maps.init.js'
            ],
            refresh: true,
        }),
    ],
    server: {
        hmr: {
            host: "127.0.0.1",
        },
    },
});
