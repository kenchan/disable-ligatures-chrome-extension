import '../assets/disable-ligatures.css';

export default defineContentScript({
  matches: ['http://*/*', 'https://*/*'],
  main() {
    // CSSが自動的に適用されます
  },
});
