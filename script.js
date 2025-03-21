window.addEventListener('load', init);

// カテゴリの定義（タグとして使用）
const CATEGORIES = {
    FOOD: '食べ物・飲み物',
    ENTERTAINMENT: 'エンタメ',
    HOBBY: '趣味',
    PERSONAL: '個人的なこと',
    PLACE: '場所・旅行',
    FUTURE: '将来・夢',
    WORK: '仕事・キャリア',
    LIFESTYLE: 'ライフスタイル',
    MEMORY: '思い出',
    CHALLENGE: 'チャレンジ',
    RELATIONSHIP: '人間関係',
    OPINION: '意見・考え'
};

// テーマのリストをオブジェクトとして生成する（複数カテゴリ/タグ付き）
const themaList = [
    { text: '好きな食べ物は？', categories: [CATEGORIES.FOOD, CATEGORIES.PERSONAL] },
    { text: '好きなアニメは？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.HOBBY] },
    { text: '好きな映画は？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.HOBBY] },
    { text: '好きな音楽は？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.HOBBY] },
    { text: '好きな本は？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.HOBBY] },
    { text: '好きなスポーツは？', categories: [CATEGORIES.HOBBY, CATEGORIES.LIFESTYLE] },
    { text: '好きなゲームは？', categories: [CATEGORIES.HOBBY, CATEGORIES.ENTERTAINMENT] },
    { text: '好きな場所は？', categories: [CATEGORIES.PLACE, CATEGORIES.PERSONAL] },
    { text: '好きな季節は？', categories: [CATEGORIES.PERSONAL] },
    { text: '好きな色は？', categories: [CATEGORIES.PERSONAL] },
    { text: '好きな動物は？', categories: [CATEGORIES.PERSONAL] },
    { text: '好きな花は？', categories: [CATEGORIES.PERSONAL, CATEGORIES.LIFESTYLE] },
    { text: '好きな果物は？', categories: [CATEGORIES.FOOD, CATEGORIES.PERSONAL] },
    { text: '好きなお菓子は？', categories: [CATEGORIES.FOOD, CATEGORIES.PERSONAL] },
    { text: '好きな飲み物は？', categories: [CATEGORIES.FOOD, CATEGORIES.PERSONAL] },
    { text: '好きなアーティストは？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.PERSONAL] },
    { text: '好きなキャラクターは？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.PERSONAL] },
    { text: '好きな言葉は？', categories: [CATEGORIES.PERSONAL, CATEGORIES.OPINION] },
    { text: '好きな形は？', categories: [CATEGORIES.PERSONAL] },
    { text: '好きな数字は？', categories: [CATEGORIES.PERSONAL] },
    { text: '好きな服は？', categories: [CATEGORIES.LIFESTYLE, CATEGORIES.PERSONAL] },
    { text: '好きなアクセサリーは？', categories: [CATEGORIES.LIFESTYLE, CATEGORIES.PERSONAL] },
    { text: '好きな香りは？', categories: [CATEGORIES.PERSONAL, CATEGORIES.LIFESTYLE] },
    { text: '好きな天気は？', categories: [CATEGORIES.PERSONAL] },
    { text: '好きな時間は？', categories: [CATEGORIES.PERSONAL, CATEGORIES.LIFESTYLE] },
    { text: '好きな国は？', categories: [CATEGORIES.PLACE, CATEGORIES.PERSONAL] },
    { text: '好きな都道府県は？', categories: [CATEGORIES.PLACE, CATEGORIES.PERSONAL] },
    { text: '好きな街は？', categories: [CATEGORIES.PLACE, CATEGORIES.PERSONAL] },
    { text: '今一番欲しいものは？', categories: [CATEGORIES.PERSONAL, CATEGORIES.LIFESTYLE] },
    { text: '今一番行きたい場所は？', categories: [CATEGORIES.PLACE, CATEGORIES.PERSONAL] },
    { text: '今一番行きたい国は？', categories: [CATEGORIES.PLACE, CATEGORIES.PERSONAL] },
    { text: '今一番行きたい都道府県は？', categories: [CATEGORIES.PLACE, CATEGORIES.PERSONAL] },
    { text: '今一番行きたい街は？', categories: [CATEGORIES.PLACE, CATEGORIES.PERSONAL] },
    { text: '座右の銘は？', categories: [CATEGORIES.PERSONAL, CATEGORIES.OPINION] },
    { text: '好きなことは？', categories: [CATEGORIES.HOBBY, CATEGORIES.PERSONAL] },
    { text: '子供のときになりたかった職業は？', categories: [CATEGORIES.WORK, CATEGORIES.MEMORY, CATEGORIES.PERSONAL] },
    { text: '今なりたい職業は？', categories: [CATEGORIES.WORK, CATEGORIES.FUTURE, CATEGORIES.PERSONAL] },
    { text: '好きなお店は？', categories: [CATEGORIES.LIFESTYLE, CATEGORIES.PLACE] },
    { text: '好きなカフェは？', categories: [CATEGORIES.FOOD, CATEGORIES.PLACE, CATEGORIES.LIFESTYLE] },
    { text: '好きなレストランは？', categories: [CATEGORIES.FOOD, CATEGORIES.PLACE, CATEGORIES.LIFESTYLE] },
    { text: '好きなジャンルは？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.PERSONAL] },
    { text: '好きなスポットは？', categories: [CATEGORIES.PLACE, CATEGORIES.PERSONAL] },
    { text: '最近ハマっていることは？', categories: [CATEGORIES.HOBBY, CATEGORIES.PERSONAL] },
    { text: '最近の楽しみは？', categories: [CATEGORIES.PERSONAL, CATEGORIES.LIFESTYLE] },
    { text: '最近の悩みは？', categories: [CATEGORIES.PERSONAL, CATEGORIES.CHALLENGE] },
    { text: '最近の失敗談は？', categories: [CATEGORIES.PERSONAL, CATEGORIES.MEMORY, CATEGORIES.CHALLENGE] },
    { text: '最近の成功体験は？', categories: [CATEGORIES.PERSONAL, CATEGORIES.MEMORY, CATEGORIES.CHALLENGE] },
    { text: '子供の頃の思い出は？', categories: [CATEGORIES.PERSONAL, CATEGORIES.MEMORY] },
    { text: '学生時代の思い出は？', categories: [CATEGORIES.PERSONAL, CATEGORIES.MEMORY] },
    { text: '人生で一番嬉しかったことは？', categories: [CATEGORIES.PERSONAL, CATEGORIES.MEMORY] },
    { text: '今チャレンジしていることは？', categories: [CATEGORIES.PERSONAL, CATEGORIES.CHALLENGE] },
    { text: '将来の夢は？', categories: [CATEGORIES.FUTURE, CATEGORIES.PERSONAL] },
    { text: '10年後の自分はどうなっていると思う？', categories: [CATEGORIES.FUTURE, CATEGORIES.PERSONAL] },
    { text: '友達との思い出は？', categories: [CATEGORIES.MEMORY, CATEGORIES.RELATIONSHIP] },
    { text: '家族との思い出は？', categories: [CATEGORIES.MEMORY, CATEGORIES.RELATIONSHIP] },
    { text: '最近感動したことは？', categories: [CATEGORIES.PERSONAL, CATEGORIES.MEMORY] },
    { text: '最近笑ったことは？', categories: [CATEGORIES.PERSONAL, CATEGORIES.MEMORY] },
    { text: '最近驚いたことは？', categories: [CATEGORIES.PERSONAL, CATEGORIES.MEMORY] },
    { text: '最近知った豆知識は？', categories: [CATEGORIES.PERSONAL, CATEGORIES.OPINION] },
    { text: '今の政治についてどう思う？', categories: [CATEGORIES.OPINION] },
    { text: '今の社会問題についてどう思う？', categories: [CATEGORIES.OPINION] },
    { text: '今の流行についてどう思う？', categories: [CATEGORIES.OPINION, CATEGORIES.LIFESTYLE] },
];

// 有効なカテゴリを保存する変数
let enabledCategories = Object.values(CATEGORIES);

function init() {
    // カテゴリ選択UIの初期化
    initCategoryUI();
    // 初期シャッフル
    shuffle();
}

function initCategoryUI() {
    const categoryContainer = document.getElementById('category-container');
    if (!categoryContainer) return;
    
    // 説明テキストを追加
    const description = document.createElement('p');
    description.className = 'category-description';
    description.textContent = '※チェックを外したカテゴリのテーマは表示されません';
    categoryContainer.appendChild(description);
    
    // 全カテゴリのチェックボックスを作成
    Object.values(CATEGORIES).forEach(category => {
        const div = document.createElement('div');
        div.className = 'category-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `category-${category}`;
        checkbox.value = category;
        checkbox.checked = true; // デフォルトでチェックあり（有効）
        checkbox.addEventListener('change', updateEnabledCategories);
        
        const label = document.createElement('label');
        label.htmlFor = `category-${category}`;
        label.textContent = category;
        
        div.appendChild(checkbox);
        div.appendChild(label);
        categoryContainer.appendChild(div);
    });
}

function updateEnabledCategories() {
    // チェックされている（有効な）カテゴリを取得
    const checkboxes = document.querySelectorAll('#category-container input[type="checkbox"]:checked');
    enabledCategories = Array.from(checkboxes).map(cb => cb.value);
    
    // カテゴリが変更されたら再シャッフル
    shuffle();
}

function shuffle() {
    // 有効なカテゴリに基づいてテーマをフィルタリング
    // テーマのカテゴリが無効なカテゴリを含まないかチェック
    const allCategories = Object.values(CATEGORIES);
    const disabledCategories = allCategories.filter(category => !enabledCategories.includes(category));
    
    const filteredThemes = themaList.filter(theme => 
        !theme.categories.some(category => 
            disabledCategories.includes(category)
        )
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
    
    // 表示された3つのテーマからランダムに1つを選んでレコメンド
    recommendRandomTheme();
}

function makeThemesClickable() {
    // テーマをクリックしたら選択状態にする
    const themeElements = [
        document.getElementById('thema1_text'),
        document.getElementById('thema2_text'),
        document.getElementById('thema3_text')
    ];
    
    themeElements.forEach(element => {
        if (element.innerHTML && element.innerHTML !== 'カテゴリを選択してください') {
            element.classList.remove('selected');
            element.classList.remove('recommended');
            
            // 「おすすめ！」ラベルを削除
            const parent = element.parentElement;
            const recommendLabel = parent.querySelector('.recommend-label');
            if (recommendLabel) {
                parent.removeChild(recommendLabel);
            }
            
            element.onclick = function() {
                // 他の選択を解除
                themeElements.forEach(el => {
                    el.classList.remove('selected');
                    
                    // 「おすすめ！」ラベルを削除
                    const p = el.parentElement;
                    const recLabel = p.querySelector('.recommend-label');
                    if (recLabel) {
                        p.removeChild(recLabel);
                    }
                });
                
                // このテーマを選択
                this.classList.add('selected');
            };
        } else {
            element.onclick = null;
        }
    });
}

function recommendRandomTheme() {
    // 表示されている有効なテーマ要素を取得
    const themeElements = [
        document.getElementById('thema1_text'),
        document.getElementById('thema2_text'),
        document.getElementById('thema3_text')
    ].filter(el => el.innerHTML && el.innerHTML !== 'カテゴリを選択してください');
    
    // 有効なテーマがない場合は何もしない
    if (themeElements.length === 0) return;
    
    // ランダムに1つのテーマを選択
    const randomIndex = Math.floor(Math.random() * themeElements.length);
    const recommendedTheme = themeElements[randomIndex];
    
    // 他の選択を解除
    themeElements.forEach(el => {
        el.classList.remove('selected');
        el.classList.remove('recommended');
        
        // 「おすすめ！」ラベルを削除
        const parent = el.parentElement;
        const recommendLabel = parent.querySelector('.recommend-label');
        if (recommendLabel) {
            parent.removeChild(recommendLabel);
        }
    });
    
    // 選択されたテーマを強調表示
    recommendedTheme.classList.add('recommended');
    
    // 「おすすめ！」ラベルを追加
    const recommendLabel = document.createElement('div');
    recommendLabel.className = 'recommend-label';
    recommendLabel.textContent = 'おすすめ！';
    recommendedTheme.parentElement.appendChild(recommendLabel);
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
