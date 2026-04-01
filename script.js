// --- 1. МӘЛІМЕТТЕР ҚОРЫ (ТОЛЫҚ: ӘР ПӘНДЕ 20 СҰРАҚТАН) ---
const tests = [
    {
        id: 'math',
        title: 'Математика',
        icon: 'fa-square-root-variable',
        timeLimit: 2400, // 40 минут
        questions: [
            { text: "5<sup>x</sup> = 125 теңдеуін шешіңіз:", options: ["2", "3", "5", "4"], correct: 1 },
            { text: "f(x) = x<sup>3</sup> - 3x туындысы:", options: ["3x<sup>2</sup> - 3", "x<sup>2</sup> - 3", "3x<sup>2</sup> + 3", "3x"], correct: 0 },
            { text: "log<sub>3</sub> 81 мәні:", options: ["2", "3", "4", "9"], correct: 2 },
            { text: "sin<sup>2</sup> α + cos<sup>2</sup> α:", options: ["0", "1", "-1", "0.5"], correct: 1 },
            { text: "Арифметикалық прогрессия: a<sub>1</sub>=5, d=3. a<sub>10</sub>=?", options: ["30", "32", "35", "27"], correct: 1 },
            { text: "Шеңбердің теңдеуі:", options: ["y=kx+b", "x<sup>2</sup>+y<sup>2</sup>=R<sup>2</sup>", "ax<sup>2</sup>+bx+c=0", "S=πR<sup>2</sup>"], correct: 1 },
            { text: "lim<sub>x→0</sub> (sin x) / x:", options: ["0", "1", "∞", "-1"], correct: 1 },
            { text: "x<sup>2</sup> - 9 көбейткіштерге жіктеңіз:", options: ["(x-3)<sup>2</sup>", "(x+3)<sup>2</sup>", "(x-3)(x+3)", "(x-9)"], correct: 2 },
            { text: "Тіктөртбұрыш: 5 пен 12. Диагональ?", options: ["13", "17", "15", "14"], correct: 0 },
            { text: "∫ 2x dx:", options: ["x<sup>2</sup>+C", "2x<sup>2</sup>+C", "x+C", "1/2 x<sup>2</sup>"], correct: 0 },
            { text: "Тікбұрышты үшбұрыш: S=24, a=6. b=?", options: ["4", "6", "8", "10"], correct: 2 },
            { text: "Қосындысы 10, көбейтіндісі 21 болатын сандар:", options: ["3 және 7", "4 және 6", "2 және 8", "1 және 9"], correct: 0 },
            { text: "Конус: R=3, H=4. Жасаушысы?", options: ["5", "6", "7", "4.5"], correct: 0 },
            { text: "√144 + √25:", options: ["13", "17", "12", "15"], correct: 1 },
            { text: "y = sin x периоды:", options: ["π", "2π", "π/2", "3π"], correct: 1 },
            { text: "2<sup>3</sup> · 2<sup>2</sup>:", options: ["16", "32", "64", "12"], correct: 1 },
            { text: "Кубтың қыры 3 см. Көлемі?", options: ["9", "27", "18", "12"], correct: 1 },
            { text: "Бөлшекті қысқартыңыз: (x<sup>2</sup>-1)/(x-1)", options: ["x+1", "x-1", "x", "1"], correct: 0 },
            { text: "Векторлар коллинеар ма?", options: ["Иә", "Жоқ", "Кейде", "Білмеймін"], correct: 2 },
            { text: "180 градус радианмен:", options: ["π", "π/2", "2π", "3π/2"], correct: 0 }
        ]
    },
    {
        id: 'physics',
        title: 'Физика',
        icon: 'fa-atom',
        timeLimit: 2400,
        questions: [
            { text: "Энергия формуласы (Эйнштейн):", options: ["E=mc<sup>2</sup>", "F=ma", "P=UI", "Q=mcΔT"], correct: 0 },
            { text: "Ом заңы:", options: ["I=U/R", "P=A/t", "F=mg", "v=s/t"], correct: 0 },
            { text: "Еркін түсу үдеуі (g):", options: ["9.8 м/с²", "10.5 м/с²", "8.9 м/с²", "0 м/с²"], correct: 0 },
            { text: "Қуаттың бірлігі:", options: ["Джоуль", "Ватт", "Ньютон", "Паскаль"], correct: 1 },
            { text: "Гук заңы:", options: ["F=-kx", "F=ma", "E=mgh", "P=mv"], correct: 0 },
            { text: "Жарық жылдамдығы:", options: ["3 · 10<sup>8</sup> м/с", "330 м/с", "1000 м/с", "9 · 10<sup>9</sup> м/с"], correct: 0 },
            { text: "Архимед күші әсер етеді:", options: ["Тек суда", "Тек газда", "Сұйық пен газда", "Вакуумда"], correct: 2 },
            { text: "Кинетикалық энергия:", options: ["mv<sup>2</sup>/2", "mgh", "kx<sup>2</sup>/2", "ma"], correct: 0 },
            { text: "Жиілік бірлігі:", options: ["Герц", "Метр", "Секунд", "Ньютон"], correct: 0 },
            { text: "Изотермиялық процесте тұрақты:", options: ["P", "T", "V", "m"], correct: 1 },
            { text: "Заттың күйлері нешеу?", options: ["2", "3", "4", "5"], correct: 2 },
            { text: "Ток күшін өлшейді:", options: ["Амперметр", "Вольтметр", "Реостат", "Омметр"], correct: 0 },
            { text: "Ньютонның 2-заңы:", options: ["F=ma", "F=0", "F<sub>1</sub>=-F<sub>2</sub>", "a=v/t"], correct: 0 },
            { text: "Қысым формуласы:", options: ["P=F/S", "P=mg", "P=ρgh", "F=kx"], correct: 0 },
            { text: "Дыбыс қайда таралмайды?", options: ["Суда", "Ауада", "Темірде", "Вакуумда"], correct: 3 },
            { text: "Оптика нені зерттейді?", options: ["Дыбыс", "Жарық", "Қозғалыс", "Жылу"], correct: 1 },
            { text: "Абсолют нөл температура:", options: ["0 K", "0 C", "-100 C", "273 K"], correct: 0 },
            { text: "Заряд бірлігі:", options: ["Кулон", "Ампер", "Вольт", "Ом"], correct: 0 },
            { text: "Тығыздық формуласы:", options: ["ρ=m/V", "V=S/t", "m=Fa", "P=mg"], correct: 0 },
            { text: "Магнит өрісінің көзі:", options: ["Қозғалыстағы заряд", "Тыныш заряд", "Масса", "Температура"], correct: 0 }
        ]
    },
    {
        id: 'history',
        title: 'Қазақстан тарихы',
        icon: 'fa-landmark',
        timeLimit: 1800,
        questions: [
            { text: "Алтын адам табылған жер:", options: ["Есік", "Берел", "Шілікті", "Тараз"], correct: 0 },
            { text: "Қазақ хандығы құрылды:", options: ["1465", "1550", "1723", "1991"], correct: 0 },
            { text: "Абылай ханның шын аты:", options: ["Әбілмансұр", "Темучин", "Бөгенбай", "Ерасыл"], correct: 0 },
            { text: "«Бақытсыз Жамал» авторы:", options: ["М.Дулатов", "М.Жұмабаев", "Ж.Аймауытов", "С.Көбеев"], correct: 0 },
            { text: "1986 жылғы оқиға:", options: ["Желтоқсан", "Ақпан", "Қазан", "Отан соғысы"], correct: 0 },
            { text: "Түркі қағанатының негізін қалаушы:", options: ["Бумын", "Мөде", "Шыңғыс", "Керей"], correct: 0 },
            { text: "Ұлы Жібек жолы басталады:", options: ["Қытай", "Үндістан", "Парсы", "Рим"], correct: 0 },
            { text: "Қ.Сәтбаев кім?", options: ["Геолог", "Жазушы", "Хан", "Батыр"], correct: 0 },
            { text: "Тәуелсіздік монументі:", options: ["Алматы", "Астана", "Түркістан", "Шымкент"], correct: 0 },
            { text: "«Жеті жарғы» авторы:", options: ["Тәуке хан", "Қасым", "Есім", "Абылай"], correct: 0 },
            { text: "Ашаршылық жылдары:", options: ["1931-33", "1941-45", "1916", "1986"], correct: 0 },
            { text: "Ресейге қосылу басталды:", options: ["1731", "1861", "1550", "1917"], correct: 0 },
            { text: "Кенесары хан көтерілісі:", options: ["1837-1847", "1773-1775", "1916", "1801"], correct: 0 },
            { text: "Тұңғыш президент сайланды:", options: ["1991", "1990", "1995", "1986"], correct: 0 },
            { text: "Астана Ақмолаға көшірілді:", options: ["1997", "1991", "2000", "1995"], correct: 0 },
            { text: "Бес қарудың бірі:", options: ["Садақ", "Мылтық", "Танк", "Ұшақ"], correct: 0 },
            { text: "Әл-Фараби туған қала:", options: ["Отырар", "Түркістан", "Сайрам", "Тараз"], correct: 0 },
            { text: "Орта ғасырдағы қала:", options: ["Сығанақ", "Қарағанды", "Павлодар", "Рудный"], correct: 0 },
            { text: "Ұлы Отан соғысы басталды:", options: ["1941", "1939", "1945", "1914"], correct: 0 },
            { text: "Қазақстан БҰҰ-ға мүше болды:", options: ["1992", "1991", "2000", "1995"], correct: 0 }
        ]
    },
    {
        id: 'kazakh',
        title: 'Қазақ тілі',
        icon: 'fa-pen-nib',
        timeLimit: 1200,
        questions: [
            { text: "Септіктер саны:", options: ["7", "6", "8", "9"], correct: 0 },
            { text: "Бітеу буынды сөз:", options: ["Бұлт", "Аға", "Келе", "Дала"], correct: 0 },
            { text: "Түбір сөз:", options: ["Көз", "Көзілдірік", "Көзді", "Көзде"], correct: 0 },
            { text: "Синонимдер:", options: ["Әдемі, сұлу", "Ақ, қара", "Биік, аласа", "Үлкен, кіші"], correct: 0 },
            { text: "Зат есім сұрақтары:", options: ["Кім? Не?", "Қандай?", "Не істеді?", "Қалай?"], correct: 0 },
            { text: "Мемлекеттік тіл:", options: ["Қазақ", "Орыс", "Ағылшын", "Түрік"], correct: 0 },
            { text: "Дауысты дыбыстар:", options: ["А, О, Ұ", "Б, В, Г", "К, Қ, Т", "С, Ш, Ж"], correct: 0 },
            { text: "Тұйық буынды сөз:", options: ["Ант", "Ата", "Бала", "Кереге"], correct: 0 },
            { text: "Көптік жалғау:", options: ["-лар, -лер", "-ның, -нің", "-ды, -ді", "-мен"], correct: 0 },
            { text: "Антоним сөздер:", options: ["Алыс-жақын", "Жақсы-керемет", "Үлкен-дәу", "Оқу-тоқу"], correct: 0 },
            { text: "Қазақ алфавитіндегі әріп саны:", options: ["42", "26", "33", "40"], correct: 0 },
            { text: "Етістік сұрағы:", options: ["Не істеді?", "Кім?", "Қандай?", "Қанша?"], correct: 0 },
            { text: "Жіңішке дауыстылар:", options: ["ә, і, ү", "а, о, ұ", "б, в, г", "ш, щ"], correct: 0 },
            { text: "Сын есім нені білдіреді?", options: ["Заттың сынын", "Қимылды", "Атын", "Санын"], correct: 0 },
            { text: "Жалқы есім:", options: ["Алматы", "қала", "өзен", "тау"], correct: 0 },
            { text: "Мақалды аяқта: Отан - оттан да ...", options: ["ыстық", "суық", "үлкен", "жақын"], correct: 0 },
            { text: "Буын түрлері:", options: ["3", "2", "4", "5"], correct: 0 },
            { text: "Үндестік заңы нешеге бөлінеді?", options: ["2", "3", "4", "жоқ"], correct: 0 },
            { text: "Бір буынды сөз:", options: ["Доп", "Орындық", "Кітап", "Қалам"], correct: 0 },
            { text: "Сөйлем түрлері:", options: ["Хабарлы, сұраулы, лепті", "Ашық, жабық", "Оңай, қиын", "Ұзын, қысқа"], correct: 0 }
        ]
    },
    {
        id: 'chemistry',
        title: 'Химия',
        icon: 'fa-flask',
        timeLimit: 1500,
        questions: [
            { text: "Су формуласы:", options: ["H<sub>2</sub>O", "CO<sub>2</sub>", "H<sub>2</sub>SO<sub>4</sub>", "NaCl"], correct: 0 },
            { text: "Периодтық заң авторы:", options: ["Менделеев", "Ломоносов", "Бутлеров", "Дальтон"], correct: 0 },
            { text: "Сілтілік металл:", options: ["Na", "Fe", "Cu", "Al"], correct: 0 },
            { text: "Ауа құрамында ең көп:", options: ["Азот", "Оттегі", "СО<sub>2</sub>", "Сутегі"], correct: 0 },
            { text: "Күкірт қышқылы:", options: ["H<sub>2</sub>SO<sub>4</sub>", "HCl", "HNO<sub>3</sub>", "H<sub>3</sub>PO<sub>4</sub>"], correct: 0 },
            { text: "Тұз қышқылы:", options: ["HCl", "HF", "HBr", "HI"], correct: 0 },
            { text: "Ас тұзы:", options: ["NaCl", "KCl", "Na<sub>2</sub>SO<sub>4</sub>", "CaCO<sub>3</sub>"], correct: 0 },
            { text: "Ең жеңіл газ:", options: ["Сутегі", "Гелий", "Азот", "Оттегі"], correct: 0 },
            { text: "Металл емес:", options: ["Күкірт", "Темір", "Алтын", "Мыс"], correct: 0 },
            { text: "Органикалық химия нені зерттейді?", options: ["Көміртегі қосылыстарын", "Металдарды", "Тұздарды", "Суды"], correct: 0 },
            { text: "Глюкоза формуласы:", options: ["C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>", "C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>", "CH<sub>4</sub>", "C<sub>2</sub>H<sub>5</sub>OH"], correct: 0 },
            { text: "Атом құрылысы:", options: ["Ядро және электрон", "Тек ядро", "Тек электрон", "Молекула"], correct: 0 },
            { text: "Оттегі валенттілігі:", options: ["II", "I", "III", "IV"], correct: 0 },
            { text: "Сұйық металл:", options: ["Сынап", "Алтын", "Күміс", "Қорғасын"], correct: 0 },
            { text: "рН ортасы 7-ден төмен болса:", options: ["Қышқыл", "Сілті", "Бейтарап", "Тұз"], correct: 0 },
            { text: "Кальций сүйекке керек пе?", options: ["Иә", "Жоқ", "Зиян", "Білмеймін"], correct: 0 },
            { text: "Темір таты:", options: ["Тотығу", "Балқу", "Қату", "Булану"], correct: 0 },
            { text: "Ең қатты зат:", options: ["Алмаз", "Графит", "Шыны", "Темір"], correct: 0 },
            { text: "Спирт формуласы:", options: ["C<sub>2</sub>H<sub>5</sub>OH", "CH<sub>3</sub>COOH", "HCHO", "CH<sub>4</sub>"], correct: 0 },
            { text: "Моль нені өлшейді?", options: ["Зат мөлшерін", "Массаны", "Көлемді", "Уақытты"], correct: 0 }
        ]
    },
    {
        id: 'biology',
        title: 'Биология',
        icon: 'fa-dna',
        timeLimit: 1200,
        questions: [
            { text: "Жасуша энергия станциясы:", options: ["Митохондрия", "Рибосома", "Ядро", "Лизосома"], correct: 0 },
            { text: "Фотосинтез жүреді:", options: ["Хлоропласт", "Вакуоль", "Цитоплазма", "Гольджи"], correct: 0 },
            { text: "Ең ұзын сүйек:", options: ["Ортан жілік", "Асық жілік", "Қабырға", "Жауырын"], correct: 0 },
            { text: "ДНҚ ашқандар:", options: ["Уотсон мен Крик", "Дарвин", "Павлов", "Мендель"], correct: 0 },
            { text: "Адам жүрегі неше камералы?", options: ["4", "3", "2", "1"], correct: 0 },
            { text: "Тұқым қуалаушылықты зерттейді:", options: ["Генетика", "Ботаника", "Зоология", "Анатомия"], correct: 0 },
            { text: "Витамин C жетіспесе:", options: ["Қырқұлақ", "Ақшам соқыр", "Рахит", "Тұмау"], correct: 0 },
            { text: "Адамда неше хромосома бар?", options: ["46", "48", "23", "42"], correct: 0 },
            { text: "Өсімдік мүшесі емес:", options: ["Бауыр", "Тамыр", "Сабақ", "Жапырақ"], correct: 0 },
            { text: "Бактериялар:", options: ["Ядросыз", "Ядролы", "Көп жасушалы", "Вирус"], correct: 0 },
            { text: "Қан қызыл түсті, себебі:", options: ["Гемоглобин", "Плазма", "Лейкоцит", "Су"], correct: 0 },
            { text: "Эволюция теориясы:", options: ["Дарвин", "Ламарк", "Линней", "Гук"], correct: 0 },
            { text: "Жүйке жүйесінің бірлігі:", options: ["Нейрон", "Нефрон", "Аксон", "Дендрит"], correct: 0 },
            { text: "Инсулин қайда бөлінеді?", options: ["Ұйқы безі", "Бауыр", "Бүйрек", "Өкпе"], correct: 0 },
            { text: "Қайсысы жыртқыш?", options: ["Қасқыр", "Қоян", "Ешкі", "Сиыр"], correct: 0 },
            { text: "Саңырауқұлақтар:", options: ["Өз патшалығы", "Өсімдік", "Жануар", "Бактерия"], correct: 0 },
            { text: "Ең үлкен без:", options: ["Бауыр", "Қалқанша", "Гипофиз", "Бүйрекүсті"], correct: 0 },
            { text: "Көру мүшесі:", options: ["Көз", "Құлақ", "Мұрын", "Тіл"], correct: 0 },
            { text: "Тыныс алу мүшесі:", options: ["Өкпе", "Жүрек", "Асқазан", "Бүйрек"], correct: 0 },
            { text: "Вирустар:", options: ["Жасушасыз", "Ядролы", "Бактерия", "Өсімдік"], correct: 0 }
        ]
    }
];

// --- 2. ЖҮЙЕ ЛОГИКАСЫ (Профиль және Тест) ---
let users = JSON.parse(localStorage.getItem('smart_users')) || [];
let currentUser = JSON.parse(localStorage.getItem('smart_current_user')) || null;
let allResults = JSON.parse(localStorage.getItem('smart_results')) || [];

function switchAuth(type) {
    document.getElementById('login-form').style.display = type === 'login' ? 'block' : 'none';
    document.getElementById('register-form').style.display = type === 'register' ? 'block' : 'none';
    document.getElementById('tab-login').classList.toggle('active', type === 'login');
    document.getElementById('tab-register').classList.toggle('active', type === 'register');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;
    const user = users.find(u => u.email === email && u.pass === pass);
    if (user) {
        currentUser = user;
        localStorage.setItem('smart_current_user', JSON.stringify(currentUser));
        initApp();
    } else { alert("Email немесе құпия сөз қате!"); }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;

    if (users.find(u => u.email === email)) return alert("Бұл email тіркелген!");

    // Тіркелу күнін автоматты түрде қосу
    const newUser = {
        name: name,
        email: email,
        pass: pass,
        regDate: new Date().toLocaleDateString('kk-KZ')
    };

    users.push(newUser);
    localStorage.setItem('smart_users', JSON.stringify(users));

    alert("Тіркелу сәтті! Енді кіріңіз.");
    switchAuth('login');
}

function logout() {
    localStorage.removeItem('smart_current_user');
    currentUser = null;
    location.reload();
}

function switchSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    const activeBtn = document.querySelector(`[onclick="switchSection('${id}')"]`);
    if (activeBtn) activeBtn.classList.add('active');

    if (id === 'profile') renderProfile();
    if (id === 'results') renderResults();
    if (id === 'home' || id === 'subjects') updateStats();
}

function initApp() {
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';

    const displayName = document.getElementById('user-display-name');
    if (displayName) displayName.innerText = currentUser.name;

    renderTestsGrid();
    updateStats();
    renderProfile();
}

// ПӘНДЕРДІ ШЫҒАРУ
function renderTestsGrid() {
    const grid = document.getElementById('testsGrid');
    if (!grid) return;

    grid.innerHTML = tests.map(t => `
        <div class="subject-card">
            <i class="fas ${t.icon}" style="font-size: 2.5rem; color: #4338ca; margin-bottom: 20px;"></i>
            <h3>${t.title}</h3>
            <p style="color: #64748b; margin-top: 10px;">${t.questions.length} сұрақ | ${Math.round(t.timeLimit / 60)} мин</p>
            <button onclick="startTest('${t.id}')">Бастау</button>
        </div>
    `).join('');
}

// --- 3. ТЕСТ ПРОЦЕСІ ---
let currentTest = null;
let currentIdx = 0;
let userAnswers = [];
let timer;
let timeRemaining;

function startTest(id) {
    currentTest = tests.find(t => t.id === id);
    currentIdx = 0;
    userAnswers = new Array(currentTest.questions.length).fill(null);
    timeRemaining = currentTest.timeLimit;

    document.getElementById('test-window').style.display = 'flex';
    renderQuestion();
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeRemaining--;
        let m = Math.floor(timeRemaining / 60);
        let s = timeRemaining % 60;
        const timerEl = document.getElementById('q-timer');
        if (timerEl) timerEl.innerText = `${m}:${s < 10 ? '0' + s : s}`;
        if (timeRemaining <= 0) finishTest();
    }, 1000);
}

function renderQuestion() {
    const q = currentTest.questions[currentIdx];
    const win = document.getElementById('test-window');

    win.innerHTML = `
        <div class="test-container" style="background: white; padding: 40px; border-radius: 25px; width: 90%; max-width: 700px; position: relative;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                <span style="font-weight: 600; color: #64748b;">Сұрақ ${currentIdx + 1}/${currentTest.questions.length}</span>
                <span id="q-timer" style="color: #ef4444; font-weight: 800; font-size: 1.2rem;"></span>
            </div>
            
            <h3 style="margin-bottom: 25px; font-size: 1.3rem;">${q.text}</h3>
            
            <div class="options-list">
                ${q.options.map((opt, i) => `
                    <div class="option-item ${userAnswers[currentIdx] === i ? 'selected' : ''}" onclick="selectOpt(${i})">
                        ${opt}
                    </div>
                `).join('')}
            </div>

            <div style="margin-top: 35px; display: flex; justify-content: space-between;">
                <button onclick="closeTest()" style="background: #ef4444; color: white; border: none; padding: 10px 20px; border-radius: 10px; cursor: pointer;">Шығу</button>
                
                <div style="display: flex; gap: 10px;">
                    <button onclick="prevQ()" style="padding: 12px 25px; border: 1px solid #cbd5e1; background: white; border-radius: 10px; cursor: pointer;">Артқа</button>
                    <button onclick="nextQ()" style="padding: 12px 30px; background: #4338ca; color: white; border: none; border-radius: 10px; cursor: pointer; font-weight: 600;">
                        ${currentIdx === currentTest.questions.length - 1 ? 'Аяқтау' : 'Келесі'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function selectOpt(i) {
    userAnswers[currentIdx] = i;
    renderQuestion();
}

function nextQ() {
    if (userAnswers[currentIdx] === null) return alert("Жауап таңдаңыз!");
    if (currentIdx < currentTest.questions.length - 1) {
        currentIdx++;
        renderQuestion();
    } else {
        if (confirm("Тестті аяқтайсыз ба?")) finishTest();
    }
}

function prevQ() {
    if (currentIdx > 0) {
        currentIdx--;
        renderQuestion();
    }
}

function closeTest() {
    if (confirm("Шықсаңыз нәтиже сақталмайды!")) {
        clearInterval(timer);
        document.getElementById('test-window').style.display = 'none';
    }
}

function finishTest() {
    clearInterval(timer);
    let correct = 0;
    currentTest.questions.forEach((q, i) => {
        if (userAnswers[i] === q.correct) correct++;
    });

    const result = {
        user: currentUser.email,
        subject: currentTest.title,
        score: correct,
        total: currentTest.questions.length,
        percent: Math.round((correct / currentTest.questions.length) * 100),
        date: new Date().toLocaleDateString('kk-KZ') + " " + new Date().toLocaleTimeString('kk-KZ')
    };

    allResults.unshift(result);
    localStorage.setItem('smart_results', JSON.stringify(allResults));

    document.getElementById('test-window').style.display = 'none';
    switchSection('results');
}

// --- 4. ПРОФИЛЬ ЖӘНЕ СТАТИСТИКА ---
function renderProfile() {
    if (!currentUser) return;

    const nameEl = document.getElementById('user-display-name');
    const emailEl = document.getElementById('profile-email-text');
    const dateEl = document.getElementById('reg-date');

    if (nameEl) nameEl.innerText = currentUser.name;
    if (emailEl) emailEl.innerText = currentUser.email;

    // Тіркелген күнін шығару (егер жоқ болса, бүгінгі күнді қояды)
    if (dateEl) {
        dateEl.innerText = currentUser.regDate || new Date().toLocaleDateString('kk-KZ');
    }

    updateStats();
}

function renderResults() {
    const list = document.getElementById('resultsList');
    if (!list) return;

    const myRes = allResults.filter(r => r.user === currentUser.email);

    if (myRes.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #999; grid-column: 1/-1; padding: 50px;">Әзірге нәтиже жоқ. Тест тапсырып көріңіз!</p>';
        return;
    }

    list.innerHTML = myRes.map(r => `
        <div style="background: white; padding: 25px; border-radius: 20px; border: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h4 style="font-size: 1.1rem; margin-bottom: 5px;">${r.subject}</h4>
                <small style="color: #64748b;">${r.date}</small>
            </div>
            <div style="text-align: right;">
                <h2 style="color: ${r.percent >= 50 ? '#16a34a' : '#ef4444'}">${r.score}/${r.total}</h2>
                <span style="font-size: 0.9rem; color: #64748b; font-weight:600;">${r.percent}%</span>
            </div>
        </div>
    `).join('');
}

function updateStats() {
    const myRes = allResults.filter(r => r.user === currentUser.email);

    const statDone = document.getElementById('stat-done');
    const statAvg = document.getElementById('stat-avg');

    if (statDone) statDone.innerText = myRes.length;

    let avg = myRes.length ? Math.round(myRes.reduce((a, b) => a + b.percent, 0) / myRes.length) : 0;
    if (statAvg) statAvg.innerText = avg + "%";
}

window.onload = () => {
    if (currentUser) initApp();
    else document.getElementById('auth-screen').style.display = 'flex';
};