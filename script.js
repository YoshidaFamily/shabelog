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
    // 食べ物・飲み物カテゴリ
    { text: '好きな食べ物は？', categories: [CATEGORIES.FOOD, CATEGORIES.PERSONAL] },
    { text: '好きな果物は？', categories: [CATEGORIES.FOOD, CATEGORIES.PERSONAL] },
    { text: '好きなお菓子は？', categories: [CATEGORIES.FOOD, CATEGORIES.PERSONAL] },
    { text: '好きな飲み物は？', categories: [CATEGORIES.FOOD, CATEGORIES.PERSONAL] },
    { text: '好きなカフェは？', categories: [CATEGORIES.FOOD, CATEGORIES.PLACE, CATEGORIES.LIFESTYLE] },
    { text: '好きなレストランは？', categories: [CATEGORIES.FOOD, CATEGORIES.PLACE, CATEGORIES.LIFESTYLE] },
    { text: '自分で作る得意料理は？', categories: [CATEGORIES.FOOD, CATEGORIES.HOBBY] },
    { text: '食べてみたい世界の料理は？', categories: [CATEGORIES.FOOD, CATEGORIES.PLACE] },
    { text: '朝食に必ず食べるものは？', categories: [CATEGORIES.FOOD, CATEGORIES.LIFESTYLE] },
    { text: '思い出の味は？', categories: [CATEGORIES.FOOD, CATEGORIES.MEMORY] },
    { text: '一生食べられないとしたら困るものは？', categories: [CATEGORIES.FOOD, CATEGORIES.PERSONAL] },
    { text: '最近ハマっている食べ物や飲み物は？', categories: [CATEGORIES.FOOD, CATEGORIES.PERSONAL] },
    
    // エンタメカテゴリ
    { text: '好きなアニメは？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.HOBBY] },
    { text: '好きな映画は？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.HOBBY] },
    { text: '好きな音楽は？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.HOBBY] },
    { text: '好きな本は？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.HOBBY] },
    { text: '好きなアーティストは？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.PERSONAL] },
    { text: '好きなキャラクターは？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.PERSONAL] },
    { text: '好きなジャンルは？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.PERSONAL] },
    { text: '最近見た映画やドラマで印象に残っているのは？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.PERSONAL] },
    { text: '子供の頃好きだったテレビ番組は？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.MEMORY] },
    { text: '映画館で見た中で一番感動した映画は？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.MEMORY] },
    { text: '人生を変えた本や映画は？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.PERSONAL] },
    { text: '最近のエンタメ業界のトレンドについてどう思う？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.OPINION] },
    { text: '好きなYouTuberやインフルエンサーは？', categories: [CATEGORIES.ENTERTAINMENT, CATEGORIES.LIFESTYLE] },
    
    // 趣味カテゴリ
    { text: '好きなスポーツは？', categories: [CATEGORIES.HOBBY, CATEGORIES.LIFESTYLE] },
    { text: '好きなゲームは？', categories: [CATEGORIES.HOBBY, CATEGORIES.ENTERTAINMENT] },
    { text: '好きなことは？', categories: [CATEGORIES.HOBBY, CATEGORIES.PERSONAL] },
    { text: '最近ハマっていることは？', categories: [CATEGORIES.HOBBY, CATEGORIES.PERSONAL] },
    { text: '休日の過ごし方は？', categories: [CATEGORIES.HOBBY, CATEGORIES.LIFESTYLE] },
    { text: '没頭できる趣味は？', categories: [CATEGORIES.HOBBY, CATEGORIES.PERSONAL] },
    { text: '新しく始めたい趣味は？', categories: [CATEGORIES.HOBBY, CATEGORIES.FUTURE] },
    { text: '子供の頃の趣味は？', categories: [CATEGORIES.HOBBY, CATEGORIES.MEMORY] },
    { text: '趣味に使う予算はどれくらい？', categories: [CATEGORIES.HOBBY, CATEGORIES.LIFESTYLE] },
    { text: '誰かに教えたい自分の趣味は？', categories: [CATEGORIES.HOBBY, CATEGORIES.RELATIONSHIP] },
    { text: '趣味で得た一番の学びは？', categories: [CATEGORIES.HOBBY, CATEGORIES.PERSONAL] },
    
    // 個人的なことカテゴリ
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
    { text: '好きな香りは？', categories: [CATEGORIES.PERSONAL, CATEGORIES.LIFESTYLE] },
    { text: '好きな天気は？', categories: [CATEGORIES.PERSONAL] },
    { text: '好きな時間は？', categories: [CATEGORIES.PERSONAL, CATEGORIES.LIFESTYLE] },
    { text: '今一番欲しいものは？', categories: [CATEGORIES.PERSONAL, CATEGORIES.LIFESTYLE] },
    { text: '座右の銘は？', categories: [CATEGORIES.PERSONAL, CATEGORIES.OPINION] },
    { text: '最近の楽しみは？', categories: [CATEGORIES.PERSONAL, CATEGORIES.LIFESTYLE] },
    { text: '最近の悩みは？', categories: [CATEGORIES.PERSONAL, CATEGORIES.CHALLENGE] },
    { text: '今チャレンジしていることは？', categories: [CATEGORIES.PERSONAL, CATEGORIES.CHALLENGE] },
    { text: '自分の長所と短所は？', categories: [CATEGORIES.PERSONAL] },
    { text: '自分を動物に例えると？', categories: [CATEGORIES.PERSONAL] },
    { text: '朝型？夜型？', categories: [CATEGORIES.PERSONAL, CATEGORIES.LIFESTYLE] },
    { text: '自分の性格を一言で表すと？', categories: [CATEGORIES.PERSONAL] },
    { text: '最近変わったと思うことは？', categories: [CATEGORIES.PERSONAL, CATEGORIES.CHALLENGE] },
    
    // 場所・旅行カテゴリ
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
    { text: '好きなスポットは？', categories: [CATEGORIES.PLACE, CATEGORIES.PERSONAL] },
    { text: '思い出の旅行先は？', categories: [CATEGORIES.PLACE, CATEGORIES.MEMORY] },
    { text: '行ってみたい秘境や絶景は？', categories: [CATEGORIES.PLACE, CATEGORIES.FUTURE] },
    { text: '地元のおすすめスポットは？', categories: [CATEGORIES.PLACE, CATEGORIES.PERSONAL] },
    { text: '旅行で必ず持っていくものは？', categories: [CATEGORIES.PLACE, CATEGORIES.LIFESTYLE] },
    { text: '一人旅と団体旅行、どちらが好き？', categories: [CATEGORIES.PLACE, CATEGORIES.PERSONAL] },
    { text: '旅行で体験した文化の違いは？', categories: [CATEGORIES.PLACE, CATEGORIES.MEMORY] },
    
    // 将来・夢カテゴリ
    { text: '将来の夢は？', categories: [CATEGORIES.FUTURE, CATEGORIES.PERSONAL] },
    { text: '10年後の自分はどうなっていると思う？', categories: [CATEGORIES.FUTURE, CATEGORIES.PERSONAL] },
    { text: '今なりたい職業は？', categories: [CATEGORIES.WORK, CATEGORIES.FUTURE, CATEGORIES.PERSONAL] },
    { text: '老後の過ごし方について考えることは？', categories: [CATEGORIES.FUTURE, CATEGORIES.LIFESTYLE] },
    { text: '叶えたいバケットリストは？', categories: [CATEGORIES.FUTURE, CATEGORIES.PERSONAL] },
    { text: '未来の自分へのメッセージは？', categories: [CATEGORIES.FUTURE, CATEGORIES.PERSONAL] },
    { text: '今の延長線上にない、挑戦してみたいことは？', categories: [CATEGORIES.FUTURE, CATEGORIES.CHALLENGE] },
    { text: '理想の生活は？', categories: [CATEGORIES.FUTURE, CATEGORIES.LIFESTYLE] },
    { text: '将来住みたい場所は？', categories: [CATEGORIES.FUTURE, CATEGORIES.PLACE] },
    { text: '未来の技術で体験してみたいことは？', categories: [CATEGORIES.FUTURE, CATEGORIES.OPINION] },
    
    // 仕事・キャリアカテゴリ
    { text: '子供のときになりたかった職業は？', categories: [CATEGORIES.WORK, CATEGORIES.MEMORY, CATEGORIES.PERSONAL] },
    { text: '仕事のやりがいは？', categories: [CATEGORIES.WORK, CATEGORIES.PERSONAL] },
    { text: '仕事で大切にしていることは？', categories: [CATEGORIES.WORK, CATEGORIES.OPINION] },
    { text: '理想の働き方は？', categories: [CATEGORIES.WORK, CATEGORIES.LIFESTYLE] },
    { text: '仕事で学んだ最も重要なことは？', categories: [CATEGORIES.WORK, CATEGORIES.PERSONAL] },
    { text: '転職経験や転職について思うことは？', categories: [CATEGORIES.WORK, CATEGORIES.OPINION] },
    { text: '尊敬する上司や同僚の特徴は？', categories: [CATEGORIES.WORK, CATEGORIES.RELATIONSHIP] },
    { text: '仕事とプライベートのバランスについて思うことは？', categories: [CATEGORIES.WORK, CATEGORIES.LIFESTYLE, CATEGORIES.OPINION] },
    { text: '今の仕事を選んだ理由は？', categories: [CATEGORIES.WORK, CATEGORIES.PERSONAL] },
    { text: '仕事で成長したと感じる瞬間は？', categories: [CATEGORIES.WORK, CATEGORIES.PERSONAL] },
    { text: '副業や複業について思うことは？', categories: [CATEGORIES.WORK, CATEGORIES.OPINION] },
    { text: '仕事の成功体験は？', categories: [CATEGORIES.WORK, CATEGORIES.MEMORY, CATEGORIES.CHALLENGE] },
    
    // ライフスタイルカテゴリ
    { text: '好きな服は？', categories: [CATEGORIES.LIFESTYLE, CATEGORIES.PERSONAL] },
    { text: '好きなアクセサリーは？', categories: [CATEGORIES.LIFESTYLE, CATEGORIES.PERSONAL] },
    { text: '朝起きてから最初にすることは？', categories: [CATEGORIES.LIFESTYLE] },
    { text: '寝る前の習慣は？', categories: [CATEGORIES.LIFESTYLE] },
    { text: '健康のために気をつけていることは？', categories: [CATEGORIES.LIFESTYLE, CATEGORIES.PERSONAL] },
    { text: '自分なりのストレス解消法は？', categories: [CATEGORIES.LIFESTYLE, CATEGORIES.PERSONAL] },
    { text: '節約のコツは？', categories: [CATEGORIES.LIFESTYLE, CATEGORIES.PERSONAL] },
    { text: '最近買ってよかったものは？', categories: [CATEGORIES.LIFESTYLE, CATEGORIES.PERSONAL] },
    { text: '今の流行についてどう思う？', categories: [CATEGORIES.OPINION, CATEGORIES.LIFESTYLE] },
    { text: '自分のこだわりは？', categories: [CATEGORIES.LIFESTYLE, CATEGORIES.PERSONAL] },
    { text: '理想の休日の過ごし方は？', categories: [CATEGORIES.LIFESTYLE, CATEGORIES.PERSONAL] },
    
    // 思い出カテゴリ
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
    { text: '人生で一番の冒険は？', categories: [CATEGORIES.MEMORY, CATEGORIES.CHALLENGE] },
    { text: '忘れられない失敗談は？', categories: [CATEGORIES.MEMORY, CATEGORIES.CHALLENGE] },
    { text: '人生の転機となった出来事は？', categories: [CATEGORIES.MEMORY, CATEGORIES.PERSONAL] },
    { text: '初めて〇〇したときの思い出は？', categories: [CATEGORIES.MEMORY, CATEGORIES.PERSONAL] },
    
    // チャレンジカテゴリ
    { text: '最近挑戦したことは？', categories: [CATEGORIES.CHALLENGE, CATEGORIES.PERSONAL] },
    { text: '失敗を乗り越えた経験は？', categories: [CATEGORIES.CHALLENGE, CATEGORIES.MEMORY] },
    { text: '自分の限界を感じたときの話は？', categories: [CATEGORIES.CHALLENGE, CATEGORIES.PERSONAL] },
    { text: '困難だけどやりがいを感じたことは？', categories: [CATEGORIES.CHALLENGE, CATEGORIES.PERSONAL] },
    { text: '今までで一番難しかった決断は？', categories: [CATEGORIES.CHALLENGE, CATEGORIES.PERSONAL] },
    { text: '挑戦して良かったと思うことは？', categories: [CATEGORIES.CHALLENGE, CATEGORIES.PERSONAL] },
    { text: '諦めずに続けていることは？', categories: [CATEGORIES.CHALLENGE, CATEGORIES.PERSONAL] },
    
    // 人間関係カテゴリ
    { text: '尊敬する人は？', categories: [CATEGORIES.RELATIONSHIP, CATEGORIES.PERSONAL] },
    { text: '影響を受けた人は？', categories: [CATEGORIES.RELATIONSHIP, CATEGORIES.PERSONAL] },
    { text: '大切にしている友人関係は？', categories: [CATEGORIES.RELATIONSHIP, CATEGORIES.PERSONAL] },
    { text: '家族との関係で大切にしていることは？', categories: [CATEGORIES.RELATIONSHIP, CATEGORIES.PERSONAL] },
    { text: '人間関係で大切にしていることは？', categories: [CATEGORIES.RELATIONSHIP, CATEGORIES.OPINION] },
    { text: '初対面の人と話すときのコツは？', categories: [CATEGORIES.RELATIONSHIP, CATEGORIES.PERSONAL] },
    { text: '友達の作り方は？', categories: [CATEGORIES.RELATIONSHIP, CATEGORIES.PERSONAL] },
    { text: '人間関係で学んだことは？', categories: [CATEGORIES.RELATIONSHIP, CATEGORIES.PERSONAL] },
    { text: '一番長く付き合いのある友人との思い出は？', categories: [CATEGORIES.RELATIONSHIP, CATEGORIES.MEMORY] },
    { text: '人に言われて嬉しかった言葉は？', categories: [CATEGORIES.RELATIONSHIP, CATEGORIES.MEMORY] },
    
    // 意見・考えカテゴリ
    { text: '最近知った豆知識は？', categories: [CATEGORIES.PERSONAL, CATEGORIES.OPINION] },
    { text: '今の政治についてどう思う？', categories: [CATEGORIES.OPINION] },
    { text: '今の社会問題についてどう思う？', categories: [CATEGORIES.OPINION] },
    { text: '教育について思うことは？', categories: [CATEGORIES.OPINION] },
    { text: '環境問題についてどう考える？', categories: [CATEGORIES.OPINION] },
    { text: 'テクノロジーの進化についてどう思う？', categories: [CATEGORIES.OPINION, CATEGORIES.FUTURE] },
    { text: '幸せとは何だと思う？', categories: [CATEGORIES.OPINION, CATEGORIES.PERSONAL] },
    { text: '成功とは何だと思う？', categories: [CATEGORIES.OPINION, CATEGORIES.PERSONAL] },
    { text: '人生で大切にしていることは？', categories: [CATEGORIES.OPINION, CATEGORIES.PERSONAL] },
    { text: '理想の社会とは？', categories: [CATEGORIES.OPINION, CATEGORIES.FUTURE] },
    { text: '変えたいと思う社会の仕組みは？', categories: [CATEGORIES.OPINION, CATEGORIES.FUTURE] },
    { text: '最近考えさせられたニュースは？', categories: [CATEGORIES.OPINION, CATEGORIES.PERSONAL] },
    { text: '自分と反対の意見を聞いたときどう対応する？', categories: [CATEGORIES.OPINION, CATEGORIES.RELATIONSHIP] },
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
    
    // カテゴリ選択の見出しを取得
    const categorySection = document.querySelector('.category-section');
    const categoryHeading = categorySection.querySelector('h2');
    
    // 見出しの横にボタンを配置するためのコンテナを作成
    const headingContainer = document.createElement('div');
    headingContainer.className = 'category-heading-container';
    
    // 全選択・全解除ボタンを作成
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'category-buttons';
    
    const selectAllButton = document.createElement('button');
    selectAllButton.textContent = 'すべて選択';
    selectAllButton.className = 'category-button';
    selectAllButton.addEventListener('click', selectAllCategories);
    
    const deselectAllButton = document.createElement('button');
    deselectAllButton.textContent = 'すべて解除';
    deselectAllButton.className = 'category-button';
    deselectAllButton.addEventListener('click', deselectAllCategories);
    
    // ボタンをボタンコンテナに追加
    buttonContainer.appendChild(selectAllButton);
    buttonContainer.appendChild(deselectAllButton);
    
    // 元の見出しを削除し、新しいコンテナに見出しとボタンを追加
    categoryHeading.remove();
    
    const newHeading = document.createElement('h2');
    newHeading.textContent = 'カテゴリ';
    
    headingContainer.appendChild(newHeading);
    headingContainer.appendChild(buttonContainer);
    
    // 新しいコンテナをカテゴリセクションの先頭に追加
    categorySection.insertBefore(headingContainer, categorySection.firstChild);
    
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

// すべてのカテゴリを選択する関数
function selectAllCategories() {
    const checkboxes = document.querySelectorAll('#category-container input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
    updateEnabledCategories();
}

// すべてのカテゴリの選択を解除する関数
function deselectAllCategories() {
    const checkboxes = document.querySelectorAll('#category-container input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    updateEnabledCategories();
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

    // 表示された3つのテーマからランダムに1つを選んでレコメンド
    recommendRandomTheme();
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
