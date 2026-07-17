/**
   LingoStudy - Hebrew & Japanese Vocab & Writing Trainer
   Core Application Javascript File
   Developer: Dr. Bahadır Murat ÇAKMAKLI
*/

// --- CHARACTER DATABASES ---

const HEBREW_ALPHABET = [
    { name: 'ALEF', print: 'א', cursive: 'M 35 80 C 42 55 42 45 65 20 M 68 50 C 45 50 35 75 62 80', trans: 'Alef (Sessiz Harf / Vokal)', value: 1 },
    { name: 'BET / VET', print: 'ב', cursive: 'M 65 30 C 35 30 25 42 28 72 C 30 78 70 78 70 78', trans: 'Bet / Vet (B / V)', value: 2 },
    { name: 'GIMEL', print: 'ג', cursive: 'M 45 30 C 50 50 48 60 38 80 M 46 55 C 55 65 58 75 63 80', trans: 'Gimel (G)', value: 3 },
    { name: 'DALET', print: 'ד', cursive: 'M 35 32 C 65 28 65 35 52 45 C 45 55 45 75 48 80', trans: 'Dalet (D)', value: 4 },
    { name: 'HE', print: 'ה', cursive: 'M 35 30 C 35 60 35 80 35 80 M 45 32 C 60 32 60 65 50 78', trans: 'He (H)', value: 5 },
    { name: 'VAV', print: 'ו', cursive: 'M 55 30 C 52 30 50 52 50 78', trans: 'Vav (V / O / U)', value: 6 },
    { name: 'ZAYIN', print: 'ז', cursive: 'M 35 35 C 58 32 58 40 45 50 C 45 60 45 75 45 80', trans: 'Zayin (Z)', value: 7 },
    { name: 'HET', print: 'ח', cursive: 'M 35 78 C 35 42 48 30 65 42 C 65 50 65 75 65 80', trans: 'Het (Hırıltılı H)', value: 8 },
    { name: 'TET', print: 'ט', cursive: 'M 35 35 C 30 68 45 80 65 80 C 70 68 62 42 55 52', trans: 'Tet (T)', value: 9 },
    { name: 'YOD', print: 'י', cursive: 'M 50 30 C 56 30 52 42 48 48', trans: 'Yod (Y / I)', value: 10 },
    { name: 'KAF', print: 'כ', cursive: 'M 65 32 C 45 32 35 48 35 65 C 35 80 50 82 65 78', trans: 'Kaf / Haf (K / Hırıltılı H)', value: 20 },
    { name: 'FINAL KAF', print: 'ך', cursive: 'M 55 30 C 45 30 45 45 45 55 C 45 70 45 90 45 98', trans: 'Final Kaf (Sözcük sonunda H)', value: 20 },
    { name: 'LAMED', print: 'ל', cursive: 'M 55 12 C 65 12 63 32 45 42 C 35 52 45 75 65 75', trans: 'Lamed (L)', value: 30 },
    { name: 'MEM', print: 'מ', cursive: 'M 35 72 C 35 45 45 35 55 45 C 65 55 65 75 65 75', trans: 'Mem (M)', value: 40 },
    { name: 'FINAL MEM', print: 'ם', cursive: 'M 50 30 C 32 30 32 78 50 78 C 68 78 68 30 50 30 Z', trans: 'Final Mem (Sözcük sonunda M)', value: 40 },
    { name: 'NUN', print: 'נ', cursive: 'M 50 35 C 50 50 50 70 50 78', trans: 'Nun (N)', value: 50 },
    { name: 'FINAL NUN', print: 'ן', cursive: 'M 50 30 C 50 55 50 80 50 98', trans: 'Final Nun (Sözcük sonunda N)', value: 50 },
    { name: 'SAMEKH', print: 'ס', cursive: 'M 50 30 C 32 30 32 78 50 78 C 68 78 68 30 50 30 Z', trans: 'Samekh (S)', value: 60 },
    { name: 'AYIN', print: 'ע', cursive: 'M 32 35 C 32 55 52 75 52 75 M 65 35 L 42 75', trans: 'Ayin (Sessiz / Geniz sesi)', value: 70 },
    { name: 'PE / FE', print: 'פ', cursive: 'M 55 35 C 35 40 35 75 52 75 C 62 75 62 60 48 60 C 42 60 42 50 52 50', trans: 'Pe / Fe (P / F)', value: 80 },
    { name: 'FINAL PE', print: 'ף', cursive: 'M 48 30 C 35 32 35 62 48 62 C 58 62 62 58 62 48 L 62 98', trans: 'Final Pe (Sözcük sonunda F)', value: 80 },
    { name: 'TSADE', print: 'צ', cursive: 'M 35 35 C 35 55 40 75 52 75 C 62 75 62 65 48 55 M 58 35 C 48 50 52 60 62 70', trans: 'Tsade (TS)', value: 90 },
    { name: 'FINAL TSADE', print: 'ץ', cursive: 'M 35 35 C 35 55 40 70 48 70 M 58 35 L 42 98', trans: 'Final Tsade (Sözcük sonunda TS)', value: 90 },
    { name: 'QOF', print: 'ק', cursive: 'M 55 35 C 40 35 35 50 42 62 C 48 68 62 65 58 52 M 52 50 L 52 85', trans: 'Qof (K)', value: 100 },
    { name: 'RESH', print: 'ר', cursive: 'M 35 38 C 35 32 65 28 65 42 C 65 58 65 70 65 78', trans: 'Resh (R)', value: 200 },
    { name: 'SHIN / SIN', print: 'ש', cursive: 'M 35 35 C 35 75 65 75 65 35 M 50 55 C 50 70 50 78 50 78', trans: 'Shin / Sin (Ş / S)', value: 300 },
    { name: 'TAV', print: 'ת', cursive: 'M 35 35 C 35 70 30 78 30 78 M 38 48 C 55 38 65 48 65 78', trans: 'Tav (T)', value: 400 }
];

const JAPANESE_HIRAGANA = [
    { name: 'A', print: 'あ', trans: 'a' }, { name: 'I', print: 'い', trans: 'i' }, { name: 'U', print: 'う', trans: 'u' }, { name: 'E', print: 'え', trans: 'e' }, { name: 'O', print: 'お', trans: 'o' },
    { name: 'KA', print: 'か', trans: 'ka' }, { name: 'KI', print: 'き', trans: 'ki' }, { name: 'KU', print: 'く', trans: 'ku' }, { name: 'KE', print: 'け', trans: 'ke' }, { name: 'KO', print: 'こ', trans: 'ko' },
    { name: 'SA', print: 'さ', trans: 'sa' }, { name: 'SHI', print: 'し', trans: 'shi' }, { name: 'SU', print: 'す', trans: 'su' }, { name: 'SE', print: 'せ', trans: 'se' }, { name: 'SO', print: 'そ', trans: 'so' },
    { name: 'TA', print: 'た', trans: 'ta' }, { name: 'CHI', print: 'ち', trans: 'chi' }, { name: 'TSU', print: 'つ', trans: 'tsu' }, { name: 'TE', print: 'て', trans: 'te' }, { name: 'TO', print: 'と', trans: 'to' },
    { name: 'NA', print: 'な', trans: 'na' }, { name: 'NI', print: 'に', trans: 'ni' }, { name: 'NU', print: 'ぬ', trans: 'nu' }, { name: 'NE', print: 'ね', trans: 'ne' }, { name: 'NO', print: 'の', trans: 'no' },
    { name: 'HA', print: 'は', trans: 'ha' }, { name: 'HI', print: 'ひ', trans: 'hi' }, { name: 'FU', print: 'ふ', trans: 'fu' }, { name: 'HE', print: 'へ', trans: 'he' }, { name: 'HO', print: 'ほ', trans: 'ho' },
    { name: 'MA', print: 'ま', trans: 'ma' }, { name: 'MI', print: 'み', trans: 'mi' }, { name: 'MU', print: 'む', trans: 'mu' }, { name: 'ME', print: 'め', trans: 'me' }, { name: 'MO', print: 'も', trans: 'mo' },
    { name: 'YA', print: 'や', trans: 'ya' }, { name: 'YU', print: 'ゆ', trans: 'yu' }, { name: 'YO', print: 'よ', trans: 'yo' },
    { name: 'RA', print: 'ら', trans: 'ra' }, { name: 'RI', print: 'り', trans: 'ri' }, { name: 'RU', print: 'る', trans: 'ru' }, { name: 'RE', print: 'れ', trans: 're' }, { name: 'RO', print: 'ろ', trans: 'ro' },
    { name: 'WA', print: 'わ', trans: 'wa' }, { name: 'WO', print: 'を', trans: 'wo' }, { name: 'N', print: 'ん', trans: 'n' }
];

const JAPANESE_KATAKANA = [
    { name: 'A', print: 'ア', trans: 'a' }, { name: 'I', print: 'イ', trans: 'i' }, { name: 'U', print: 'ウ', trans: 'u' }, { name: 'E', print: 'エ', trans: 'e' }, { name: 'O', print: 'オ', trans: 'o' },
    { name: 'KA', print: 'カ', trans: 'ka' }, { name: 'KI', print: 'キ', trans: 'ki' }, { name: 'KU', print: 'ク', trans: 'ku' }, { name: 'KE', print: 'ケ', trans: 'ke' }, { name: 'KO', print: 'コ', trans: 'ko' },
    { name: 'SA', print: 'サ', trans: 'sa' }, { name: 'SHI', print: 'シ', trans: 'shi' }, { name: 'SU', print: 'ス', trans: 'su' }, { name: 'SE', print: 'セ', trans: 'se' }, { name: 'SO', print: 'ソ', trans: 'so' },
    { name: 'TA', print: 'タ', trans: 'ta' }, { name: 'CHI', print: 'チ', trans: 'chi' }, { name: 'TSU', print: 'ツ', trans: 'tsu' }, { name: 'TE', print: 'テ', trans: 'te' }, { name: 'TO', print: 'ト', trans: 'to' },
    { name: 'NA', print: 'ナ', trans: 'na' }, { name: 'NI', print: 'ニ', trans: 'ni' }, { name: 'NU', print: 'ヌ', trans: 'nu' }, { name: 'NE', print: 'ネ', trans: 'ne' }, { name: 'NO', print: 'ノ', trans: 'no' },
    { name: 'HA', print: 'ハ', trans: 'ha' }, { name: 'HI', print: 'ヒ', trans: 'hi' }, { name: 'FU', print: 'フ', trans: 'fu' }, { name: 'HE', print: 'ヘ', trans: 'he' }, { name: 'HO', print: 'ホ', trans: 'ho' },
    { name: 'MA', print: 'マ', trans: 'ma' }, { name: 'MI', print: 'ミ', trans: 'mi' }, { name: 'MU', print: 'ム', trans: 'mu' }, { name: 'ME', print: 'メ', trans: 'me' }, { name: 'MO', print: 'モ', trans: 'mo' },
    { name: 'YA', print: 'ヤ', trans: 'ya' }, { name: 'YU', print: 'ユ', trans: 'yu' }, { name: 'YO', print: 'ヨ', trans: 'yo' },
    { name: 'RA', print: 'ラ', trans: 'ra' }, { name: 'RI', print: 'リ', trans: 'ri' }, { name: 'RU', print: 'ル', trans: 'ru' }, { name: 'RE', print: 'レ', trans: 're' }, { name: 'RO', print: 'ロ', trans: 'ro' },
    { name: 'WA', print: 'ワ', trans: 'wa' }, { name: 'WO', print: 'ヲ', trans: 'wo' }, { name: 'N', print: 'ン', trans: 'n' }
];

// --- CONVERSATION PHRASES DATABASE (INITIALIZED WITH DEFAULT VALUES) ---

const DEFAULT_CATEGORIES = [
    { id: 'cat-meeting', name: 'Tanışma & Selamlaşma' },
    { id: 'cat-proposals', name: 'Teklif Cümleleri' },
    { id: 'cat-shopping', name: 'Alışveriş' }
];

const DEFAULT_PHRASES = [
    // Tanışma & Selamlaşma - Japonca
    { categoryId: 'cat-meeting', lang: 'japanese', original: 'こんにちは', trans: 'Konniçiwa', meaning: 'Merhaba' },
    { categoryId: 'cat-meeting', lang: 'japanese', original: 'お名前は何ですか？', trans: 'O-namae wa nan desu ka?', meaning: 'Adınız ne?' },
    { categoryId: 'cat-meeting', lang: 'japanese', original: '私の名前はバハディルです。', trans: 'Wataşi no namae wa Bahadır desu.', meaning: 'Benim adım Bahadır.' },
    { categoryId: 'cat-meeting', lang: 'japanese', original: 'どこから来ましたか？', trans: 'Doko kara kimaşita ka?', meaning: 'Nerelisiniz?' },
    { categoryId: 'cat-meeting', lang: 'japanese', original: 'トルコから来ました。', trans: 'Toruko kara kimaşita.', meaning: 'Türkiye\'den geldim.' },
    { categoryId: 'cat-meeting', lang: 'japanese', original: 'どこに住んでいますか？', trans: 'Doko ni sunde imasu ka?', meaning: 'Nerede yaşıyorsunuz?' },
    { categoryId: 'cat-meeting', lang: 'japanese', original: 'アンカラに住んでいます。', trans: 'Ankara ni sunde imasu.', meaning: 'Ankara\'da yaşıyorum.' },
    { categoryId: 'cat-meeting', lang: 'japanese', original: '趣味は何ですか？', trans: 'Şumi wa nan desu ka?', meaning: 'Hobileriniz nelerdir?' },
    { categoryId: 'cat-meeting', lang: 'japanese', original: 'はじめまして、よろしくお願いします。', trans: 'Hacimemaşite, yoroşiku onegay şimasu.', meaning: 'Tanıştığımıza memnun oldum, lütfen bana iyi davranın.' },

    // Tanışma & Selamlaşma - İbranice
    { categoryId: 'cat-meeting', lang: 'hebrew', original: 'שלום', trans: 'Şalom', meaning: 'Merhaba / Barış' },
    { categoryId: 'cat-meeting', lang: 'hebrew', original: 'איך קוראים לך? (erkeğe) / איך קוראים לך? (kadına)', trans: 'Eh korim leha? (e) / Eh korim lah? (k)', meaning: 'Adın ne?' },
    { categoryId: 'cat-meeting', lang: 'hebrew', original: 'קוראים לי בהאדיר.', trans: 'Korim li Bahadir.', meaning: 'Benim adım Bahadır.' },
    { categoryId: 'cat-meeting', lang: 'hebrew', original: 'מאיפה אתה? (e) / מאיפה את? (k)', trans: 'Me-eyfo ata? (e) / Me-eyfo at? (k)', meaning: 'Nerelisiniz?' },
    { categoryId: 'cat-meeting', lang: 'hebrew', original: 'אני מטורקיה.', trans: 'Ani mi-Turkiya.', meaning: 'Türkiye\'denim.' },
    { categoryId: 'cat-meeting', lang: 'hebrew', original: 'איפה אתה גר? (e) / איפה את גרה? (k)', trans: 'Eyfo ata gar? (e) / Eyfo at gara? (k)', meaning: 'Nerede yaşıyorsun?' },
    { categoryId: 'cat-meeting', lang: 'hebrew', original: 'אני גר באיסטנבול.', trans: 'Ani gar be-Istanbul.', meaning: 'İstanbul\'da yaşıyorum.' },
    { categoryId: 'cat-meeting', lang: 'hebrew', original: 'מה אתה אוהב לעשות?', trans: 'Ma ata ohev la-asot?', meaning: 'Neler yapmaktan hoşlanırsın?' },
    { categoryId: 'cat-meeting', lang: 'hebrew', original: 'נעים מאוד.', trans: 'Naim meod.', meaning: 'Tanıştığımıza çok memnun oldum.' },

    // Teklif Cümleleri - Japonca
    { categoryId: 'cat-proposals', lang: 'japanese', original: '一緒にご飯を食べませんか？', trans: 'İşşoni gohan o tabemasen ka?', meaning: 'Birlikte yemek yiyelim mi?' },
    { categoryId: 'cat-proposals', lang: 'japanese', original: '映画に行きませんか？', trans: 'Eyga ni ikimasen ka?', meaning: 'Sinemaya gidelim mi?' },
    { categoryId: 'cat-proposals', lang: 'japanese', original: 'コーヒーを飲みませんか？', trans: 'Koohii o nomimasen ka?', meaning: 'Kahve içelim mi?' },
    { categoryId: 'cat-proposals', lang: 'japanese', original: '散歩に行きましょう。', trans: 'Sanpo ni ikimaşoo.', meaning: 'Yürüyüşe çıkalım.' },

    // Teklif Cümleleri - İbranice
    { categoryId: 'cat-proposals', lang: 'hebrew', original: 'בא לך לאכול משהו?', trans: 'Ba leha le-ehol maşehu?', meaning: 'Canın bir şeyler yemek istiyor mu? / Yemek yiyelim mi?' },
    { categoryId: 'cat-proposals', lang: 'hebrew', original: 'נלך לקולנוע?', trans: 'Neleh la-kolnoa?', meaning: 'Sinemaya gidelim mi?' },
    { categoryId: 'cat-proposals', lang: 'hebrew', original: 'בא לך לשתות קפה?', trans: 'Ba leha liştot kafe?', meaning: 'Kahve içmek ister misin?' },
    { categoryId: 'cat-proposals', lang: 'hebrew', original: 'בוא נלך לטיול.', trans: 'Bo neleh le-tiyul.', meaning: 'Haydi yürüyüşe çıkalım.' },

    // Alışveriş - Japonca
    { categoryId: 'cat-shopping', lang: 'japanese', original: 'これはいくらですか？', trans: 'Kore wa ikura desu ka?', meaning: 'Bu ne kadar?' },
    { categoryId: 'cat-shopping', lang: 'japanese', original: 'これをください。', trans: 'Kore o kudasay.', meaning: 'Bunu lütfen.' },
    { categoryId: 'cat-shopping', lang: 'japanese', original: 'クレジットカードは使えますか？', trans: 'Kurecitto kaado wa cukaemasu ka?', meaning: 'Kredi kartı geçerli mi?' },
    { categoryId: 'cat-shopping', lang: 'japanese', original: '安いですね。', trans: 'Yasuy desu ne.', meaning: 'Ucuzmuş, değil mi?' },
    { categoryId: 'cat-shopping', lang: 'japanese', original: '高いです！', trans: 'Takay desu!', meaning: 'Pahalı!' },

    // Alışveriş - İbranice
    { categoryId: 'cat-shopping', lang: 'hebrew', original: 'כמה זה עולה?', trans: 'Kama ze ole?', meaning: 'Bu kaç para? / Bu ne kadar tutuyor?' },
    { categoryId: 'cat-shopping', lang: 'hebrew', original: 'אני אקח את זה.', trans: 'Ani ekah et ze.', meaning: 'Bunu alacağım.' },
    { categoryId: 'cat-shopping', lang: 'hebrew', original: 'אפשר לשלם בכרטיס אשראי?', trans: 'Efşar leşalem be-kartis aşray?', meaning: 'Kredi kartıyla ödeyebilir miyim?' },
    { categoryId: 'cat-shopping', lang: 'hebrew', original: 'זה זול מאוד.', trans: 'Ze zol meod.', meaning: 'Bu çok ucuz.' },
    { categoryId: 'cat-shopping', lang: 'hebrew', original: 'זה יקר!', trans: 'Ze yakar!', meaning: 'Bu pahalı!' }
];

// --- APP STATE ---

let state = {
    currentTab: 'tab-writing',
    currentLanguage: 'hebrew',      // 'hebrew' or 'japanese'
    currentHebrewSub: 'all',        // 'all', 'print', 'cursive'
    currentJapaneseSub: 'hiragana', // 'hiragana', 'katakana'
    
    // Writing Tab State
    writeIndex: 0,
    isDrawing: false,
    drawColor: 'rgba(255, 255, 255, 0.85)',
    drawSize: 5,
    drawMode: 'pencil',             // 'pencil' or 'eraser'
    traceWatermarkVisible: true,
    rulersVisible: true,
    
    // Flashcard Tab State
    flashIndex: 0,
    flashTimer: null,
    flashMode: 'ordered',           // 'ordered' or 'random'
    flashActiveList: [],
    
    // Phrases Tab State
    categories: [],
    phrases: [],
    selectedCategoryId: 'cat-meeting',
    
    // Test Tab State
    activeTest: null,               // 'matching', 'quiz', 'writing-test'
    // Matching test
    matchingPool: [],
    matchingSelectedLeft: null,
    matchingSelectedRight: null,
    matchingScore: 0,
    matchingTotal: 0,
    // Quiz test
    quizPool: [],
    quizIndex: 0,
    quizScore: 0,
    quizCurrentCorrect: null,
    // Writing 3s test
    writeTestPool: [],
    writeTestIndex: 0,
    writeTestScore: 0,
    writeTestTotal: 0,
    writeTestTimer: null,
    writeTestState: 'idle'          // 'idle', 'showing', 'hidden', 'revealed'
};

// --- CORE UTILITIES ---

// Get letters based on current settings
function getActiveAlphabetList() {
    if (state.currentLanguage === 'hebrew') {
        return HEBREW_ALPHABET;
    } else {
        return state.currentJapaneseSub === 'hiragana' ? JAPANESE_HIRAGANA : JAPANESE_KATAKANA;
    }
}

// Speak text using Speech Synthesis API
function speakText(text, langCode) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Stop any active speech
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langCode;
        utterance.rate = 0.85; // Slightly slower for language learning
        
        // Find best match voice if available
        if (window.speechSynthesis.getVoices) {
            const voices = window.speechSynthesis.getVoices();
            const voice = voices.find(v => v.lang.startsWith(langCode.substring(0, 2)));
            if (voice) {
                utterance.voice = voice;
            }
        }
        
        window.speechSynthesis.speak(utterance);
    } else {
        console.warn('Speech synthesis is not supported on this browser.');
    }
}

// Get correct language code for speaking
function getSpeakLangCode() {
    return state.currentLanguage === 'hebrew' ? 'he-IL' : 'ja-JP';
}

// Generate unique ID
function generateId() {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}

// Load data from LocalStorage
function loadLocalStorage() {
    const savedCategories = localStorage.getItem('lingo_categories');
    const savedPhrases = localStorage.getItem('lingo_phrases');
    const savedTheme = localStorage.getItem('lingo_theme_color');

    if (savedCategories) {
        state.categories = JSON.parse(savedCategories);
    } else {
        state.categories = [...DEFAULT_CATEGORIES];
        localStorage.setItem('lingo_categories', JSON.stringify(state.categories));
    }

    if (savedPhrases) {
        state.phrases = JSON.parse(savedPhrases);
    } else {
        state.phrases = [...DEFAULT_PHRASES];
        localStorage.setItem('lingo_phrases', JSON.stringify(state.phrases));
    }

    if (savedTheme) {
        setThemeColor(savedTheme);
        // Find matching color dot or picker
        document.querySelectorAll('.color-dot').forEach(dot => {
            if (dot.getAttribute('data-color') === savedTheme) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        document.getElementById('custom-color-picker').value = savedTheme;
    }
}

// Save dynamic data
function saveCategories() {
    localStorage.setItem('lingo_categories', JSON.stringify(state.categories));
}

function savePhrases() {
    localStorage.setItem('lingo_phrases', JSON.stringify(state.phrases));
}

// Theme customization
function setThemeColor(color) {
    document.documentElement.style.setProperty('--primary', color);
    
    // Parse hex to RGB to populate '--primary-rgb' for glass transparency
    let hex = color.replace('#', '');
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    document.documentElement.style.setProperty('--primary-rgb', `${r}, ${g}, ${b}`);
    
    // Set lighter tone
    // Simple lightness boost
    const hsl = hexToHSL(color);
    const lightColor = `hsl(${hsl.h}, ${hsl.s}%, ${Math.min(hsl.l + 15, 95)}%)`;
    document.documentElement.style.setProperty('--primary-light', lightColor);
    
    localStorage.setItem('lingo_theme_color', color);
}

function hexToHSL(hex) {
    let r = parseInt(hex.substring(1,3), 16) / 255;
    let g = parseInt(hex.substring(3,5), 16) / 255;
    let b = parseInt(hex.substring(5,7), 16) / 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    loadLocalStorage();
    initializeTabs();
    initializeLanguageToggles();
    initializeWritingCanvas();
    initializeFlashcards();
    initializePhrases();
    initializeTests();
    
    // Render initial views
    renderSubLanguageOptions();
    loadActiveAlphabetInViews();
});

// --- TAB CONTROLLER ---

function initializeTabs() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabScreens = document.querySelectorAll('.tab-screen');
    const sectionTitle = document.getElementById('current-section-title');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            navButtons.forEach(b => b.classList.remove('active'));
            tabScreens.forEach(s => s.classList.remove('active'));
            
            btn.classList.add('active');
            
            const screen = document.getElementById(targetTab);
            screen.classList.add('active');
            state.currentTab = targetTab;
            
            // Set header title
            switch(targetTab) {
                case 'tab-writing':
                    sectionTitle.textContent = "Alfabe Çalışma Alanı";
                    resizeCanvas(writingCanvas, canvasContext);
                    redrawCanvasGrid();
                    loadWritingLetter();
                    break;
                case 'tab-flashcards':
                    sectionTitle.textContent = "Flash Kart Egzersizleri";
                    resetFlashcardSession();
                    break;
                case 'tab-phrases':
                    sectionTitle.textContent = "Günlük Konuşma Kartları";
                    renderCategories();
                    renderPhrases();
                    break;
                case 'tab-tests':
                    sectionTitle.textContent = "Öğrenme Eşikleri & Test Alanı";
                    exitActiveTest();
                    break;
            }
        });
    });

    // Theme selector dots
    const themeDots = document.querySelectorAll('.color-dot');
    const customColorPicker = document.getElementById('custom-color-picker');

    themeDots.forEach(dot => {
        dot.addEventListener('click', () => {
            themeDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            const color = dot.getAttribute('data-color');
            setThemeColor(color);
            customColorPicker.value = color;
        });
    });

    customColorPicker.addEventListener('input', (e) => {
        themeDots.forEach(d => d.classList.remove('active'));
        setThemeColor(e.target.value);
    });
}

// --- LANGUAGE TOGGLING ---

function initializeLanguageToggles() {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            state.currentLanguage = btn.getAttribute('data-lang');
            
            // Reset indexes
            state.writeIndex = 0;
            state.flashIndex = 0;
            
            renderSubLanguageOptions();
            loadActiveAlphabetInViews();
            
            if (state.currentTab === 'tab-phrases') {
                renderPhrases();
            } else if (state.currentTab === 'tab-flashcards') {
                resetFlashcardSession();
            } else if (state.currentTab === 'tab-writing') {
                clearCanvas(writingCanvas, canvasContext);
            }
        });
    });
}

function renderSubLanguageOptions() {
    const container = document.getElementById('sub-lang-container');
    container.innerHTML = '';
    
    if (state.currentLanguage === 'hebrew') {
        const options = [
            { id: 'all', label: 'Tümü (27)' },
            { id: 'print', label: 'Matbu (Print)' },
            { id: 'cursive', label: 'El Yazısı (Cursive)' }
        ];
        
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = `sub-lang-btn ${state.currentHebrewSub === opt.id ? 'active' : ''}`;
            btn.textContent = opt.label;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.sub-lang-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.currentHebrewSub = opt.id;
                loadActiveAlphabetInViews();
            });
            container.appendChild(btn);
        });
    } else {
        const options = [
            { id: 'hiragana', label: 'Hiragana' },
            { id: 'katakana', label: 'Katakana' }
        ];
        
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = `sub-lang-btn ${state.currentJapaneseSub === opt.id ? 'active' : ''}`;
            btn.textContent = opt.label;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.sub-lang-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.currentJapaneseSub = opt.id;
                loadActiveAlphabetInViews();
            });
            container.appendChild(btn);
        });
    }
}

function loadActiveAlphabetInViews() {
    // Render Quick Selection grid in Writing panel
    const grid = document.getElementById('write-letter-grid');
    grid.innerHTML = '';
    
    const list = getActiveAlphabetList();
    
    list.forEach((item, index) => {
        const cell = document.createElement('div');
        cell.className = `grid-item ${state.currentLanguage}-grid-item ${state.writeIndex === index ? 'active' : ''}`;
        
        const displayChar = item.print;
        cell.innerHTML = `
            <span>${displayChar}</span>
            <span class="sub-lbl">${item.name}</span>
        `;
        
        cell.addEventListener('click', () => {
            state.writeIndex = index;
            document.querySelectorAll('.grid-item').forEach(c => c.classList.remove('active'));
            cell.classList.add('active');
            loadWritingLetter();
            speakText(item.print, getSpeakLangCode()); // Play pronunciation automatically when clicked
        });
        
        grid.appendChild(cell);
    });
    
    // Load current letter
    loadWritingLetter();
}

// --- TAB 1: BLACKBOARD WRITING AREA ---

let writingCanvas, canvasContext;
let canvasHistory = [];

function initializeWritingCanvas() {
    writingCanvas = document.getElementById('writing-canvas');
    canvasContext = writingCanvas.getContext('2d');
    
    // Resize support
    window.addEventListener('resize', () => {
        if (state.currentTab === 'tab-writing') {
            resizeCanvas(writingCanvas, canvasContext);
            redrawCanvasGrid();
        }
    });
    
    // Canvas Mouse events
    writingCanvas.addEventListener('mousedown', startDrawing);
    writingCanvas.addEventListener('mousemove', draw);
    writingCanvas.addEventListener('mouseup', stopDrawing);
    writingCanvas.addEventListener('mouseout', stopDrawing);
    
    // Canvas Touch events (Tablet Support)
    writingCanvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousedown', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        writingCanvas.dispatchEvent(mouseEvent);
    });
    
    writingCanvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        writingCanvas.dispatchEvent(mouseEvent);
    });
    
    writingCanvas.addEventListener('touchend', (e) => {
        e.preventDefault();
        const mouseEvent = new MouseEvent('mouseup', {});
        writingCanvas.dispatchEvent(mouseEvent);
    });

    // Toolbar hooks
    const toolPencil = document.getElementById('tool-pencil');
    const toolEraser = document.getElementById('tool-eraser');
    const brushSize = document.getElementById('brush-size');
    const brushSizeVal = document.getElementById('brush-size-val');
    const canvasUndo = document.getElementById('canvas-undo');
    const canvasClear = document.getElementById('canvas-clear');
    const toggleTrace = document.getElementById('toggle-trace-btn');
    
    toolPencil.addEventListener('click', () => {
        toolPencil.classList.add('active');
        toolEraser.classList.remove('active');
        state.drawMode = 'pencil';
    });
    
    toolEraser.addEventListener('click', () => {
        toolEraser.classList.add('active');
        toolPencil.classList.remove('active');
        state.drawMode = 'eraser';
    });
    
    brushSize.addEventListener('input', (e) => {
        state.drawSize = e.target.value;
        brushSizeVal.textContent = `${state.drawSize}px`;
    });
    
    // Chalkboard height adjustment slider
    const boardHeightSlider = document.getElementById('board-height-slider');
    const boardHeightVal = document.getElementById('board-height-val');
    const chalkboardContainer = document.querySelector('.chalkboard-container');
    
    boardHeightSlider.addEventListener('input', (e) => {
        const val = e.target.value;
        boardHeightVal.textContent = `${val}px`;
        chalkboardContainer.style.height = `${val}px`;
        chalkboardContainer.style.minHeight = `${val}px`;
        
        // Resize canvas while preserving drawn content
        resizeCanvas(writingCanvas, canvasContext);
    });
    
    canvasClear.addEventListener('click', () => {
        clearCanvas(writingCanvas, canvasContext);
    });
    
    canvasUndo.addEventListener('click', () => {
        undoCanvasAction();
    });

    toggleTrace.addEventListener('click', () => {
        state.traceWatermarkVisible = !state.traceWatermarkVisible;
        const traceOverlay = document.getElementById('trace-watermark');
        if (state.traceWatermarkVisible) {
            traceOverlay.classList.add('active');
            toggleTrace.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Harf İzini Gizle';
        } else {
            traceOverlay.classList.remove('active');
            toggleTrace.innerHTML = '<i class="fa-solid fa-eye"></i> Harf İzini Göster';
        }
    });

    // Rulers (cetvel) configuration
    const resetRulers = document.getElementById('reset-rulers-btn');
    const toggleRulers = document.getElementById('toggle-rulers-btn');
    
    const r1 = document.getElementById('ruler-1');
    const r2 = document.getElementById('ruler-2');
    const r3 = document.getElementById('ruler-3');
    
    const r1Val = document.getElementById('ruler-1-val');
    const r2Val = document.getElementById('ruler-2-val');
    const r3Val = document.getElementById('ruler-3-val');
    
    const r1Lbl = document.getElementById('ruler-1-lbl');
    const r2Lbl = document.getElementById('ruler-2-lbl');
    const r3Lbl = document.getElementById('ruler-3-lbl');

    function updateRulerPositions() {
        r1.style.top = r1Val.value + '%';
        r2.style.top = r2Val.value + '%';
        r3.style.top = r3Val.value + '%';
        
        r1Lbl.textContent = r1Val.value + '%';
        r2Lbl.textContent = r2Val.value + '%';
        r3Lbl.textContent = r3Val.value + '%';

        // Same for test rulers
        const tr1 = document.getElementById('test-ruler-1');
        const tr2 = document.getElementById('test-ruler-2');
        const tr3 = document.getElementById('test-ruler-3');
        if (tr1 && tr2 && tr3) {
            tr1.style.top = r1Val.value + '%';
            tr2.style.top = r2Val.value + '%';
            tr3.style.top = r3Val.value + '%';
        }
    }

    [r1Val, r2Val, r3Val].forEach(slider => {
        slider.addEventListener('input', updateRulerPositions);
    });

    // Dragging handles logic
    setupRulerDrag(r1, r1Val, updateRulerPositions);
    setupRulerDrag(r2, r2Val, updateRulerPositions);
    setupRulerDrag(r3, r3Val, updateRulerPositions);

    resetRulers.addEventListener('click', () => {
        r1Val.value = 30;
        r2Val.value = 50;
        r3Val.value = 70;
        updateRulerPositions();
    });

    toggleRulers.addEventListener('click', () => {
        state.rulersVisible = !state.rulersVisible;
        const rulersWrapper = document.getElementById('chalkboard-rulers-wrapper');
        const testRulersWrapper = document.getElementById('test-chalkboard-rulers-wrapper');
        
        if (state.rulersVisible) {
            rulersWrapper.style.display = 'block';
            if (testRulersWrapper) testRulersWrapper.style.display = 'block';
            toggleRulers.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Cetvelleri Kapat';
        } else {
            rulersWrapper.style.display = 'none';
            if (testRulersWrapper) testRulersWrapper.style.display = 'none';
            toggleRulers.innerHTML = '<i class="fa-solid fa-eye"></i> Cetvelleri Aç';
        }
    });

    // Arrow navigation
    document.getElementById('write-prev-btn').addEventListener('click', navigateWritingPrev);
    document.getElementById('write-next-btn').addEventListener('click', navigateWritingNext);
    document.getElementById('write-letter-speak').addEventListener('click', () => {
        const list = getActiveAlphabetList();
        if (list[state.writeIndex]) {
            speakText(list[state.writeIndex].print, getSpeakLangCode());
        }
    });

    // Run initial resize
    setTimeout(() => {
        resizeCanvas(writingCanvas, canvasContext);
        redrawCanvasGrid();
    }, 100);
}

// Drag ruler using handle directly
function setupRulerDrag(rulerEl, inputEl, callback) {
    const handle = rulerEl.querySelector('.ruler-handle');
    let isDragging = false;

    function handleStart(e) {
        isDragging = true;
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'ns-resize';
    }

    function handleMove(e) {
        if (!isDragging) return;
        const parent = rulerEl.parentElement;
        const rect = parent.getBoundingClientRect();
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        if (!clientY) return;
        
        let relativeY = clientY - rect.top;
        let percentage = (relativeY / rect.height) * 100;
        percentage = Math.max(5, Math.min(95, percentage)); // boundary limits

        inputEl.value = Math.round(percentage);
        callback();
    }

    function handleEnd() {
        if (!isDragging) return;
        isDragging = false;
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
    }

    handle.addEventListener('mousedown', handleStart);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);

    // Touch
    handle.addEventListener('touchstart', handleStart);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleEnd);
}

function resizeCanvas(canvas, context) {
    if (!canvas) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    
    // Check if we need to preserve existing drawings
    let tempImage = null;
    if (canvas.width > 0 && canvas.height > 0) {
        try {
            tempImage = context.getImageData(0, 0, canvas.width, canvas.height);
        } catch (e) {
            console.warn("Could not save canvas drawing before resize:", e);
        }
    }
    
    canvas.width = rect.width - 20; // accounting for borders
    canvas.height = rect.height - 20;
    
    // Restore drawing
    if (tempImage) {
        try {
            context.putImageData(tempImage, 0, 0);
        } catch (e) {
            console.warn("Could not restore canvas drawing after resize:", e);
        }
    }
}

function clearCanvas(canvas, context) {
    if (!canvas) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (canvas.id === 'writing-canvas') {
        canvasHistory = [];
    } else {
        testCanvasHistory = [];
    }
}

function saveCanvasState() {
    canvasHistory.push(canvasContext.getImageData(0, 0, writingCanvas.width, writingCanvas.height));
    if (canvasHistory.length > 25) {
        canvasHistory.shift();
    }
}

function undoCanvasAction() {
    if (canvasHistory.length > 0) {
        const previousState = canvasHistory.pop();
        canvasContext.putImageData(previousState, 0, 0);
    } else {
        canvasContext.clearRect(0, 0, writingCanvas.width, writingCanvas.height);
    }
}

function startDrawing(e) {
    state.isDrawing = true;
    saveCanvasState();
    
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const context = this.getContext('2d');
    context.beginPath();
    context.moveTo(x, y);
    
    // Chalk texture properties
    context.lineCap = 'round';
    context.lineJoin = 'round';
    
    if (state.drawMode === 'eraser') {
        context.globalCompositeOperation = 'destination-out';
        context.lineWidth = state.drawSize * 3; // Make eraser larger than pencil size
        context.shadowBlur = 0;
    } else {
        context.globalCompositeOperation = 'source-over';
        context.strokeStyle = state.drawColor;
        context.lineWidth = state.drawSize;
        // Shadow creates the chalky dust feel
        context.shadowColor = 'rgba(255, 255, 255, 0.4)';
        context.shadowBlur = 2;
    }
}

function draw(e) {
    if (!state.isDrawing) return;
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const context = this.getContext('2d');
    context.lineTo(x, y);
    context.stroke();
}

function stopDrawing() {
    state.isDrawing = false;
}

function redrawCanvasGrid() {
    // Grid handles are drawn in CSS on top of chalkboard container
}

// Populate reference cards based on index
function loadWritingLetter() {
    const list = getActiveAlphabetList();
    if (list.length === 0) return;
    
    if (state.writeIndex >= list.length) {
        state.writeIndex = 0;
    }
    
    const item = list[state.writeIndex];
    
    document.getElementById('write-letter-index').textContent = state.writeIndex + 1;
    document.getElementById('write-letter-name').textContent = item.name;
    document.getElementById('write-letter-trans').textContent = item.trans || item.name;
    
    // Set numeric box visibility
    const numBox = document.getElementById('write-letter-numeric-box');
    if (state.currentLanguage === 'hebrew') {
        numBox.style.display = 'flex';
        document.getElementById('write-letter-numeric').textContent = item.value;
    } else {
        numBox.style.display = 'none';
    }
    
    // Render letters
    const displayBox = document.getElementById('write-letter-display-box');
    const traceWatermark = document.getElementById('trace-watermark');
    
    displayBox.innerHTML = '';
    traceWatermark.innerHTML = '';
    
    if (state.currentLanguage === 'hebrew') {
        // Show print and cursive side-by-side
        displayBox.innerHTML = `
            <div class="hebrew-display-container">
                <div class="hebrew-char-box">
                    <span class="char">${item.print}</span>
                    <span class="lbl">Matbu (Print)</span>
                </div>
                <div class="hebrew-char-box">
                    <svg class="char-svg" viewBox="0 0 100 100">
                        <path d="${item.cursive}"></path>
                    </svg>
                    <span class="lbl">El Yazısı (Cursive)</span>
                </div>
            </div>
        `;
        
        // Show cursive watermark for tracing
        traceWatermark.innerHTML = `
            <svg class="watermark-svg" viewBox="0 0 100 100">
                <path d="${item.cursive}"></path>
            </svg>
        `;
    } else {
        // Japanese print (Hiragana/Katakana)
        displayBox.innerHTML = `
            <div class="japanese-display-container">
                <span class="char">${item.print}</span>
            </div>
        `;
        
        // Japanese text watermark for tracing
        traceWatermark.innerHTML = `
            <span class="watermark-text">${item.print}</span>
        `;
    }
    
    if (state.traceWatermarkVisible) {
        traceWatermark.classList.add('active');
    } else {
        traceWatermark.classList.remove('active');
    }
    
    // Highlight grid index
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((cell, idx) => {
        if (idx === state.writeIndex) {
            cell.classList.add('active');
            
            // Container-bounded scrolling that never jumps the window viewport scroll
            const gridContainer = document.getElementById('write-letter-grid');
            if (gridContainer && cell) {
                const containerTop = gridContainer.scrollTop;
                const containerBottom = containerTop + gridContainer.clientHeight;
                const elemTop = cell.offsetTop - gridContainer.offsetTop;
                const elemBottom = elemTop + cell.clientHeight;
                
                if (elemTop < containerTop) {
                    gridContainer.scrollTop = elemTop;
                } else if (elemBottom > containerBottom) {
                    gridContainer.scrollTop = elemBottom - gridContainer.clientHeight;
                }
            }
        } else {
            cell.classList.remove('active');
        }
    });
}

function navigateWritingPrev() {
    const list = getActiveAlphabetList();
    if (state.writeIndex > 0) {
        state.writeIndex--;
    } else {
        state.writeIndex = list.length - 1;
    }
    loadWritingLetter();
    clearCanvas(writingCanvas, canvasContext);
    
    // Play pronunciation automatically
    if (list[state.writeIndex]) {
        speakText(list[state.writeIndex].print, getSpeakLangCode());
    }
}

function navigateWritingNext() {
    const list = getActiveAlphabetList();
    if (state.writeIndex < list.length - 1) {
        state.writeIndex++;
    } else {
        state.writeIndex = 0;
    }
    loadWritingLetter();
    clearCanvas(writingCanvas, canvasContext);
    
    // Play pronunciation automatically
    if (list[state.writeIndex]) {
        speakText(list[state.writeIndex].print, getSpeakLangCode());
    }
}

// --- TAB 2: FLASHCARDS ---

function initializeFlashcards() {
    const cardElement = document.getElementById('flash-card-element');
    cardElement.addEventListener('click', flipFlashcard);
    
    document.getElementById('flash-prev').addEventListener('click', navigateFlashcardPrev);
    document.getElementById('flash-next').addEventListener('click', navigateFlashcardNext);
    document.getElementById('flash-flip').addEventListener('click', flipFlashcard);
    document.getElementById('flash-restart-btn').addEventListener('click', resetFlashcardSession);
    
    document.getElementById('flash-back-speak').addEventListener('click', (e) => {
        e.stopPropagation(); // Avoid flipping when playing audio
        const currentItem = state.flashActiveList[state.flashIndex];
        if (currentItem) {
            speakText(currentItem.print, getSpeakLangCode());
        }
    });
    
    // Handle mode selection (ordered vs random)
    const modeBtns = document.querySelectorAll('#tab-flashcards .radio-btn');
    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.flashMode = btn.getAttribute('data-mode');
            resetFlashcardSession();
        });
    });

    // Auto timing dropdown
    const selectTime = document.getElementById('flashcard-time');
    selectTime.addEventListener('change', () => {
        resetFlashcardTimer();
    });
}

function resetFlashcardSession() {
    stopFlashcardTimer();
    const sourceList = getActiveAlphabetList();
    
    if (state.flashMode === 'random') {
        // Shuffle copy
        state.flashActiveList = [...sourceList].sort(() => Math.random() - 0.5);
    } else {
        state.flashActiveList = [...sourceList];
    }
    
    state.flashIndex = 0;
    
    document.getElementById('flash-card-total').textContent = state.flashActiveList.length;
    renderFlashcardContent();
}

function renderFlashcardContent() {
    if (state.flashActiveList.length === 0) return;
    
    const cardElement = document.getElementById('flash-card-element');
    cardElement.classList.remove('flipped');
    
    const item = state.flashActiveList[state.flashIndex];
    
    // Progress
    document.getElementById('flash-card-current').textContent = state.flashIndex + 1;
    const progressPerc = ((state.flashIndex + 1) / state.flashActiveList.length) * 100;
    document.getElementById('flash-card-progress').style.width = `${progressPerc}%`;
    
    // Set labels
    const currentLangText = state.currentLanguage === 'hebrew' ? 'İbranice' : 'Japonca';
    document.getElementById('flash-front-lang').textContent = currentLangText;
    document.getElementById('flash-back-lang').textContent = currentLangText;
    
    // Symbol
    document.getElementById('flash-front-symbol').textContent = item.print;
    
    // Name
    document.getElementById('flash-back-name').textContent = item.name;
    document.getElementById('flash-back-trans').textContent = item.trans || item.name;
    
    const secondaryLabel = document.getElementById('flash-front-secondary');
    const extraRow = document.getElementById('flash-back-extra-row');
    const extraVal = document.getElementById('flash-back-extra');
    
    if (state.currentLanguage === 'hebrew') {
        secondaryLabel.style.display = 'block';
        secondaryLabel.textContent = `Matbu Harf`;
        extraRow.style.display = 'flex';
        extraVal.textContent = item.value;
    } else {
        secondaryLabel.style.display = 'none';
        extraRow.style.display = 'none';
    }
    
    resetFlashcardTimer();
}

function flipFlashcard() {
    const cardElement = document.getElementById('flash-card-element');
    cardElement.classList.toggle('flipped');
}

function navigateFlashcardPrev() {
    if (state.flashIndex > 0) {
        state.flashIndex--;
    } else {
        state.flashIndex = state.flashActiveList.length - 1;
    }
    renderFlashcardContent();
}

function navigateFlashcardNext() {
    if (state.flashIndex < state.flashActiveList.length - 1) {
        state.flashIndex++;
    } else {
        state.flashIndex = 0;
    }
    renderFlashcardContent();
}

// Timer mechanics
function stopFlashcardTimer() {
    if (state.flashTimer) {
        clearInterval(state.flashTimer);
        state.flashTimer = null;
    }
    document.getElementById('timer-bar').style.width = '0%';
}

function resetFlashcardTimer() {
    stopFlashcardTimer();
    
    const timeVal = parseInt(document.getElementById('flashcard-time').value);
    if (timeVal === 0) return; // Manuel mode
    
    const timerBar = document.getElementById('timer-bar');
    let width = 0;
    const intervalTime = 50; // ms
    const totalSteps = (timeVal * 1000) / intervalTime;
    let currentStep = 0;
    
    state.flashTimer = setInterval(() => {
        currentStep++;
        width = (currentStep / totalSteps) * 100;
        timerBar.style.width = `${width}%`;
        
        if (currentStep >= totalSteps) {
            stopFlashcardTimer();
            flipFlashcard();
            
            // Automatically queue next card after 3 seconds on back side
            setTimeout(() => {
                if (state.currentTab === 'tab-flashcards' && !state.flashTimer && document.getElementById('flashcard-time').value > 0) {
                    navigateFlashcardNext();
                }
            }, 3000);
        }
    }, intervalTime);
}

// --- TAB 3: DAILY CONVERSATION PHRASES ---

function initializePhrases() {
    document.getElementById('add-category-btn').addEventListener('click', () => {
        openModal('modal-add-category');
    });
    
    document.getElementById('add-phrase-btn').addEventListener('click', () => {
        openModal('modal-add-phrase');
    });
    
    document.getElementById('save-category-btn').addEventListener('click', saveNewCategory);
    document.getElementById('save-phrase-btn').addEventListener('click', saveNewPhrase);
    
    // Close modal triggers
    document.querySelectorAll('.modal-close, [data-modal]').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target.className.includes('modal') || e.target.className.includes('modal-close') || e.target.hasAttribute('data-modal')) {
                const modalId = e.target.getAttribute('data-modal') || e.target.closest('.modal').id;
                closeModal(modalId);
            }
        });
    });

    // Bind Radio buttons in add phrase modal
    const phraseRadioBtns = document.querySelectorAll('#new-phrase-lang-group .radio-btn');
    phraseRadioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            phraseRadioBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function renderCategories() {
    const listWrapper = document.getElementById('category-list-wrapper');
    listWrapper.innerHTML = '';
    
    state.categories.forEach(cat => {
        const item = document.createElement('div');
        item.className = `category-item ${state.selectedCategoryId === cat.id ? 'active' : ''}`;
        
        // Find phrase count
        const count = state.phrases.filter(p => p.categoryId === cat.id && p.lang === state.currentLanguage).length;
        
        item.innerHTML = `
            <span>${cat.name}</span>
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 11px; opacity: 0.6;">${count}</span>
                ${!DEFAULT_CATEGORIES.some(dc => dc.id === cat.id) ? `<button class="delete-cat-btn" data-id="${cat.id}"><i class="fa-solid fa-trash"></i></button>` : ''}
            </div>
        `;
        
        item.addEventListener('click', (e) => {
            if (e.target.closest('.delete-cat-btn')) return; // ignore delete trigger
            state.selectedCategoryId = cat.id;
            document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
            item.classList.add('active');
            
            document.getElementById('current-category-title').textContent = cat.name;
            renderPhrases();
        });
        
        // Delete category binder
        const delBtn = item.querySelector('.delete-cat-btn');
        if (delBtn) {
            delBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm('Bu kategoriyi ve içerisindeki tüm cümleleri silmek istediğinize emin misiniz?')) {
                    deleteCategory(cat.id);
                }
            });
        }
        
        listWrapper.appendChild(item);
    });
}

function renderPhrases() {
    const gridWrapper = document.getElementById('phrases-grid-wrapper');
    gridWrapper.innerHTML = '';
    
    const activePhrases = state.phrases.filter(p => p.categoryId === state.selectedCategoryId && p.lang === state.currentLanguage);
    
    document.getElementById('current-category-count').textContent = `${activePhrases.length} Cümle`;
    
    if (activePhrases.length === 0) {
        gridWrapper.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fa-solid fa-folder-open" style="font-size: 40px; margin-bottom: 12px; display: block;"></i>
                Bu kategoride henüz ${state.currentLanguage === 'hebrew' ? 'İbranice' : 'Japonca'} cümle eklenmemiş. "Yeni Kart Ekle" butonuna basarak ekleyebilirsiniz!
            </div>
        `;
        return;
    }
    
    activePhrases.forEach((phrase, idx) => {
        const card = document.createElement('div');
        card.className = 'glass-card phrase-card';
        
        card.innerHTML = `
            <button class="phrase-delete-btn" title="Cümleyi Sil"><i class="fa-solid fa-xmark"></i></button>
            <div class="phrase-text-group">
                <div class="phrase-original">${phrase.original}</div>
                <div class="phrase-transcription">Okunuş: ${phrase.trans}</div>
                <div class="phrase-meaning">${phrase.meaning}</div>
            </div>
            <div class="phrase-footer">
                <button class="speak-circle-btn"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        `;
        
        // Listeners
        card.querySelector('.phrase-delete-btn').addEventListener('click', () => {
            if (confirm('Bu konuşma kartını silmek istiyor musunuz?')) {
                deletePhrase(phrase);
            }
        });
        
        card.querySelector('.speak-circle-btn').addEventListener('click', () => {
            speakText(phrase.original, getSpeakLangCode());
        });
        
        gridWrapper.appendChild(card);
    });
}

function saveNewCategory() {
    const input = document.getElementById('new-category-name');
    const name = input.value.trim();
    
    if (!name) return;
    
    const newCat = {
        id: 'cat-' + generateId(),
        name: name
    };
    
    state.categories.push(newCat);
    state.selectedCategoryId = newCat.id;
    saveCategories();
    
    input.value = '';
    closeModal('modal-add-category');
    
    document.getElementById('current-category-title').textContent = newCat.name;
    renderCategories();
    renderPhrases();
}

function saveNewPhrase() {
    const originalInput = document.getElementById('new-phrase-original');
    const transInput = document.getElementById('new-phrase-trans');
    const meaningInput = document.getElementById('new-phrase-meaning');
    
    const original = originalInput.value.trim();
    const trans = transInput.value.trim();
    const meaning = meaningInput.value.trim();
    
    const activeLangBtn = document.querySelector('#new-phrase-lang-group .radio-btn.active');
    const lang = activeLangBtn.getAttribute('data-val');
    
    if (!original || !trans || !meaning) {
        alert('Lütfen tüm alanları doldurun.');
        return;
    }
    
    const newPhrase = {
        categoryId: state.selectedCategoryId,
        lang: lang,
        original: original,
        trans: trans,
        meaning: meaning
    };
    
    state.phrases.push(newPhrase);
    savePhrases();
    
    // Reset values
    originalInput.value = '';
    transInput.value = '';
    meaningInput.value = '';
    
    closeModal('modal-add-phrase');
    
    renderCategories();
    renderPhrases();
}

function deleteCategory(catId) {
    state.categories = state.categories.filter(c => c.id !== catId);
    state.phrases = state.phrases.filter(p => p.categoryId !== catId);
    saveCategories();
    savePhrases();
    
    state.selectedCategoryId = 'cat-meeting';
    document.getElementById('current-category-title').textContent = 'Tanışma & Selamlaşma';
    renderCategories();
    renderPhrases();
}

function deletePhrase(phraseObj) {
    state.phrases = state.phrases.filter(p => !(p.categoryId === phraseObj.categoryId && p.original === phraseObj.original && p.lang === phraseObj.lang));
    savePhrases();
    renderCategories();
    renderPhrases();
}

// --- TAB 4: TEST ALANI ---

let testCanvas, testCanvasContext;
let testCanvasHistory = [];
let isTestCanvasDrawing = false;

function initializeTests() {
    const cards = document.querySelectorAll('.test-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const testType = card.getAttribute('data-test');
            startTest(testType);
        });
    });
    
    document.querySelectorAll('.back-to-menu-btn').forEach(btn => {
        btn.addEventListener('click', exitActiveTest);
    });

    document.getElementById('match-refresh-btn').addEventListener('click', setupMatchingGame);
    document.getElementById('quiz-next-btn').addEventListener('click', loadQuizQuestion);
    document.getElementById('write-test-start-q').addEventListener('click', startWritingQuestion);
    document.getElementById('write-test-reveal-btn').addEventListener('click', revealWritingQuestion);
    
    // Grading
    document.getElementById('btn-grade-correct').addEventListener('click', () => submitWritingGrade(true));
    document.getElementById('btn-grade-incorrect').addEventListener('click', () => submitWritingGrade(false));

    // Test Canvas init
    testCanvas = document.getElementById('test-writing-canvas');
    testCanvasContext = testCanvas.getContext('2d');
    
    testCanvas.addEventListener('mousedown', startTestDrawing);
    testCanvas.addEventListener('mousemove', drawTestCanvas);
    testCanvas.addEventListener('mouseup', stopTestDrawing);
    testCanvas.addEventListener('mouseout', stopTestDrawing);
    
    // Touch support for Test Canvas
    testCanvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousedown', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        testCanvas.dispatchEvent(mouseEvent);
    });
    
    testCanvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        testCanvas.dispatchEvent(mouseEvent);
    });
    
    testCanvas.addEventListener('touchend', (e) => {
        e.preventDefault();
        const mouseEvent = new MouseEvent('mouseup', {});
        testCanvas.dispatchEvent(mouseEvent);
    });

    document.getElementById('test-canvas-clear').addEventListener('click', () => {
        clearCanvas(testCanvas, testCanvasContext);
    });

    document.getElementById('test-canvas-undo').addEventListener('click', () => {
        if (testCanvasHistory.length > 0) {
            const previousState = testCanvasHistory.pop();
            testCanvasContext.putImageData(previousState, 0, 0);
        } else {
            testCanvasContext.clearRect(0, 0, testCanvas.width, testCanvas.height);
        }
    });
}

function startTest(testType) {
    document.getElementById('tests-menu').classList.add('hidden');
    document.querySelectorAll('.test-workspace').forEach(w => w.classList.add('hidden'));
    
    state.activeTest = testType;
    
    const activeWorkspace = document.getElementById(`test-${testType}`);
    activeWorkspace.classList.remove('hidden');
    
    switch(testType) {
        case 'matching':
            setupMatchingGame();
            break;
        case 'quiz':
            setupQuizGame();
            break;
        case 'writing-test':
            setupWritingTest();
            break;
    }
}

function exitActiveTest() {
    stopWritingTestCountdown();
    document.getElementById('tests-menu').classList.remove('hidden');
    document.querySelectorAll('.test-workspace').forEach(w => w.classList.add('hidden'));
    state.activeTest = null;
}

// TEST 1: EŞLEŞTİRME OYUNU
function setupMatchingGame() {
    const list = getActiveAlphabetList();
    if (list.length < 5) return;
    
    // Choose 5 random items
    const pool = [...list].sort(() => Math.random() - 0.5).slice(0, 5);
    state.matchingPool = pool;
    state.matchingSelectedLeft = null;
    state.matchingSelectedRight = null;
    state.matchingScore = 0;
    state.matchingTotal = pool.length;
    
    document.getElementById('matching-score').textContent = '0';
    document.getElementById('matching-total').textContent = pool.length;
    
    // Prepare left column (characters shuffled)
    const leftPool = [...pool].sort(() => Math.random() - 0.5);
    const leftColumn = document.getElementById('match-left-column');
    leftColumn.innerHTML = '';
    
    leftPool.forEach(item => {
        const div = document.createElement('div');
        div.className = 'match-item left-item';
        div.textContent = item.print;
        div.setAttribute('data-id', item.name);
        
        div.addEventListener('click', () => {
            if (div.classList.contains('matched')) return;
            document.querySelectorAll('#match-left-column .match-item').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected');
            state.matchingSelectedLeft = item;
            checkMatchingPair();
        });
        
        leftColumn.appendChild(div);
    });
    
    // Prepare right column (pronunciations shuffled)
    const rightPool = [...pool].sort(() => Math.random() - 0.5);
    const rightColumn = document.getElementById('match-right-column');
    rightColumn.innerHTML = '';
    
    rightPool.forEach(item => {
        const div = document.createElement('div');
        div.className = 'match-item right-item';
        div.textContent = item.trans || item.name;
        div.setAttribute('data-id', item.name);
        
        div.addEventListener('click', () => {
            if (div.classList.contains('matched')) return;
            document.querySelectorAll('#match-right-column .match-item').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected');
            state.matchingSelectedRight = item;
            checkMatchingPair();
        });
        
        rightColumn.appendChild(div);
    });
}

function checkMatchingPair() {
    if (!state.matchingSelectedLeft || !state.matchingSelectedRight) return;
    
    const leftVal = state.matchingSelectedLeft.name;
    const rightVal = state.matchingSelectedRight.name;
    
    const leftEl = document.querySelector(`#match-left-column .match-item[data-id="${leftVal}"]`);
    const rightEl = document.querySelector(`#match-right-column .match-item[data-id="${rightVal}"]`);
    
    if (leftVal === rightVal) {
        // Correct Match
        leftEl.classList.remove('selected');
        rightEl.classList.remove('selected');
        leftEl.classList.add('matched');
        rightEl.classList.add('matched');
        
        state.matchingScore++;
        document.getElementById('matching-score').textContent = state.matchingScore;
        
        // Audio
        speakText(state.matchingSelectedLeft.print, getSpeakLangCode());
        
        if (state.matchingScore === state.matchingTotal) {
            setTimeout(() => {
                alert('Tebrikler! Tüm harfleri başarıyla eşleştirdiniz.');
                setupMatchingGame();
            }, 500);
        }
    } else {
        // Mismatch
        setTimeout(() => {
            leftEl.classList.remove('selected');
            rightEl.classList.remove('selected');
        }, 300);
    }
    
    state.matchingSelectedLeft = null;
    state.matchingSelectedRight = null;
}

// TEST 2: ÇOKTAN SEÇMELİ TEST
function setupQuizGame() {
    const list = getActiveAlphabetList();
    if (list.length < 4) return;
    
    // Choose 10 random items for pool
    state.quizPool = [...list].sort(() => Math.random() - 0.5).slice(0, 10);
    state.quizIndex = 0;
    state.quizScore = 0;
    
    document.getElementById('quiz-question-total').textContent = state.quizPool.length;
    document.getElementById('quiz-correct-count').textContent = '0';
    
    loadQuizQuestion();
}

function loadQuizQuestion() {
    if (state.quizIndex >= state.quizPool.length) {
        alert(`Test tamamlandı! Skorunuz: ${state.quizScore} / ${state.quizPool.length}`);
        exitActiveTest();
        return;
    }
    
    document.getElementById('quiz-question-current').textContent = state.quizIndex + 1;
    
    // Hide controls & feedback
    document.getElementById('quiz-feedback-box').classList.add('hidden');
    document.getElementById('quiz-controls-box').classList.add('hidden');
    
    const correctItem = state.quizPool[state.quizIndex];
    state.quizCurrentCorrect = correctItem;
    
    document.getElementById('quiz-character-box').textContent = correctItem.print;
    
    // Generate answers list
    const wrongAnswers = getActiveAlphabetList()
        .filter(item => item.name !== correctItem.name)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
        
    const options = [correctItem, ...wrongAnswers].sort(() => Math.random() - 0.5);
    
    const optionsWrapper = document.getElementById('quiz-options-wrapper');
    optionsWrapper.innerHTML = '';
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.textContent = opt.trans || opt.name;
        
        btn.addEventListener('click', () => {
            // Disable all buttons in option grid
            document.querySelectorAll('.quiz-option-btn').forEach(b => b.disabled = true);
            
            if (opt.name === correctItem.name) {
                btn.classList.add('correct');
                state.quizScore++;
                document.getElementById('quiz-correct-count').textContent = state.quizScore;
                showQuizFeedback(true);
            } else {
                btn.classList.add('incorrect');
                // Highlight correct button
                document.querySelectorAll('.quiz-option-btn').forEach(b => {
                    if (b.textContent === (correctItem.trans || correctItem.name)) {
                        b.classList.add('correct');
                    }
                });
                showQuizFeedback(false);
            }
            
            // Speak character
            speakText(correctItem.print, getSpeakLangCode());
            
            state.quizIndex++;
            document.getElementById('quiz-controls-box').classList.remove('hidden');
        });
        
        optionsWrapper.appendChild(btn);
    });
}

function showQuizFeedback(isCorrect) {
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const feedbackIcon = feedbackBox.querySelector('.feedback-icon i');
    const feedbackText = feedbackBox.querySelector('.feedback-text');
    
    feedbackBox.className = 'quiz-feedback'; // reset
    
    if (isCorrect) {
        feedbackBox.classList.add('correct');
        feedbackText.textContent = "Harika, doğru cevap!";
    } else {
        feedbackBox.classList.add('incorrect');
        feedbackText.textContent = `Yanlış cevap! Doğrusu: ${state.quizCurrentCorrect.trans || state.quizCurrentCorrect.name}`;
    }
    
    feedbackBox.classList.remove('hidden');
}

// TEST 3: 3 SANİYELİK YAZIM TESTİ
function setupWritingTest() {
    const list = getActiveAlphabetList();
    if (list.length === 0) return;
    
    state.writeTestPool = [...list].sort(() => Math.random() - 0.5);
    state.writeTestIndex = 0;
    state.writeTestScore = 0;
    state.writeTestTotal = 0;
    
    document.getElementById('write-test-score').textContent = '0';
    document.getElementById('write-test-total').textContent = '0';
    
    // Enable/Reset layout
    document.getElementById('write-test-start-q').classList.remove('hidden');
    document.getElementById('write-test-start-q').textContent = 'Testi Başlat (Sıradaki Harf)';
    document.getElementById('write-test-reveal-btn').classList.add('hidden');
    document.getElementById('write-test-comp-box').classList.add('hidden');
    
    document.getElementById('write-test-prompt-character').classList.remove('hidden');
    document.getElementById('write-test-prompt-character').textContent = '?';
    document.getElementById('write-test-hidden-character').classList.add('hidden');
    
    const input = document.getElementById('write-test-text-input');
    input.value = '';
    input.disabled = true;
    
    // Resize test canvas
    setTimeout(() => {
        resizeCanvas(testCanvas, testCanvasContext);
        clearCanvas(testCanvas, testCanvasContext);
    }, 100);
}

function startWritingQuestion() {
    if (state.writeTestIndex >= state.writeTestPool.length) {
        alert(`Tüm harfler tamamlandı! Başarı oranınız: ${state.writeTestScore} / ${state.writeTestTotal}`);
        setupWritingTest();
        return;
    }
    
    state.writeTestState = 'showing';
    clearCanvas(testCanvas, testCanvasContext);
    
    // Hide panels
    document.getElementById('write-test-comp-box').classList.add('hidden');
    document.getElementById('write-test-start-q').classList.add('hidden');
    document.getElementById('write-test-reveal-btn').classList.add('hidden');
    
    const item = state.writeTestPool[state.writeTestIndex];
    
    const promptBox = document.getElementById('write-test-prompt-character');
    promptBox.textContent = item.print;
    promptBox.classList.remove('hidden');
    document.getElementById('write-test-hidden-character').classList.add('hidden');
    
    const textInput = document.getElementById('write-test-text-input');
    textInput.value = '';
    textInput.disabled = true;
    
    // Start 3 second countdown
    let remainingMs = 3000;
    const countdownBar = document.getElementById('write-test-countdown');
    const timerLbl = document.getElementById('write-test-timer-lbl');
    
    countdownBar.style.width = '100%';
    timerLbl.textContent = 'Kalan Süre: 3.0s';
    
    const intervalTime = 50; // ms
    
    state.writeTestTimer = setInterval(() => {
        remainingMs -= intervalTime;
        const width = (remainingMs / 3000) * 100;
        countdownBar.style.width = `${width}%`;
        timerLbl.textContent = `Kalan Süre: ${(remainingMs / 1000).toFixed(1)}s`;
        
        if (remainingMs <= 0) {
            stopWritingTestCountdown();
            // Time out! Hide character
            promptBox.classList.add('hidden');
            document.getElementById('write-test-hidden-character').classList.remove('hidden');
            
            // Enable user inputs
            textInput.disabled = false;
            textInput.focus();
            
            state.writeTestState = 'hidden';
            
            document.getElementById('write-test-reveal-btn').classList.remove('hidden');
        }
    }, intervalTime);
}

function stopWritingTestCountdown() {
    if (state.writeTestTimer) {
        clearInterval(state.writeTestTimer);
        state.writeTestTimer = null;
    }
}

function revealWritingQuestion() {
    state.writeTestState = 'revealed';
    
    document.getElementById('write-test-reveal-btn').classList.add('hidden');
    
    const item = state.writeTestPool[state.writeTestIndex];
    
    // Setup comparison fields
    document.getElementById('comp-correct-symbol').textContent = item.print;
    document.getElementById('comp-correct-name').textContent = `${item.name} (${item.trans || ''})`;
    
    const userVal = document.getElementById('write-test-text-input').value.trim();
    document.getElementById('comp-user-name').textContent = userVal || '(Giriş Yapılmadı)';
    
    // Show comp card
    document.getElementById('write-test-comp-box').classList.remove('hidden');
}

function submitWritingGrade(isCorrect) {
    state.writeTestTotal++;
    if (isCorrect) {
        state.writeTestScore++;
    }
    
    document.getElementById('write-test-score').textContent = state.writeTestScore;
    document.getElementById('write-test-total').textContent = state.writeTestTotal;
    
    state.writeTestIndex++;
    state.writeTestState = 'idle';
    
    // Prepare next question view
    document.getElementById('write-test-comp-box').classList.add('hidden');
    document.getElementById('write-test-start-q').classList.remove('hidden');
    document.getElementById('write-test-start-q').textContent = 'Sıradaki Harfi Göster (3 Saniye)';
    
    document.getElementById('write-test-prompt-character').classList.remove('hidden');
    document.getElementById('write-test-prompt-character').textContent = '?';
    document.getElementById('write-test-hidden-character').classList.add('hidden');
    
    document.getElementById('write-test-text-input').value = '';
    document.getElementById('write-test-text-input').disabled = true;
    
    clearCanvas(testCanvas, testCanvasContext);
}

// TEST CANVAS DRAW MECHANICS
function startTestDrawing(e) {
    isTestCanvasDrawing = true;
    saveTestCanvasState();
    
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    testCanvasContext.beginPath();
    testCanvasContext.moveTo(x, y);
    
    testCanvasContext.lineCap = 'round';
    testCanvasContext.lineJoin = 'round';
    testCanvasContext.strokeStyle = 'rgba(255,255,255,0.85)';
    testCanvasContext.lineWidth = 5;
    testCanvasContext.shadowColor = 'rgba(255, 255, 255, 0.4)';
    testCanvasContext.shadowBlur = 2;
}

function drawTestCanvas(e) {
    if (!isTestCanvasDrawing) return;
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    testCanvasContext.lineTo(x, y);
    testCanvasContext.stroke();
}

function stopTestDrawing() {
    isTestCanvasDrawing = false;
}

function saveTestCanvasState() {
    testCanvasHistory.push(testCanvasContext.getImageData(0, 0, testCanvas.width, testCanvas.height));
    if (testCanvasHistory.length > 25) {
        testCanvasHistory.shift();
    }
}

// --- PWA SERVICE WORKER REGISTRATION ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => {
                console.log('LingoStudy Service Worker successfully registered!', reg.scope);
                
                // Watch for updates and automatically reload if active sw changes
                reg.addEventListener('updatefound', () => {
                    const newWorker = reg.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            console.log('New update available! Reloading page...');
                            window.location.reload();
                        }
                    });
                });
            })
            .catch(err => {
                console.warn('LingoStudy Service Worker registration failed:', err);
            });
    });
}

