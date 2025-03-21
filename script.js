window.addEventListener('load', init);

// カテゴリの定義
const CATEGORIES = {
    FOOD: '食べ物・飲み物',
    ENTERTAINMENT: 'エンタメ',
    HOBBY: '趣味',
    PERSONAL: '個人的なこと',
    PLACE: '場所・旅行',
    FUTURE: '将来・夢',
    WORK: '仕事・キャリア',
    LIFESTYLE: 'ライフスタイル'
};

// テーマのリストをオブジェクトとして生成する（カテゴリ付き）
const themaList = [
    { text: '好きな食べ物は？', category: CATEGORIES.FOOD },
    { text: '好きなアニメは？', category: CATEGORIES.ENTERTAINMENT },
    { text: '好きな映画は？', category: CATEGORIES.ENTERTAINMENT },
    { text: '好きな音楽は？', category: CATEGORIES.ENTERTAINMENT },
    { text: '好きな本は？', category: CATEGORIES.ENTERTAINMENT },
    { text: '好きなスポーツは？', category: CATEGORIES.HOBBY },
    { text: '好きなゲームは？', category: CATEGORIES.HOBBY },
    { text: '好きな場所は？', category: CATEGORIES.PLACE },
    { text: '好きな季節は？', category: CATEGORIES.PERSONAL },
    { text: '好きな色は？', category: CATEGORIES.PERSONAL },
    { text: '好きな動物は？', category: CATEGORIES.PERSONAL },
    { text: '好きな花は？', category: CATEGORIES.PERSONAL },
    { text: '好きな果物は？', category: CATEGORIES.FOOD },
    { text: '好きなお菓子は？', category: CATEGORIES.FOOD },
    { text: '好きな飲み物は？', category: CATEGORIES.FOOD },
    { text: '好きなアーティストは？', category: CATEGORIES.ENTERTAINMENT },
    { text: '好きなキャラクターは？', category: CATEGORIES.ENTERTAINMENT },
    { text: '好きな言葉は？', category: CATEGORIES.PERSONAL },
    { text: '好きな形は？', category: CATEGORIES.PERSONAL },
    { text: '好きな数字は？', category: CATEGORIES.PERSONAL },
    { text: '好きな服は？', category: CATEGORIES.LIFESTYLE },
    { text: '好きなアクセサリーは？', category: CATEGORIES.LIFESTYLE },
    { text: '好きな香りは？', category: CATEGORIES.PERSONAL },
    { text: '好きな天気は？', category: CATEGORIES.PERSONAL },
    { text: '好きな時間は？', category: CATEGORIES.PERSONAL },
    { text: '好きな国は？', category: CATEGORIES.PLACE },
    { text: '好きな都道府県は？', category: CATEGORIES.PLACE },
    { text: '好きな街は？', category: CATEGORIES.PLACE },
    { text: '今一番欲しいものは？', category: CATEGORIES.PERSONAL },
    { text: '今一番行きたい場所は？', category: CATEGORIES.PLACE },
    { text: '今一番行きたい国は？', category: CATEGORIES.PLACE },
    { text: '今一番行きたい都道府県は？', category: CATEGORIES.PLACE },
    { text: '今一番行きたい街は？', category: CATEGORIES.PLACE },
    { text: '座右の銘は？', category: CATEGORIES.PERSONAL },
    { text: '好きなことは？', category: CATEGORIES.HOBBY },
    { text: '子供のときになりたかった職業は？', category: CATEGORIES.WORK },
    { text: '今なりたい職業は？', category: CATEGORIES.WORK },
    { text: '好きなお店は？', category: CATEGORIES.LIFESTYLE },
    { text: '好きなカフェは？', category: CATEGORIES.FOOD },
    { text: '好きなレストランは？', category: CATEGORIES.FOOD },
    { text: '好きなジャンルは？', category: CATEGORIES.ENTERTAINMENT },
    { text: '好きなスポットは？', category: CATEGORIES.PLACE },
    { text: '最近ハマっていることは？', category: CATEGORIES.HOBBY },
    { text: '最近の楽しみは？', category: CATEGORIES.PERSONAL },
    { text: '最近の悩みは？', category: CATEGORIES.PERSONAL },
    { text: '最近の失敗談は？', category: CATEGORIES.PERSONAL },
    { text: '最近の成功体験は？', category: CATEGORIES.PERSONAL },
    { text: '子供の頃の思い出は？', category: CATEGORIES.PERSONAL },
    { text: '学生時代の思い出は？', category: CATEGORIES.PERSONAL },
    { text: '人生で一番嬉しかったことは？', category: CATEGORIES.PERSONAL },
    { text: '今チャレンジしていることは？', category: CATEGORIES.PERSONAL },
    { text: '将来の夢は？', category: CATEGORIES.FUTURE },
    { text: '10年後の自分はどうなっていると思う？', category: CATEGORIES.FUTURE },
];

// 選択されたカテゴリを保存する変数
let selectedCategories = Object.values(CATEGORIES);

function init() {
    // カテゴリ選択UIの初期化
    initCategoryUI();
    // 初期シャッフル
    shuffle();
}

function initCategoryUI() {
    const categoryContainer = document.getElementById('category-container');
    if (!categoryContainer) return;
    
    // 全カテゴリのチェックボックスを作成
    Object.values(CATEGORIES).forEach(category => {
        const div = document.createElement('div');
        div.className = 'category-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `category-${category}`;
        checkbox.value = category;
        checkbox.checked = true; // デフォルトで全てチェック
        checkbox.addEventListener('change', updateSelectedCategories);
        
        const label = document.createElement('label');
        label.htmlFor = `category-${category}`;
        label.textContent = category;
        
        div.appendChild(checkbox);
        div.appendChild(label);
        categoryContainer.appendChild(div);
    });
}

function updateSelectedCategories() {
    // チェックされているカテゴリを取得
    const checkboxes = document.querySelectorAll('#category-container input[type="checkbox"]:checked');
    selectedCategories = Array.from(checkboxes).map(cb => cb.value);
    
    // カテゴリが変更されたら再シャッフル
    shuffle();
}

function shuffle() {
    // 選択されたカテゴリに基づいてテーマをフィルタリング
    const filteredThemes = themaList.filter(theme => 
        selectedCategories.includes(theme.category)
    );
    
    // フィルタリングされたテーマがない場合
    if (filteredThemes.length === 0) {
        document.getElementById('thema1_text').innerHTML = 'カテゴリを選択してください';
        document.getElementById('thema2_text').innerHTML = '';
        document.getElementById('thema3_text').innerHTML = '';
        return;
    }
    
    // テーマのリストをシャッフルする
    const shuffledThemes = [...filteredThemes]; // コピーを作成
    shuffleArray(shuffledThemes);
    
    // シャッフルしたテーマを表示する（最大3つ）
    document.getElementById('thema1_text').innerHTML = shuffledThemes[0]?.text || '';
    document.getElementById('thema2_text').innerHTML = shuffledThemes[1]?.text || '';
    document.getElementById('thema3_text').innerHTML = shuffledThemes[2]?.text || '';
    
    // テーマをクリック可能にする
    makeThemesClickable();
}

function makeThemesClickable() {
    // テーマをクリックしたら選択状態にする
    const themeElements = [
        document.getElementById('thema1_text'),
        document.getElementById('thema2_text'),
        document.getElementById('thema3_text')
    ];
    
    themeElements.forEach(element => {
        if (element.innerHTML) {
            element.classList.remove('selected');
            element.onclick = function() {
                // 他の選択を解除
                themeElements.forEach(el => el.classList.remove('selected'));
                // このテーマを選択
                this.classList.add('selected');
            };
        } else {
            element.onclick = null;
        }
    });
}

// 配列をシャッフルする関数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // 0 以上 i 以下のランダムな整数を取得
        const r = Math.floor(Math.random() * (i + 1));
        // 配列の要素の並び替えを行う
        [array[i], array[r]] = [array[r], array[i]];
    }
}
