import { withPwa } from '@vite-pwa/vitepress';
import { defineConfig } from 'vitepress';
import sidebar from './sidebar.json';

const isProd = process.env.NODE_ENV === 'production';
const repo = 'js-from-engine-to-pixel';
export const base = isProd ? `/${repo}/` : '/';

export default withPwa(
  defineConfig({
    title: 'JS: From Engine to Pixel',
    description:
      'Hiểu JavaScript từ engine internals đến rendering pipeline và system design — không học syntax, học cơ chế.',
    lang: 'vi-VN',
    base: base,
    head: [
      ['link', { rel: 'icon', type: 'image/png', href: `${base}logo.png` }],
      ['meta', { name: 'theme-color', content: '#F0DB4F' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:locale', content: 'vi_VN' }],
      [
        'meta',
        { property: 'og:title', content: 'JavaScript: From Engine to Pixel' },
      ],
      [
        'meta',
        {
          property: 'og:description',
          content:
            'Hiểu JavaScript từ engine internals đến rendering pipeline và system design — không học syntax, học cơ chế.',
        },
      ],
      ['meta', { property: 'og:image', content: `${base}og-image.png` }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:image', content: `${base}og-image.png` }],
      [
        'meta',
        {
          property: 'og:url',
          content: 'https://tuanlee-tech.github.io/js-from-engine-to-pixel',
        },
      ],
    ],

    themeConfig: {
      nav: [
        { text: 'Trang chủ', link: '/' },
        {
          text: 'Nền tảng',
          items: [
            { text: 'Phase 1 — JS Engine & Runtime', link: '/phase-1/' },
            { text: 'Phase 2 — Core Language', link: '/phase-2/' },
            { text: 'Phase 3 — Browser Internals', link: '/phase-3/' },
          ],
        },
        {
          text: 'Chuyên sâu',
          items: [
            { text: 'Phase 4 — Performance', link: '/phase-4/' },
            { text: 'Phase 5 — Browser APIs', link: '/phase-5/' },
            { text: 'Phase 6 — Security', link: '/phase-6/' },
            { text: 'Phase 7 — Accessibility', link: '/phase-7/' },
            { text: 'Phase 8 — HTML Deep Dive', link: '/phase-8/' },
          ],
        },
        {
          text: 'Kiến trúc',
          items: [
            { text: 'Phase 9 — Node.js & Fullstack', link: '/phase-9/' },
            { text: 'Phase 10 — Design & Architecture', link: '/phase-10/' },
            { text: 'Phase 11 — Tooling & DevEx', link: '/phase-11/' },
            { text: 'Phase 12 — Soft Skills', link: '/phase-12/' },
          ],
        },
        { text: 'Roadmap', link: '/roadmap' },
      ],

      sidebar,

      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/tuanlee-tech/js-from-engine-to-pixel',
        },
      ],

      outline: {
        label: 'Mục lục',
        level: [2, 3],
      },

      docFooter: {
        prev: 'Bài trước',
        next: 'Bài tiếp theo',
      },

      lastUpdated: {
        text: 'Cập nhật lần cuối',
      },

      search: {
        provider: 'local',
        options: {
          translations: {
            button: {
              buttonText: 'Tìm kiếm',
              buttonAriaLabel: 'Tìm kiếm',
            },
            modal: {
              noResultsText: 'Không tìm thấy kết quả',
              resetButtonTitle: 'Xóa tìm kiếm',
              footer: {
                selectText: 'chọn',
                navigateText: 'di chuyển',
                closeText: 'đóng',
              },
            },
          },
        },
      },

      returnToTopLabel: 'Về đầu trang',
      sidebarMenuLabel: 'Menu',
      darkModeSwitchLabel: 'Giao diện',
    },

    cleanUrls: true,
    lastUpdated: true,

    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return (
              tag.toLowerCase().indexOf('-') !== -1 ||
              [
                'script',
                'style',
                'input',
                'img',
                'object',
                'svg',
                'a',
                'path',
              ].includes(tag.toLowerCase())
            );
          },
        },
      },
    },

    vite: {
      build: {
        chunkSizeWarningLimit: 2000,
      },
    },

    pwa: {
      registerType: 'autoUpdate',
      includeAssets: ['logo.png'],
      manifest: {
        name: 'JS: From Engine to Pixel',
        short_name: 'JS Engine→Pixel',
        description:
          'Hiểu JavaScript từ engine internals đến rendering pipeline và system design.',
        theme_color: '#F0DB4F',
        background_color: '#1a1a2e',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
        maximumFileSizeToCacheInBytes: 5000000, // 5MB limit for search index
      },
    },
  }),
);
