import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'public/backend/assets/js/app.js',
                'public/backend/assets/css/app.css',
                // 'public/backend/assets/js/pages/dashboard.init.js',
                // 'public/backend/assets/js/pages/apexcharts.init.js',
            ],
            refresh: true,
        }),
    ],
    server: {
        hmr: {
            host: 'localhost'
        }
    }
});
