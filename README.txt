EXCEL KEYWORD SEARCH — PRIVACY-HARDENED iPHONE/iPAD PWA

PRIVACY DESIGN
- Selected .xlsx/.xlsm files are read in memory locally by JavaScript. No spreadsheet uploads or backend.
- Search terms and results are not stored by this app or sent to a server.
- No external scripts, trackers, analytics, fonts, or API connections are included.
- Content Security Policy restricts scripts, styles, workers, connections and images to this app's own origin.
- Service worker caches only app files for offline operation, never spreadsheet contents.
- Avoid uploading any sensitive Excel files to GitHub. The app code itself may be public.

LIMITS / THREAT MODEL
- The app must initially download its code from its hosting website over HTTPS.
- Same-origin network requests for app assets are allowed; this is necessary for first load and updates.
- A compromised host or malicious future code update could change behavior. CSP cannot prevent a same-origin compromise.
- Browser/iOS security, extensions, device backups, and files stored in cloud providers are outside the app's control.
- Not independently security-audited. For regulated or highly confidential files, obtain employer/security approval first.
- For strongest assurance, consider a native app with reviewed source code and managed distribution.

SETUP
1. On Windows, extract this ZIP.
2. Create a PUBLIC GitHub repository with only these app files (never spreadsheets).
3. Upload contents of the extracted folder to the repository ROOT.
4. In repository Settings > Pages, deploy main branch /(root).
5. On iPhone/iPad open the HTTPS Pages URL in Safari.
6. Add to Home Screen from Safari's Share menu; launch once online to cache files.
7. Test airplane mode: reopen app, choose files from Files, search.
8. On iOS, selecting multiple files works more reliably than selecting an entire folder.

EXCEL LIMITATIONS
- Supports .xlsx and .xlsm cell data (does not execute macros).
- Formula cells show cached results if available, not recalculated formulas.
- Date-formatted values may show Excel serial numbers.
- Large, encrypted, or malformed workbooks may fail or consume significant memory.
