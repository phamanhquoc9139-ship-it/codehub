const fs = require('fs');
const path = require('path');

const themesData = JSON.parse(fs.readFileSync('tiengduc6_32lessons_data.json', 'utf8'));

// Import SVG generator from existing build script or define them here
function generateSvgForTheme(themeId) {
  switch (themeId) {
    case 0: // Start - School
      return `
      <svg viewBox="0 0 700 200" class="w-full h-auto rounded-xl shadow-inner bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad0" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FBBF24"/><stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
          <linearGradient id="redGrad0" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#EF4444"/><stop offset="100%" stop-color="#B91C1C"/>
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="#EF4444" opacity="0.08"/>
        <circle cx="600" cy="100" r="90" fill="#FBBF24" opacity="0.08"/>
        <g transform="translate(240, 20)">
          <rect x="30" y="45" width="160" height="100" rx="8" fill="#1E293B" stroke="#475569" stroke-width="2"/>
          <polygon points="110,10 20,45 200,45" fill="url(#redGrad0)"/>
          <circle cx="110" cy="30" r="8" fill="#FEF3C7"/>
          <rect x="92" y="95" width="36" height="50" rx="4" fill="url(#goldGrad0)"/>
          <rect x="45" y="58" width="24" height="24" rx="4" fill="#60A5FA" opacity="0.85"/>
          <rect x="151" y="58" width="24" height="24" rx="4" fill="#60A5FA" opacity="0.85"/>
          <text x="110" y="75" text-anchor="middle" fill="#FFFFFF" font-size="11" font-weight="bold">SCHULE</text>
        </g>
        <g transform="translate(40, 35)">
          <rect width="170" height="60" rx="10" fill="#1E293B" stroke="#FBBF24" stroke-width="1.5"/>
          <text x="85" y="24" text-anchor="middle" fill="#FBBF24" font-size="11" font-weight="bold">Bài 1: Begrüßung</text>
          <text x="85" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">Hallo! / Ich heiße...</text>
        </g>
        <g transform="translate(40, 105)">
          <rect width="170" height="60" rx="10" fill="#1E293B" stroke="#EF4444" stroke-width="1.5"/>
          <text x="85" y="24" text-anchor="middle" fill="#F87171" font-size="11" font-weight="bold">Aussprache /ə/</text>
          <text x="85" y="44" text-anchor="middle" fill="#CBD5E1" font-size="10">unbetontes e (Pause)</text>
        </g>
        <g transform="translate(490, 35)">
          <rect width="170" height="60" rx="10" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
          <text x="85" y="24" text-anchor="middle" fill="#38BDF8" font-size="11" font-weight="bold">Bài 2: Schulräume</text>
          <text x="85" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">das Klassenzimmer</text>
        </g>
        <g transform="translate(490, 105)">
          <rect width="170" height="60" rx="10" fill="#1E293B" stroke="#34D399" stroke-width="1.5"/>
          <text x="85" y="24" text-anchor="middle" fill="#34D399" font-size="11" font-weight="bold">Schulhof & Pause</text>
          <text x="85" y="44" text-anchor="middle" fill="#CBD5E1" font-size="10">Sân trường & Giải lao</text>
        </g>
      </svg>`;

    case 1: // Einheit 1: Hobbys
      return `
      <svg viewBox="0 0 700 200" class="w-full h-auto rounded-xl shadow-inner bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900" xmlns="http://www.w3.org/2000/svg">
        <circle cx="350" cy="100" r="50" fill="#1E293B" stroke="#38BDF8" stroke-width="3"/>
        <text x="350" y="95" text-anchor="middle" fill="#38BDF8" font-size="13" font-weight="bold">CHỦ ĐỀ 1</text>
        <text x="350" y="115" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="bold">MEINE HOBBYS</text>

        <line x1="300" y1="100" x2="210" y2="60" stroke="#FBBF24" stroke-width="2" stroke-dasharray="4"/>
        <g transform="translate(30, 25)">
          <rect width="180" height="65" rx="10" fill="#1E293B" stroke="#FBBF24" stroke-width="1.5"/>
          <text x="90" y="24" text-anchor="middle" fill="#FBBF24" font-size="11" font-weight="bold">Bài 3: Freizeit & Clubs</text>
          <text x="90" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">Schachclub, basteln</text>
        </g>

        <line x1="300" y1="100" x2="210" y2="135" stroke="#34D399" stroke-width="2" stroke-dasharray="4"/>
        <g transform="translate(30, 110)">
          <rect width="180" height="65" rx="10" fill="#1E293B" stroke="#34D399" stroke-width="1.5"/>
          <text x="90" y="24" text-anchor="middle" fill="#34D399" font-size="11" font-weight="bold">Bài 4: Feste Präpositionen</text>
          <text x="90" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">warten auf, Interesse an</text>
        </g>

        <line x1="400" y1="100" x2="490" y2="100" stroke="#F43F5E" stroke-width="2" stroke-dasharray="4"/>
        <g transform="translate(490, 65)">
          <rect width="180" height="70" rx="10" fill="#1E293B" stroke="#F43F5E" stroke-width="1.5"/>
          <text x="90" y="24" text-anchor="middle" fill="#F43F5E" font-size="11" font-weight="bold">Bài 5: Lieblingsspiele</text>
          <text x="90" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">Seilspringen, mitspielen</text>
          <text x="90" y="58" text-anchor="middle" fill="#94A3B8" font-size="9">Giao tiếp sở thích</text>
        </g>
      </svg>`;

    case 2: // Einheit 2: Familie
      return `
      <svg viewBox="0 0 700 200" class="w-full h-auto rounded-xl shadow-inner bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900" xmlns="http://www.w3.org/2000/svg">
        <circle cx="350" cy="100" r="48" fill="#1E293B" stroke="#FBBF24" stroke-width="2"/>
        <text x="350" y="95" text-anchor="middle" fill="#FBBF24" font-size="12" font-weight="bold">CHỦ ĐỀ 2</text>
        <text x="350" y="115" text-anchor="middle" fill="#FFFFFF" font-size="12" font-weight="bold">FAMILIE</text>

        <g transform="translate(40, 45)">
          <rect width="190" height="110" rx="10" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
          <text x="95" y="26" text-anchor="middle" fill="#38BDF8" font-size="11" font-weight="bold">Bài 6: Stammbaum</text>
          <line x1="15" y1="36" x2="175" y2="36" stroke="#334155"/>
          <text x="20" y="58" fill="#E2E8F0" font-size="10">• Großeltern (Opa/Oma)</text>
          <text x="20" y="78" fill="#E2E8F0" font-size="10">• Rentner &amp; Schwager</text>
          <text x="20" y="98" fill="#94A3B8" font-size="9">Đại từ sở hữu mein/dein</text>
        </g>

        <g transform="translate(470, 20)">
          <rect width="190" height="70" rx="10" fill="#1E293B" stroke="#34D399" stroke-width="1.5"/>
          <text x="95" y="24" text-anchor="middle" fill="#34D399" font-size="11" font-weight="bold">Bài 7: Indefinitpronomen</text>
          <text x="95" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">einen/keinen (Akk)</text>
          <text x="95" y="58" text-anchor="middle" fill="#94A3B8" font-size="9">eine/keine, eins/keins</text>
        </g>

        <g transform="translate(470, 105)">
          <rect width="190" height="75" rx="10" fill="#1E293B" stroke="#F43F5E" stroke-width="1.5"/>
          <text x="95" y="24" text-anchor="middle" fill="#F43F5E" font-size="11" font-weight="bold">Bài 8: Kausalsätze "weil"</text>
          <text x="95" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">Verb xuống cuối câu</text>
          <text x="95" y="60" text-anchor="middle" fill="#94A3B8" font-size="9">Zimmer aufräumen</text>
        </g>
      </svg>`;

    case 3: // Einheit 3: Sprachen
      return `
      <svg viewBox="0 0 700 200" class="w-full h-auto rounded-xl shadow-inner bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900" xmlns="http://www.w3.org/2000/svg">
        <circle cx="350" cy="100" r="48" fill="#1E293B" stroke="#60A5FA" stroke-width="2"/>
        <text x="350" y="95" text-anchor="middle" fill="#60A5FA" font-size="12" font-weight="bold">CHỦ ĐỀ 3</text>
        <text x="350" y="115" text-anchor="middle" fill="#FBBF24" font-size="11">SPRACHEN</text>

        <g transform="translate(40, 25)">
          <rect width="190" height="150" rx="10" fill="#1E293B" stroke="#FBBF24" stroke-width="1.5"/>
          <text x="95" y="25" text-anchor="middle" fill="#FBBF24" font-size="11" font-weight="bold">Bài 9: DACH-Länder</text>
          <line x1="15" y1="35" x2="175" y2="35" stroke="#334155"/>
          <text x="20" y="58" fill="#E2E8F0" font-size="10">🇩🇪 Deutschland</text>
          <text x="20" y="80" fill="#E2E8F0" font-size="10">🇦🇹 Österreich</text>
          <text x="20" y="102" fill="#E2E8F0" font-size="10">🇨🇭 die Schweiz</text>
          <text x="20" y="125" fill="#94A3B8" font-size="9">die Muttersprache</text>
        </g>

        <g transform="translate(470, 20)">
          <rect width="190" height="70" rx="10" fill="#1E293B" stroke="#34D399" stroke-width="1.5"/>
          <text x="95" y="24" text-anchor="middle" fill="#34D399" font-size="11" font-weight="bold">Bài 10: Verb "sprechen"</text>
          <text x="95" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">du sprichst, er spricht</text>
          <text x="95" y="58" text-anchor="middle" fill="#94A3B8" font-size="9">Pluralformen của danh từ</text>
        </g>

        <g transform="translate(470, 105)">
          <rect width="190" height="75" rx="10" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
          <text x="95" y="24" text-anchor="middle" fill="#38BDF8" font-size="11" font-weight="bold">Bài 11: denn - weil - deshalb</text>
          <text x="95" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">Trật tự từ trong câu</text>
          <text x="95" y="60" text-anchor="middle" fill="#94A3B8" font-size="9">deshalb + Verb + Subjekt</text>
        </g>
      </svg>`;

    case 4: // Einheit 4: Zuhause
      return `
      <svg viewBox="0 0 700 200" class="w-full h-auto rounded-xl shadow-inner bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="25" width="620" height="150" rx="12" fill="#1E293B" stroke="#475569" stroke-width="2"/>
        <g transform="translate(60, 40)">
          <rect width="170" height="120" rx="8" fill="#0F172A" stroke="#38BDF8" stroke-width="1.5"/>
          <text x="85" y="25" text-anchor="middle" fill="#38BDF8" font-size="11" font-weight="bold">Bài 12: Wohnformen</text>
          <text x="85" y="50" text-anchor="middle" fill="#E2E8F0" font-size="10">das Reihenhaus</text>
          <text x="85" y="72" text-anchor="middle" fill="#E2E8F0" font-size="10">das Hochhaus</text>
          <text x="85" y="94" text-anchor="middle" fill="#94A3B8" font-size="9">das Bauernhaus</text>
        </g>
        <g transform="translate(265, 40)">
          <rect width="170" height="120" rx="8" fill="#0F172A" stroke="#FBBF24" stroke-width="1.5"/>
          <text x="85" y="25" text-anchor="middle" fill="#FBBF24" font-size="11" font-weight="bold">Bài 13: Präpositionen</text>
          <text x="85" y="50" text-anchor="middle" fill="#E2E8F0" font-size="10">Wo? + Dativ</text>
          <text x="85" y="72" text-anchor="middle" fill="#E2E8F0" font-size="10">auf dem Schreibtisch</text>
          <text x="85" y="94" text-anchor="middle" fill="#94A3B8" font-size="9">in, an, auf, unter, vor...</text>
        </g>
        <g transform="translate(470, 40)">
          <rect width="170" height="120" rx="8" fill="#0F172A" stroke="#34D399" stroke-width="1.5"/>
          <text x="85" y="25" text-anchor="middle" fill="#34D399" font-size="11" font-weight="bold">Bài 14: Zustandsverben</text>
          <text x="85" y="50" text-anchor="middle" fill="#E2E8F0" font-size="10">stehen, liegen, sitzen</text>
          <text x="85" y="72" text-anchor="middle" fill="#E2E8F0" font-size="10">hängen, Haustiere</text>
          <text x="85" y="94" text-anchor="middle" fill="#94A3B8" font-size="9">die Katze sitzt...</text>
        </g>
      </svg>`;

    case 5: // Einheit 5: Geburtstag
      return `
      <svg viewBox="0 0 700 200" class="w-full h-auto rounded-xl shadow-inner bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900" xmlns="http://www.w3.org/2000/svg">
        <circle cx="350" cy="100" r="48" fill="#1E293B" stroke="#FBBF24" stroke-width="2"/>
        <text x="350" y="90" text-anchor="middle" fill="#FBBF24" font-size="18">🎂</text>
        <text x="350" y="112" text-anchor="middle" fill="#FFFFFF" font-size="11" font-weight="bold">GEBURTSTAG</text>
        <g transform="translate(40, 25)">
          <rect width="190" height="150" rx="10" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
          <text x="95" y="25" text-anchor="middle" fill="#38BDF8" font-size="11" font-weight="bold">Bài 15: Ordinalzahlen</text>
          <line x1="15" y1="35" x2="175" y2="35" stroke="#334155"/>
          <text x="20" y="58" fill="#E2E8F0" font-size="10">• am 1. (ersten) Mai</text>
          <text x="20" y="80" fill="#E2E8F0" font-size="10">• am 3. (dritten)...</text>
          <text x="20" y="102" fill="#E2E8F0" font-size="10">• am 20. (zwanzigsten)</text>
          <text x="20" y="125" fill="#94A3B8" font-size="9">Cách nói ngày tháng</text>
        </g>
        <g transform="translate(470, 20)">
          <rect width="190" height="70" rx="10" fill="#1E293B" stroke="#F43F5E" stroke-width="1.5"/>
          <text x="95" y="24" text-anchor="middle" fill="#F43F5E" font-size="11" font-weight="bold">Bài 16: Verben + Dativ</text>
          <text x="95" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">gratulieren, danken</text>
          <text x="95" y="58" text-anchor="middle" fill="#94A3B8" font-size="9">gefallen, helfen</text>
        </g>
        <g transform="translate(470, 105)">
          <rect width="190" height="75" rx="10" fill="#1E293B" stroke="#34D399" stroke-width="1.5"/>
          <text x="95" y="24" text-anchor="middle" fill="#34D399" font-size="11" font-weight="bold">Bài 17: Glückwünsche</text>
          <text x="95" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">Herzlichen Glückwunsch!</text>
          <text x="95" y="60" text-anchor="middle" fill="#94A3B8" font-size="9">die Geburtstagstorte</text>
        </g>
      </svg>`;

    case 6: // Einheit 6: Restaurant
      return `
      <svg viewBox="0 0 700 200" class="w-full h-auto rounded-xl shadow-inner bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="350" cy="100" rx="55" ry="35" fill="#1E293B" stroke="#FBBF24" stroke-width="2"/>
        <text x="350" y="96" text-anchor="middle" fill="#FBBF24" font-size="11" font-weight="bold">IM RESTAURANT</text>
        <text x="350" y="112" text-anchor="middle" fill="#94A3B8" font-size="9">Guten Appetit!</text>

        <g transform="translate(40, 25)">
          <rect width="190" height="150" rx="10" fill="#1E293B" stroke="#34D399" stroke-width="1.5"/>
          <text x="95" y="25" text-anchor="middle" fill="#34D399" font-size="11" font-weight="bold">Bài 18: Speisekarte</text>
          <line x1="15" y1="35" x2="175" y2="35" stroke="#334155"/>
          <text x="20" y="58" fill="#E2E8F0" font-size="10">• die Vorspeise (khai vị)</text>
          <text x="20" y="80" fill="#E2E8F0" font-size="10">• die Hauptspeise (chính)</text>
          <text x="20" y="102" fill="#E2E8F0" font-size="10">• die Nachspeise (tráng miệng)</text>
          <text x="20" y="125" fill="#94A3B8" font-size="9">der Bratreis</text>
        </g>

        <g transform="translate(470, 20)">
          <rect width="190" height="70" rx="10" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
          <text x="95" y="24" text-anchor="middle" fill="#38BDF8" font-size="11" font-weight="bold">Bài 19: Pronomen &amp; Vị</text>
          <text x="95" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">er / sie / es (Nominativ)</text>
          <text x="95" y="58" text-anchor="middle" fill="#94A3B8" font-size="9">süß, salzig, lecker</text>
        </g>

        <g transform="translate(470, 105)">
          <rect width="190" height="75" rx="10" fill="#1E293B" stroke="#F43F5E" stroke-width="1.5"/>
          <text x="95" y="24" text-anchor="middle" fill="#F43F5E" font-size="11" font-weight="bold">Bài 20: Bestellen &amp; Bezahlen</text>
          <text x="95" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">Die Rechnung, bitte!</text>
          <text x="95" y="60" text-anchor="middle" fill="#94A3B8" font-size="9">das Rezept &amp; Zubereitung</text>
        </g>
      </svg>`;

    case 7: // Einheit 7: Sendung
      return `
      <svg viewBox="0 0 700 200" class="w-full h-auto rounded-xl shadow-inner bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900" xmlns="http://www.w3.org/2000/svg">
        <rect x="280" y="45" width="140" height="95" rx="10" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
        <text x="350" y="90" text-anchor="middle" fill="#38BDF8" font-size="11" font-weight="bold">FERNSEHEN</text>
        <text x="350" y="108" text-anchor="middle" fill="#FBBF24" font-size="9">Lieblingssendung</text>

        <g transform="translate(40, 25)">
          <rect width="190" height="150" rx="10" fill="#1E293B" stroke="#A78BFA" stroke-width="1.5"/>
          <text x="95" y="25" text-anchor="middle" fill="#A78BFA" font-size="11" font-weight="bold">Bài 21: Fernsehgenres</text>
          <line x1="15" y1="35" x2="175" y2="35" stroke="#334155"/>
          <text x="20" y="58" fill="#E2E8F0" font-size="10">• Zeichentrickfilm</text>
          <text x="20" y="80" fill="#E2E8F0" font-size="10">• Sportsendung</text>
          <text x="20" y="102" fill="#E2E8F0" font-size="10">• Kindersendung</text>
          <text x="20" y="125" fill="#94A3B8" font-size="9">er sieht ... fern</text>
        </g>

        <g transform="translate(470, 20)">
          <rect width="190" height="70" rx="10" fill="#1E293B" stroke="#34D399" stroke-width="1.5"/>
          <text x="95" y="24" text-anchor="middle" fill="#34D399" font-size="11" font-weight="bold">Bài 22: Komparativ</text>
          <text x="95" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">freundlicher als</text>
          <text x="95" y="58" text-anchor="middle" fill="#94A3B8" font-size="9">am schwierigsten</text>
        </g>

        <g transform="translate(470, 105)">
          <rect width="190" height="75" rx="10" fill="#1E293B" stroke="#F43F5E" stroke-width="1.5"/>
          <text x="95" y="24" text-anchor="middle" fill="#F43F5E" font-size="11" font-weight="bold">Bài 23: Unregelmäßig</text>
          <text x="95" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">gut $\rightarrow$ besser $\rightarrow$ am besten</text>
          <text x="95" y="60" text-anchor="middle" fill="#94A3B8" font-size="9">gern $\rightarrow$ lieber $\rightarrow$ am liebsten</text>
        </g>
      </svg>`;

    case 8: // Einheit 8: Arzt
      return `
      <svg viewBox="0 0 700 200" class="w-full h-auto rounded-xl shadow-inner bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(330, 60)">
          <rect x="15" y="0" width="16" height="50" rx="3" fill="#EF4444"/>
          <rect x="-2" y="17" width="50" height="16" rx="3" fill="#EF4444"/>
          <text x="23" y="70" text-anchor="middle" fill="#FFFFFF" font-size="10" font-weight="bold">BEIM ARZT</text>
        </g>

        <g transform="translate(40, 25)">
          <rect width="190" height="150" rx="10" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
          <text x="95" y="25" text-anchor="middle" fill="#38BDF8" font-size="11" font-weight="bold">Bài 24: Körperteile</text>
          <line x1="15" y1="35" x2="175" y2="35" stroke="#334155"/>
          <text x="20" y="58" fill="#E2E8F0" font-size="10">• die Halsschmerzen</text>
          <text x="20" y="80" fill="#E2E8F0" font-size="10">• das Fieber</text>
          <text x="20" y="102" fill="#E2E8F0" font-size="10">• der Hustensaft</text>
          <text x="20" y="125" fill="#94A3B8" font-size="9">die Hausapotheke</text>
        </g>

        <g transform="translate(470, 20)">
          <rect width="190" height="70" rx="10" fill="#1E293B" stroke="#FBBF24" stroke-width="1.5"/>
          <text x="95" y="24" text-anchor="middle" fill="#FBBF24" font-size="11" font-weight="bold">Bài 25: Der Imperativ</text>
          <text x="95" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">Trink nicht kaltes Wasser!</text>
          <text x="95" y="58" text-anchor="middle" fill="#94A3B8" font-size="9">Bleib im Bett!</text>
        </g>

        <g transform="translate(470, 105)">
          <rect width="190" height="75" rx="10" fill="#1E293B" stroke="#34D399" stroke-width="1.5"/>
          <text x="95" y="24" text-anchor="middle" fill="#34D399" font-size="11" font-weight="bold">Bài 26: sollen &amp; Ratschläge</text>
          <text x="95" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">Du sollst Sport treiben.</text>
          <text x="95" y="60" text-anchor="middle" fill="#94A3B8" font-size="9">Gute Besserung!</text>
        </g>
      </svg>`;

    case 9: // Einheit 9: Jahreszeiten
      return `
      <svg viewBox="0 0 700 200" class="w-full h-auto rounded-xl shadow-inner bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="25" width="620" height="150" rx="12" fill="#1E293B" stroke="#475569" stroke-width="2"/>
        <g transform="translate(60, 40)">
          <rect width="170" height="120" rx="8" fill="#0F172A" stroke="#34D399" stroke-width="1.5"/>
          <text x="85" y="25" text-anchor="middle" fill="#34D399" font-size="11" font-weight="bold">Bài 27: 4 Jahreszeiten</text>
          <text x="85" y="50" text-anchor="middle" fill="#E2E8F0" font-size="10">Frühling, Sommer</text>
          <text x="85" y="72" text-anchor="middle" fill="#E2E8F0" font-size="10">Herbst, Winter</text>
          <text x="85" y="94" text-anchor="middle" fill="#94A3B8" font-size="9">sonnig, regnerisch</text>
        </g>
        <g transform="translate(265, 40)">
          <rect width="170" height="120" rx="8" fill="#0F172A" stroke="#FBBF24" stroke-width="1.5"/>
          <text x="85" y="25" text-anchor="middle" fill="#FBBF24" font-size="11" font-weight="bold">Bài 28: Präpositionen</text>
          <text x="85" y="50" text-anchor="middle" fill="#E2E8F0" font-size="10">am, um, vor, nach</text>
          <text x="85" y="72" text-anchor="middle" fill="#E2E8F0" font-size="10">für, von... bis...</text>
          <text x="85" y="94" text-anchor="middle" fill="#94A3B8" font-size="9">im Sommer</text>
        </g>
        <g transform="translate(470, 40)">
          <rect width="170" height="120" rx="8" fill="#0F172A" stroke="#38BDF8" stroke-width="1.5"/>
          <text x="85" y="25" text-anchor="middle" fill="#38BDF8" font-size="11" font-weight="bold">Bài 29: Modalverben</text>
          <text x="85" y="50" text-anchor="middle" fill="#E2E8F0" font-size="10">müssen vs dürfen</text>
          <text x="85" y="72" text-anchor="middle" fill="#E2E8F0" font-size="10">schwimmen gehen</text>
          <text x="85" y="94" text-anchor="middle" fill="#94A3B8" font-size="9">der Ausflug</text>
        </g>
      </svg>`;

    case 10: // Einheit 10: Museum
      return `
      <svg viewBox="0 0 700 200" class="w-full h-auto rounded-xl shadow-inner bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(290, 25)">
          <polygon points="60,10 0,35 120,35" fill="#FBBF24"/>
          <rect x="5" y="35" width="110" height="6" fill="#D97706"/>
          <rect x="15" y="41" width="12" height="65" fill="#E2E8F0"/>
          <rect x="45" y="41" width="12" height="65" fill="#E2E8F0"/>
          <rect x="75" y="41" width="12" height="65" fill="#E2E8F0"/>
          <rect x="95" y="41" width="12" height="65" fill="#E2E8F0"/>
          <rect x="0" y="106" width="120" height="10" fill="#D97706"/>
          <text x="60" y="28" text-anchor="middle" fill="#0F172A" font-size="8" font-weight="bold">MUSEUM</text>
        </g>

        <g transform="translate(40, 25)">
          <rect width="190" height="150" rx="10" fill="#1E293B" stroke="#34D399" stroke-width="1.5"/>
          <text x="95" y="25" text-anchor="middle" fill="#34D399" font-size="11" font-weight="bold">Bài 30: Das Museum</text>
          <line x1="15" y1="35" x2="175" y2="35" stroke="#334155"/>
          <text x="20" y="58" fill="#E2E8F0" font-size="10">• die Kasse, das Ticket</text>
          <text x="20" y="80" fill="#E2E8F0" font-size="10">• kostenlos (miễn phí)</text>
          <text x="20" y="102" fill="#E2E8F0" font-size="10">• Eingang &amp; Ausgang</text>
          <text x="20" y="125" fill="#94A3B8" font-size="9">das Erdgeschoss</text>
        </g>

        <g transform="translate(470, 20)">
          <rect width="190" height="70" rx="10" fill="#1E293B" stroke="#F43F5E" stroke-width="1.5"/>
          <text x="95" y="24" text-anchor="middle" fill="#F43F5E" font-size="11" font-weight="bold">Bài 31: Präteritum</text>
          <text x="95" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">sein $\rightarrow$ war</text>
          <text x="95" y="58" text-anchor="middle" fill="#94A3B8" font-size="9">haben $\rightarrow$ hatte</text>
        </g>

        <g transform="translate(470, 105)">
          <rect width="190" height="75" rx="10" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
          <text x="95" y="24" text-anchor="middle" fill="#38BDF8" font-size="11" font-weight="bold">Bài 32: Indirekte Fragen</text>
          <text x="95" y="44" text-anchor="middle" fill="#E2E8F0" font-size="10">W-Frage &amp; ob + Verb cuối</text>
          <text x="95" y="60" text-anchor="middle" fill="#94A3B8" font-size="9">die Ausstellung</text>
        </g>
      </svg>`;

    default:
      return '';
  }
}

// Total lessons count
const totalLessons = themesData.reduce((acc, t) => acc + t.lessons.length, 0);

let html = `<!DOCTYPE html>
<html lang="de" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Tiếng Đức 6 (Deutsch 6: 10 Chủ Đề &amp; 32 Bài Học • Web Speech de-DE • Der Landessieger 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            gold: {
              50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047',
              400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207',
              800: '#854d0e', 900: '#713f12'
            },
            gray: { 750: '#262f3f', 850: '#151b28', 950: '#0a0d14' }
          }
        }
      }
    };
  </script>

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    body { font-family: 'Inter', sans-serif; }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #334155; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
  </style>
</head>
<body class="bg-slate-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen antialiased transition-colors duration-200">

  <!-- ==================== HEADER ==================== -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-900 via-red-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-flag text-lg text-amber-300"></i>
          </div>
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block leading-tight">CodeHub THCS • Ngoại Ngữ 2</span>
            <h1 class="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white leading-tight">TIẾNG ĐỨC 6 (Deutsch 6)</h1>
          </div>
        </a>
        <span class="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
          10 Chủ Đề • 32 Bài Học • de-DE
        </span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Nút Tra Cứu 4 Cách (Kasus) -->
        <button onclick="openKasusModal()" class="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/60 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-300 text-xs font-bold transition flex items-center gap-1.5 border border-amber-200 dark:border-amber-800">
          <i class="fa-solid fa-table-list text-amber-600"></i>
          <span class="hidden md:inline">Grammatik &amp;</span> 4 Kasus
        </button>

        <!-- Nút Modalverben -->
        <button onclick="openModalverbenModal()" class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 text-xs font-bold transition flex items-center gap-1.5 border border-rose-200 dark:border-rose-800">
          <i class="fa-solid fa-bolt text-rose-600"></i>
          <span class="hidden md:inline">Tập lệnh</span> Modalverben
        </button>

        <!-- Nút Trạng Nguyên Đức Ngữ (60:00) -->
        <button onclick="openExamModal()" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-slate-900 via-red-600 to-amber-500 hover:from-slate-800 hover:to-amber-400 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm shadow-amber-500/20">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Der Landessieger (60:00)</span>
        </button>

        <!-- Dark/Light Mode -->
        <button id="themeToggleBtn" class="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center transition" title="Đổi giao diện Sáng / Tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline"></i>
        </button>

        <!-- Back to Home -->
        <a href="../index.html" class="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center transition" title="Trang chủ CodeHub">
          <i class="fa-solid fa-house"></i>
        </a>
      </div>

    </div>
  </header>

  <!-- ==================== BODY WRAPPER ==================== -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="flex flex-col lg:flex-row gap-6">

      <!-- ==================== SIDEBAR ==================== -->
      <aside class="w-full lg:w-80 flex-shrink-0">
        <div class="sticky top-20 bg-white dark:bg-gray-850 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
          
          <!-- Search in page -->
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
            <input type="text" id="lessonSearchInput" placeholder="Tìm bài học (vd: Bài 5, Familie, Akkusativ...)"
              class="w-full pl-8 pr-3 py-2 rounded-xl text-xs bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500">
          </div>

          <!-- Progress Widget -->
          <div class="p-3 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50/50 dark:from-amber-950/40 dark:to-gray-800 border border-amber-100 dark:border-amber-900/40">
            <div class="flex items-center justify-between text-xs mb-1.5">
              <span class="font-bold text-amber-900 dark:text-amber-300">Tiến độ bài học</span>
              <span id="progress-percent" class="font-bold text-amber-600 dark:text-amber-400">0%</span>
            </div>
            <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div id="progress-bar" class="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full transition-all duration-300" style="width: 0%;"></div>
            </div>
            <div class="mt-2 text-[10px] text-gray-500 dark:text-gray-400 flex justify-between">
              <span>Đã làm <b id="answered-count">0</b>/${totalLessons} câu</span>
              <span>10 Chủ đề • ${totalLessons} Bài học</span>
            </div>
          </div>

          <!-- Speech Speed Controller -->
          <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-gauge-high text-amber-500"></i> Tốc độ đọc (de-DE):</span>
              <span id="speechRateLabel" class="text-amber-600 font-bold">0.85x</span>
            </div>
            <input type="range" id="speechRateRange" min="0.6" max="1.3" step="0.05" value="0.85"
              class="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-500">
            <div class="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>Chậm (0.6x)</span>
              <span>Chuẩn (0.85x)</span>
              <span>Nhanh (1.3x)</span>
            </div>
          </div>

          <!-- Theme Filter Chips -->
          <div class="space-y-1.5">
            <div class="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 px-1">
              Bộ lọc theo Chủ đề
            </div>
            <div class="flex flex-wrap gap-1 text-[10px] font-semibold">
              <button onclick="filterByTheme('all')" class="theme-filter-chip px-2 py-1 rounded-md bg-amber-500 text-white shadow-sm" data-theme="all">Tất cả (${totalLessons})</button>
`;

themesData.forEach(t => {
  html += `              <button onclick="filterByTheme('${t.themeId}')" class="theme-filter-chip px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-amber-100 transition" data-theme="${t.themeId}">${t.themeCode} (${t.lessons.length})</button>\n`;
});

html += `            </div>
          </div>

          <!-- 32 Lessons Navigation Links -->
          <div class="space-y-1">
            <div class="flex items-center justify-between text-[11px] font-bold text-gray-400 uppercase tracking-wider px-1 pt-2 border-t border-gray-100 dark:border-gray-800">
              <span>Mục lục 32 Bài Học</span>
              <span class="text-amber-600">Bài 1 – 32</span>
            </div>
            <div id="lessonLinksContainer" class="space-y-1 max-h-[380px] overflow-y-auto pr-1">
`;

themesData.forEach(t => {
  t.lessons.forEach(l => {
    html += `
              <a href="#lesson-${l.lessonNum}" class="sidebar-lesson-item block px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:text-amber-700 dark:hover:text-amber-300 transition group" data-theme="${t.themeId}" data-title="${l.titleDe.toLowerCase()} ${l.titleVn.toLowerCase()} bai ${l.lessonNum}">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-amber-600 mr-1.5">Bài ${l.lessonNum}:</span>
                  <span class="text-[10px] px-1.5 py-0.2 rounded bg-gray-100 dark:bg-gray-800 text-gray-400 font-semibold">${t.themeCode}</span>
                </div>
                <div class="truncate text-[11px] text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 mt-0.5">
                  ${l.titleDe}
                </div>
              </a>`;
  });
});

html += `
            </div>
          </div>
        </div>
      </aside>

      <!-- ==================== MAIN CONTENT ==================== -->
      <main class="flex-1 min-w-0 space-y-8">

        <!-- HERO BANNER -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-red-950 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
          <div class="relative z-10 space-y-4">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold text-amber-300">
              <i class="fa-solid fa-graduation-cap"></i> Khung Năng Lực Ngoại Ngữ 2 • CTGDPT 2018
            </div>
            <h2 class="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Cẩm Nang Tiếng Đức 6: 10 Chủ Đề &amp; 32 Bài Học Chi Tiết
            </h2>
            <p class="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
              Hệ thống hóa toàn diện theo <b>10 Chủ đề lớn</b> (Themen / Einheiten) và <b>32 Bài học cụ thể</b> từ Bài 1 đến Bài 32. Tích hợp từ vựng có mạo từ der/die/das, phân tích ngữ pháp chuyên sâu, câu mẫu song ngữ, công nghệ Web Speech API giọng đọc de-DE chuẩn quốc tế và ngân hàng trắc nghiệm tự chấm điểm.
            </p>
            <div class="flex flex-wrap items-center gap-3 pt-2 text-xs font-bold">
              <span class="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur border border-white/20 flex items-center gap-1.5">
                <i class="fa-solid fa-layer-group text-amber-400"></i> 10 Chủ Đề + Khởi Động
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur border border-white/20 flex items-center gap-1.5">
                <i class="fa-solid fa-book-open text-emerald-400"></i> Trọn Bộ 32 Bài Học
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur border border-white/20 flex items-center gap-1.5">
                <i class="fa-solid fa-diagram-project text-sky-400"></i> 11 Sơ Đồ Vector SVG
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur border border-white/20 flex items-center gap-1.5">
                <i class="fa-solid fa-circle-check text-rose-400"></i> 32 Câu Trắc Nghiệm Tự Chấm
              </span>
            </div>
          </div>
        </div>

        <!-- ==================== THEMES & LESSONS RENDER ==================== -->
`;

themesData.forEach(t => {
  // Collect all vocab and sentences in this theme for bulk audio
  let allThemeText = [];
  t.lessons.forEach(l => {
    l.vocab.forEach(v => allThemeText.push(`${v.word}. ${v.meaning}`));
    l.sentences.forEach(s => allThemeText.push(s.de));
  });
  const themeAudioText = allThemeText.join('. ').replace(/"/g, '&quot;').replace(/'/g, "\\'");
  const svgMarkup = generateSvgForTheme(t.themeId);

  html += `
        <!-- ==================== THEME ${t.themeId}: ${t.themeDe} ==================== -->
        <section id="theme-${t.themeId}" class="theme-block space-y-6" data-theme="${t.themeId}">
          
          <!-- Theme Header Card -->
          <div class="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 text-white shadow-lg border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-md text-xs font-black uppercase bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-sm">
                  ${t.themeCode}
                </span>
                <span class="text-xs font-semibold text-amber-300">Chủ đề chính</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-black text-white">
                ${t.themeDe}
              </h3>
              <p class="text-xs sm:text-sm text-slate-300 font-medium">
                ${t.themeVn} • Gồm ${t.lessons.length} bài học chi tiết
              </p>
            </div>

            <button onclick="playGerman('${themeAudioText}')" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-white text-xs font-bold shadow-sm shadow-amber-500/20 transition cursor-pointer w-fit">
              <i class="fa-solid fa-circle-play text-sm"></i>
              <span>Nghe toàn bộ Chủ đề ${t.themeCode}</span>
            </button>
          </div>

          <!-- Theme Mindmap SVG -->
          <div class="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-inner">
            ${svgMarkup}
          </div>

          <!-- Lessons inside this Theme -->
          <div class="space-y-6">
`;

  t.lessons.forEach(l => {
    // Lesson bulk audio
    const lessonAudioText = [...l.vocab.map(v => `${v.word}. ${v.meaning}`), ...l.sentences.map(s => s.de)].join('. ').replace(/"/g, '&quot;').replace(/'/g, "\\'");

    html += `
            <!-- Lesson ${l.lessonNum}: ${l.titleDe} -->
            <div id="lesson-${l.lessonNum}" class="lesson-card bg-white dark:bg-gray-850 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden scroll-mt-24 transition">
              
              <!-- Lesson Header -->
              <div class="p-5 border-b border-gray-100 dark:border-gray-800 bg-amber-50/30 dark:bg-gray-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-0.5 rounded-lg text-xs font-black bg-amber-500 text-white shadow-sm">
                      Bài ${l.lessonNum}
                    </span>
                    <span class="text-xs font-bold text-gray-500 dark:text-gray-400">${t.themeCode} • ${t.themeDe}</span>
                  </div>
                  <h4 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white mt-1">
                    ${l.titleDe}
                  </h4>
                  <p class="text-xs text-amber-700 dark:text-amber-400 font-medium">
                    ${l.titleVn}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">
                    ${l.summary}
                  </p>
                </div>

                <button onclick="playGerman('${lessonAudioText}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 dark:bg-amber-950/60 hover:bg-amber-200 text-amber-800 dark:text-amber-300 text-xs font-bold transition self-start sm:self-auto border border-amber-200 dark:border-amber-800">
                  <i class="fa-solid fa-volume-high text-amber-600"></i>
                  <span>Nghe Bài ${l.lessonNum}</span>
                </button>
              </div>

              <div class="p-5 space-y-5">
                
                <!-- Vocabulary Table -->
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                      <i class="fa-solid fa-spell-check text-red-500"></i> TỪ VỰNG CỐT LÕI (MẠO TỪ &amp; NGHĨA)
                    </span>
                    <span class="text-[10px] text-gray-400">Click loa để nghe phát âm</span>
                  </div>

                  <div class="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
                    <table class="w-full text-left text-xs">
                      <thead class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold border-b border-gray-200 dark:border-gray-700">
                        <tr>
                          <th class="py-2 px-3 w-14 text-center">Nghe</th>
                          <th class="py-2 px-3">Từ vựng tiếng Đức</th>
                          <th class="py-2 px-3 w-28 text-center">Mạo từ / Loại từ</th>
                          <th class="py-2 px-3">Nghĩa tiếng Việt</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-850">
`;

    l.vocab.forEach(v => {
      let articleBadge = '';
      if (v.article === 'der') {
        articleBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">der (Maskulin)</span>';
      } else if (v.article === 'die') {
        articleBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">die (Feminin)</span>';
      } else if (v.article === 'das') {
        articleBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">das (Neutrum)</span>';
      } else {
        articleBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">${v.article}</span>`;
      }

      const cleanWord = v.word.replace(/'/g, "\\'");

      html += `
                        <tr class="hover:bg-amber-50/40 dark:hover:bg-gray-800/50 transition">
                          <td class="py-2 px-3 text-center">
                            <button onclick="playGerman('${cleanWord}')" class="w-6 h-6 rounded-md bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center transition shadow-sm mx-auto" title="Nghe từ: ${v.word}">
                              <i class="fa-solid fa-volume-high text-[10px]"></i>
                            </button>
                          </td>
                          <td class="py-2 px-3 font-bold text-gray-900 dark:text-gray-100">
                            ${v.word}
                          </td>
                          <td class="py-2 px-3 text-center">
                            ${articleBadge}
                          </td>
                          <td class="py-2 px-3 text-gray-700 dark:text-gray-300 font-medium">
                            ${v.meaning}
                          </td>
                        </tr>`;
    });

    html += `
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Grammar Box -->
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-gray-800/70 border border-slate-200 dark:border-gray-700 space-y-1.5">
                  <div class="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-amber-400">
                    <i class="fa-solid fa-lightbulb text-amber-500"></i>
                    <span>NGỮ PHÁP TRỌNG TÂM: ${l.grammar.title}</span>
                  </div>
                  <div class="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed bg-white dark:bg-gray-900 p-3 rounded-lg border border-slate-200/80 dark:border-gray-800">
${l.grammar.rule}
                  </div>
                </div>

                <!-- Sample Sentences -->
                <div class="space-y-2">
                  <span class="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                    <i class="fa-solid fa-comments text-amber-500"></i> CÂU MẪU ỨNG DỤNG SONG NGỮ
                  </span>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
`;

    l.sentences.forEach(s => {
      const cleanSent = s.de.replace(/'/g, "\\'");
      html += `
                    <div class="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-between gap-2 hover:border-amber-400 transition">
                      <div class="space-y-0.5">
                        <p class="text-xs font-bold text-gray-900 dark:text-white leading-snug">${s.de}</p>
                        <p class="text-[11px] text-amber-700 dark:text-amber-300 font-medium">${s.vn}</p>
                      </div>
                      <button onclick="playGerman('${cleanSent}')" class="px-2 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-semibold transition shrink-0 flex items-center gap-1 shadow-sm">
                        <i class="fa-solid fa-volume-high"></i>
                        <span>Nghe</span>
                      </button>
                    </div>`;
    });

    html += `
                  </div>
                </div>

                <!-- Quiz Item -->
                <div class="quiz-item p-3.5 rounded-xl bg-amber-50/50 dark:bg-gray-900/60 border border-amber-200 dark:border-amber-900/60 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <p class="text-xs font-bold text-gray-900 dark:text-gray-100">
                      <span class="text-amber-600 font-black">Luyện tập Bài ${l.lessonNum}:</span> ${l.quiz.q}
                    </p>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
`;

    l.quiz.options.forEach((opt, optIdx) => {
      html += `
                    <button onclick="checkGermanQuiz(this, ${l.lessonNum}, ${optIdx}, ${l.quiz.ans})" class="quiz-opt-btn text-left px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-400 hover:bg-white dark:hover:bg-gray-800 transition flex items-center justify-between bg-white dark:bg-gray-800">
                      <span>${opt}</span>
                      <i class="quiz-feedback-icon fa-regular fa-circle text-gray-300"></i>
                    </button>`;
    });

    html += `
                  </div>
                  <div class="quiz-expl hidden p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-800 dark:text-emerald-300">
                    <i class="fa-solid fa-circle-info mr-1"></i> <b>Giải thích:</b> ${l.quiz.expl}
                  </div>
                </div>

              </div>
            </div>`;
  });

  html += `
          </div>
        </section>
`;
});

// Add Modals and Script
html += `
      </main>
    </div>
  </div>

  <!-- ==================== MODAL 1: 4 KASUS ==================== -->
  <div id="kasusModal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-500/30 p-6 space-y-5">
      <div class="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-800">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold">
            <i class="fa-solid fa-table-list"></i>
          </div>
          <h3 class="text-lg font-black text-gray-900 dark:text-white">Bảng Mạo Từ 4 Cách Trong Tiếng Đức (Kasus)</h3>
        </div>
        <button onclick="closeKasusModal()" class="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="space-y-4 text-xs">
        <p class="text-gray-600 dark:text-gray-300">
          Trong tiếng Đức, mạo từ biến đổi hình thái tùy theo <b>Giống (Genus)</b> và <b>Cách (Kasus)</b> của danh từ trong câu:
        </p>

        <div class="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold">
              <tr>
                <th class="py-2 px-3">Cách (Kasus)</th>
                <th class="py-2 px-3">Maskulin (Giống đực)</th>
                <th class="py-2 px-3">Feminin (Giống cái)</th>
                <th class="py-2 px-3">Neutrum (Giống trung)</th>
                <th class="py-2 px-3">Plural (Số nhiều)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-900 font-medium">
              <tr>
                <td class="py-2 px-3 font-bold text-amber-600">Nominativ (Chủ cách)</td>
                <td class="py-2 px-3 text-blue-600 font-bold">der / ein</td>
                <td class="py-2 px-3 text-rose-600 font-bold">die / eine</td>
                <td class="py-2 px-3 text-emerald-600 font-bold">das / ein</td>
                <td class="py-2 px-3 text-purple-600 font-bold">die / -</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-amber-600">Akkusativ (Đối cách)</td>
                <td class="py-2 px-3 text-blue-600 font-bold bg-amber-50/50 dark:bg-amber-950/30">den / einen</td>
                <td class="py-2 px-3 text-rose-600 font-bold">die / eine</td>
                <td class="py-2 px-3 text-emerald-600 font-bold">das / ein</td>
                <td class="py-2 px-3 text-purple-600 font-bold">die / -</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-amber-600">Dativ (Gián cách)</td>
                <td class="py-2 px-3 text-blue-600 font-bold">dem / einem</td>
                <td class="py-2 px-3 text-rose-600 font-bold">der / einer</td>
                <td class="py-2 px-3 text-emerald-600 font-bold">dem / einem</td>
                <td class="py-2 px-3 text-purple-600 font-bold">den (+n) / -</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-amber-600">Genitiv (Sở hữu cách)</td>
                <td class="py-2 px-3 text-blue-600 font-bold">des (+s/es)</td>
                <td class="py-2 px-3 text-rose-600 font-bold">der</td>
                <td class="py-2 px-3 text-emerald-600 font-bold">des (+s/es)</td>
                <td class="py-2 px-3 text-purple-600 font-bold">der</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-[11px] text-amber-900 dark:text-amber-200">
          <i class="fa-solid fa-circle-exclamation mr-1 text-amber-600"></i>
          <b>Mẹo ghi nhớ nhanh:</b> Ở cách Akkusativ (tân ngữ trực tiếp), chỉ có danh từ giống Đực biến đổi từ <b>der $\rightarrow$ den</b> (hoặc <b>ein $\rightarrow$ einen</b>). Các giống cái, giống trung và số nhiều giữ nguyên mạo từ như ở cách Nominativ!
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== MODAL 2: MODALVERBEN ==================== -->
  <div id="modalverbenModal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-rose-500/30 p-6 space-y-5">
      <div class="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-800">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center font-bold">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <h3 class="text-lg font-black text-gray-900 dark:text-white">Bảng Chia Động Từ Khuyết Thiếu (Modalverben)</h3>
        </div>
        <button onclick="closeModalverbenModal()" class="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="space-y-4 text-xs">
        <p class="text-gray-600 dark:text-gray-300">
          Đặc điểm: Ngôi <b>ich</b> và <b>er/sie/es</b> luôn chia giống nhau và <i>không có đuôi -e hoặc -t</i>! Động từ chính đi kèm chuyển xuống cuối câu ở dạng nguyên thể (Infinitiv).
        </p>

        <div class="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold">
              <tr>
                <th class="py-2 px-3">Ngôi (Pronomen)</th>
                <th class="py-2 px-3">können (có thể)</th>
                <th class="py-2 px-3">müssen (phải)</th>
                <th class="py-2 px-3">dürfen (được phép)</th>
                <th class="py-2 px-3">wollen (muốn)</th>
                <th class="py-2 px-3">möchten (muốn/thích)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-900 font-medium">
              <tr>
                <td class="py-2 px-3 font-bold text-gray-900 dark:text-white">ich</td>
                <td class="py-2 px-3 text-rose-600 font-bold">kann</td>
                <td class="py-2 px-3 text-rose-600 font-bold">muss</td>
                <td class="py-2 px-3 text-rose-600 font-bold">darf</td>
                <td class="py-2 px-3 text-rose-600 font-bold">will</td>
                <td class="py-2 px-3 text-rose-600 font-bold">möchte</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-gray-900 dark:text-white">du</td>
                <td class="py-2 px-3">kannst</td>
                <td class="py-2 px-3">musst</td>
                <td class="py-2 px-3">darfst</td>
                <td class="py-2 px-3">willst</td>
                <td class="py-2 px-3">möchtest</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-gray-900 dark:text-white">er/sie/es</td>
                <td class="py-2 px-3 text-rose-600 font-bold">kann</td>
                <td class="py-2 px-3 text-rose-600 font-bold">muss</td>
                <td class="py-2 px-3 text-rose-600 font-bold">darf</td>
                <td class="py-2 px-3 text-rose-600 font-bold">will</td>
                <td class="py-2 px-3 text-rose-600 font-bold">möchte</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-gray-900 dark:text-white">wir</td>
                <td class="py-2 px-3">können</td>
                <td class="py-2 px-3">müssen</td>
                <td class="py-2 px-3">dürfen</td>
                <td class="py-2 px-3">wollen</td>
                <td class="py-2 px-3">möchten</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-gray-900 dark:text-white">ihr</td>
                <td class="py-2 px-3">könnt</td>
                <td class="py-2 px-3">müsst</td>
                <td class="py-2 px-3">dürft</td>
                <td class="py-2 px-3">wollt</td>
                <td class="py-2 px-3">möchtet</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-gray-900 dark:text-white">sie / Sie</td>
                <td class="py-2 px-3">können</td>
                <td class="py-2 px-3">müssen</td>
                <td class="py-2 px-3">dürfen</td>
                <td class="py-2 px-3">wollen</td>
                <td class="py-2 px-3">möchten</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== MODAL 3: EXAM (60:00) ==================== -->
  <div id="examModal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-amber-500/30 p-6 sm:p-8 space-y-6">
      <div class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
        <div>
          <span class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Hội Thi Trạng Nguyên Đức Ngữ 6</span>
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">Der Landessieger Deutsch 6</h3>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3.5 py-1.5 rounded-xl bg-amber-500 text-white font-mono font-bold text-sm shadow-sm flex items-center gap-2">
            <i class="fa-solid fa-stopwatch animate-pulse"></i>
            <span id="examTimer">60:00</span>
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 flex items-center justify-center">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <div id="examContainer" class="space-y-5 text-xs">
        <p class="text-gray-600 dark:text-gray-300">
          Bài thi gồm 20 câu hỏi bao quát trọn vẹn 10 Chủ đề và 32 Bài học tiếng Đức 6. Thời gian làm bài 60 phút. Điểm số sẽ được chấm và xếp hạng tự động khi bạn nhấn nộp bài.
        </p>
        <div id="examQuestionsList" class="space-y-4"></div>
        <div class="pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-end gap-3">
          <button onclick="closeExamModal()" class="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-200 transition">Hủy bài thi</button>
          <button onclick="submitExam()" class="px-6 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-red-600 text-white font-bold hover:from-amber-400 hover:to-red-500 transition shadow-md shadow-amber-500/20">Nộp bài &amp; Chấm điểm</button>
        </div>
      </div>

      <div id="examResult" class="hidden text-center py-8 space-y-4">
        <div class="w-20 h-20 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto text-3xl font-black">
          <i class="fa-solid fa-trophy text-amber-500"></i>
        </div>
        <h4 class="text-2xl font-black text-gray-900 dark:text-white" id="examScoreTitle">Kết Quả Bài Thi</h4>
        <p class="text-sm text-gray-600 dark:text-gray-300" id="examScoreDetail"></p>
        <button onclick="resetExam()" class="px-5 py-2.5 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition">
          Làm Lại Bài Thi
        </button>
      </div>
    </div>
  </div>

  <!-- ==================== SCRIPT ==================== -->
  <script>
    // Web Speech API Voice synthesis
    let currentSpeechRate = 0.85;
    const rateRange = document.getElementById('speechRateRange');
    const rateLabel = document.getElementById('speechRateLabel');

    rateRange?.addEventListener('input', (e) => {
      currentSpeechRate = parseFloat(e.target.value);
      if (rateLabel) rateLabel.innerText = currentSpeechRate.toFixed(2) + 'x';
    });

    function playGerman(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const cleanText = text.replace(/[\\/\\\\#,+()$~%.'":*?<>{}]/g, ' ');
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'de-DE'; // Tiếng Đức chuẩn
        utterance.rate = currentSpeechRate;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
      } else {
        alert('Trình duyệt hiện tại chưa hỗ trợ Web Speech API tiếng Đức.');
      }
    }

    // Theme Toggle
    const themeBtn = document.getElementById('themeToggleBtn');
    themeBtn?.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    // Modal Handlers
    function openKasusModal() { document.getElementById('kasusModal').classList.remove('hidden'); }
    function closeKasusModal() { document.getElementById('kasusModal').classList.add('hidden'); }
    function openModalverbenModal() { document.getElementById('modalverbenModal').classList.remove('hidden'); }
    function closeModalverbenModal() { document.getElementById('modalverbenModal').classList.add('hidden'); }

    // Quiz Checking Logic
    const answeredSet = new Set();
    function checkGermanQuiz(btn, lessonNum, optIdx, correctIdx) {
      const parent = btn.closest('.quiz-item');
      const allBtns = parent.querySelectorAll('.quiz-opt-btn');
      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('border-amber-500', 'bg-amber-50', 'border-rose-500', 'bg-rose-50');
      });

      const icon = btn.querySelector('.quiz-feedback-icon');
      if (optIdx === correctIdx) {
        btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40', 'text-emerald-800', 'dark:text-emerald-300', 'font-bold');
        icon.className = 'quiz-feedback-icon fa-solid fa-circle-check text-emerald-500';
      } else {
        btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40', 'text-rose-800', 'dark:text-rose-300', 'font-bold');
        icon.className = 'quiz-feedback-icon fa-solid fa-circle-xmark text-rose-500';
        const correctBtn = allBtns[correctIdx];
        if (correctBtn) {
          correctBtn.classList.add('border-emerald-500', 'bg-emerald-50/50', 'dark:bg-emerald-950/20');
          correctBtn.querySelector('.quiz-feedback-icon').className = 'quiz-feedback-icon fa-solid fa-circle-check text-emerald-500';
        }
      }

      parent.querySelector('.quiz-expl')?.classList.remove('hidden');
      answeredSet.add(lessonNum);
      updateProgressBar();
    }

    function updateProgressBar() {
      const total = ${totalLessons};
      const count = answeredSet.size;
      const percent = Math.round((count / total) * 100);
      const bar = document.getElementById('progress-bar');
      const text = document.getElementById('progress-percent');
      const ansCount = document.getElementById('answered-count');
      if (bar) bar.style.width = percent + '%';
      if (text) text.innerText = percent + '%';
      if (ansCount) ansCount.innerText = count;
    }

    // Filter by Theme
    function filterByTheme(themeId) {
      document.querySelectorAll('.theme-filter-chip').forEach(c => {
        if (c.getAttribute('data-theme') === themeId) {
          c.className = 'theme-filter-chip px-2 py-1 rounded-md bg-amber-500 text-white shadow-sm';
        } else {
          c.className = 'theme-filter-chip px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-amber-100 transition';
        }
      });

      const themeBlocks = document.querySelectorAll('.theme-block');
      themeBlocks.forEach(tb => {
        if (themeId === 'all' || tb.getAttribute('data-theme') === themeId) {
          tb.classList.remove('hidden');
        } else {
          tb.classList.add('hidden');
        }
      });

      const sidebarItems = document.querySelectorAll('.sidebar-lesson-item');
      sidebarItems.forEach(item => {
        if (themeId === 'all' || item.getAttribute('data-theme') === themeId) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }

    // Search filter across 32 lessons
    const lessonSearchInput = document.getElementById('lessonSearchInput');
    lessonSearchInput?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const lessonCards = document.querySelectorAll('.lesson-card');
      const sidebarItems = document.querySelectorAll('.sidebar-lesson-item');

      sidebarItems.forEach(item => {
        if (!q) {
          item.classList.remove('hidden');
          return;
        }
        const data = item.getAttribute('data-title') || '';
        if (data.includes(q)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });

      lessonCards.forEach(card => {
        if (!q) {
          card.classList.remove('hidden');
          return;
        }
        const text = card.innerText.toLowerCase();
        if (text.includes(q)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });

      // Also ensure parent theme blocks remain visible if they contain matching lessons
      document.querySelectorAll('.theme-block').forEach(tb => {
        if (!q) {
          tb.classList.remove('hidden');
          return;
        }
        const hasVisible = tb.querySelector('.lesson-card:not(.hidden)');
        if (hasVisible) {
          tb.classList.remove('hidden');
        } else {
          tb.classList.add('hidden');
        }
      });
    });

    // 20 Exam Questions Bank for Landessieger Deutsch 6
    const examQuestions = [
      { q: "Mạo từ xác định của từ 'Schule' (trường học) là gì?", options: ["der", "die", "das", "den"], ans: 1 },
      { q: "Trong câu: 'Ich warte ___ den Bus.', giới từ chính xác đi với động từ warten là:", options: ["auf", "an", "bei", "über"], ans: 0 },
      { q: "Từ nào sau đây là danh từ số nhiều (Plural)?", options: ["die Mutter", "der Vater", "die Eltern", "das Kind"], ans: 2 },
      { q: "Nước nào sau đây KHÔNG thuộc khối các quốc gia nói tiếng Đức (DACH)?", options: ["Deutschland (Đức)", "Österreich (Áo)", "die Schweiz (Thụy Sĩ)", "Spanien (Tây Ban Nha)"], ans: 3 },
      { q: "Dạng chia đúng của động từ sprechen ở ngôi 'du' là:", options: ["du sprecht", "du sprichst", "du sprechst", "du sprechtst"], ans: 1 },
      { q: "Trong căn nhà, 'das Wohnzimmer' có nghĩa là:", options: ["Phòng ngủ", "Phòng khách", "Nhà bếp", "Phòng tắm"], ans: 1 },
      { q: "Số thứ tự 'thứ ba' (3.) trong tiếng Đức viết là:", options: ["dritte", "dreiste", "dritter", "dreiten"], ans: 0 },
      { q: "Khi chúc mừng sinh nhật, người Đức nói:", options: ["Guten Appetit!", "Gute Besserung!", "Herzlichen Glückwunsch zum Geburtstag!", "Schönes Wochenende!"], ans: 2 },
      { q: "Khi muốn thanh toán trong nhà hàng, câu nói lịch sự là:", options: ["Die Rechnung, bitte!", "Was kostet das?", "Ich habe Hunger.", "Guten Abend!"], ans: 0 },
      { q: "Động từ tách 'fernsehen' (xem tivi) chia ở ngôi 'er' là:", options: ["er seht fern", "er sieht fern", "er fernsieht", "er fernseht"], ans: 1 },
      { q: "Khi bị đau đầu, danh từ tiếng Đức tương ứng là:", options: ["Bauchschmerzen", "Halsschmerzen", "Kopfschmerzen", "Zahnschmerzen"], ans: 2 },
      { q: "Mùa đông trong tiếng Đức là:", options: ["der Frühling", "der Sommer", "der Herbst", "der Winter"], ans: 3 },
      { q: "Dạng quá khứ (Präteritum) của động từ 'sein' ở ngôi 'ich' là:", options: ["hatte", "war", "bin", "wäre"], ans: 1 },
      { q: "Biến đổi mạo từ giống đực (der) ở cách Akkusativ là:", options: ["dem", "des", "den", "die"], ans: 2 },
      { q: "Động từ khuyết thiếu 'können' ở ngôi 'ich' chia là:", options: ["ich könne", "ich konn", "ich kann", "ich könnt"], ans: 2 },
      { q: "Để khuyên ai đó nên nghỉ ngơi trên giường khi ốm, ta dùng:", options: ["Du sollst im Bett bleiben.", "Du darfst im Bett bleiben.", "Du willst im Bett bleiben.", "Du magst im Bett bleiben."], ans: 0 },
      { q: "'Das schmeckt sehr lecker!' có nghĩa là:", options: ["Món ăn này đắt quá!", "Món ăn này rất ngon!", "Tôi không đói.", "Hãy mang thêm muối!"], ans: 1 },
      { q: "Tháng 10 (Oktober) thuộc mùa nào ở nước Đức?", options: ["der Frühling", "der Sommer", "der Herbst", "der Winter"], ans: 2 },
      { q: "Đại từ sở hữu giống cái ở cách Nominativ là:", options: ["mein", "meine", "meinen", "meinem"], ans: 1 },
      { q: "Chào mừng bạn đến với nước Đức nói bằng tiếng Đức là:", options: ["Auf Wiedersehen in Deutschland!", "Gute Reise!", "Willkommen in Deutschland!", "Entschuldigung!"], ans: 2 }
    ];

    let examTimerInterval = null;
    let examTimeLeft = 3600;

    function openExamModal() {
      document.getElementById('examModal').classList.remove('hidden');
      document.getElementById('examContainer').classList.remove('hidden');
      document.getElementById('examResult').classList.add('hidden');
      
      const listEl = document.getElementById('examQuestionsList');
      if (listEl && listEl.children.length === 0) {
        examQuestions.forEach((q, idx) => {
          const item = document.createElement('div');
          item.className = 'p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2';
          item.innerHTML = \`
            <p class="font-bold text-gray-900 dark:text-gray-100">Câu \${idx + 1}: \${q.q}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              \${q.options.map((opt, oIdx) => \`
                <label class="flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-amber-950/40 cursor-pointer">
                  <input type="radio" name="exam_q_\${idx}" value="\${oIdx}" class="text-amber-600 focus:ring-amber-500">
                  <span class="text-gray-800 dark:text-gray-200">\${opt}</span>
                </label>
              \`).join('')}
            </div>
          \`;
          listEl.appendChild(item);
        });
      }

      if (!examTimerInterval) {
        examTimeLeft = 3600;
        examTimerInterval = setInterval(() => {
          examTimeLeft--;
          const m = Math.floor(examTimeLeft / 60);
          const s = examTimeLeft % 60;
          const timerEl = document.getElementById('examTimer');
          if (timerEl) timerEl.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
          if (examTimeLeft <= 0) {
            clearInterval(examTimerInterval);
            submitExam();
          }
        }, 1000);
      }
    }

    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
    }

    function submitExam() {
      if (examTimerInterval) {
        clearInterval(examTimerInterval);
        examTimerInterval = null;
      }
      let correct = 0;
      examQuestions.forEach((q, idx) => {
        const checked = document.querySelector(\`input[name="exam_q_\${idx}"]:checked\`);
        if (checked && parseInt(checked.value) === q.ans) {
          correct++;
        }
      });

      document.getElementById('examContainer').classList.add('hidden');
      const resEl = document.getElementById('examResult');
      resEl.classList.remove('hidden');

      const score = (correct / examQuestions.length) * 10;
      document.getElementById('examScoreTitle').innerText = score >= 8 ? 'Xuất Sắc! Đạt Danh Hiệu Landessieger' : (score >= 5 ? 'Đạt Tiêu Chuẩn Năng Lực' : 'Cần Tiếp Tục Rèn Luyện');
      document.getElementById('examScoreDetail').innerHTML = \`Bạn đã trả lời đúng <b>\${correct}/\${examQuestions.length}</b> câu hỏi (\${score.toFixed(1)} / 10.0 điểm).\`;
    }

    function resetExam() {
      const inputs = document.querySelectorAll('#examQuestionsList input[type="radio"]');
      inputs.forEach(i => i.checked = false);
      openExamModal();
    }
  </script>
</body>
</html>
`;

// Save files
const outPath1 = path.join(__dirname, 'courses', 'tiengduc_6.html');
const outPath2 = path.join(__dirname, 'courses', 'german_6.html');

fs.writeFileSync(outPath1, html, 'utf8');
fs.writeFileSync(outPath2, html, 'utf8');

console.log(`Generated successfully: ${outPath1} (${html.length} bytes)`);
console.log(`Generated successfully alias: ${outPath2} (${html.length} bytes)`);
