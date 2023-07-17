let replaces = [
    ["こちら", "此方"],
    ["プライバシー", "匿名条約"],
    ["ログイン", "参入"],
    ["Sign in", "参入"],
    ["Sign up", "参加"],
    ["Join", "参加"],
    ["ドラ", "青狸"],
    ["AI", "人工知能"],
    ["Chat", "会話"],
    ["ログイン", "参入"],
    ["ゆえ", "故"],
    ["ア", "阿"],
    ["ィ", "伊"],
    ["ウ", "宇"],
    ["エ", "江"],
    ["オ", "尾"],
    ["カ", "火"],
    ["キ", "木"],
    ["ク", "苦"],
    ["ケ", "毛"],
    ["コ", "個"],
    ["サ", "佐"],
    ["シ", "士"],
    ["ス", "須"],
    ["セ", "世"],
    ["ソ", "祖"],
    ["タ", "多"],
    ["チ", "地"],
    ["ツ", "津"],
    ["テ", "天"],
    ["ト", "斗"],
    ["ナ", "奈"],
    ["ニ", "仁"],
    ["ヌ", "奴"],
    ["ネ", "祢"],
    ["ノ", "乃"],
    ["ハ", "波"],
    ["ヒ", "比"],
    ["フ", "布"],
    ["ヘ", "部"],
    ["ホ", "保"],
    ["マ", "真"],
    ["ミ", "美"],
    ["ム", "夢"],
    ["メ", "女"],
    ["モ", "毛"],
    ["ヤ", "也"],
    ["ユ", "由"],
    ["ヨ", "与"],
    ["ラ", "良"],
    ["リ", "利"],
    ["ル", "留"],
    ["レ", "礼"],
    ["ロ", "呂"],
    ["ワ", "和"],
    ["ヲ", "遠"],
    ["ン", "恩"],
    ["a", "阿"],
    ["i", "伊"],
    ["u", "宇"],
    ["e", "江"],
    ["o", "尾"],
    ["ka", "来"],
    ["ki", "木"],
    ["ku", "苦"],
    ["ke", "毛"],
    ["ko", "個"],
    ["sa", "佐"],
    ["si", "士"],
    ["su", "須"],
    ["se", "世"],
    ["so", "祖"],
    ["ta", "多"],
    ["ti", "地"],
    ["tu", "津"],
    ["te", "天"],
    ["to", "斗"],
    ["na", "奈"],
    ["ni", "仁"],
    ["nu", "奴"],
    ["ne", "祢"],
    ["no", "乃"],
    ["ha", "波"],
    ["hi", "比"],
    ["hu", "布"],
    ["he", "部"],
    ["ho", "保"],
    ["ma", "真"],
    ["mi", "美"],
    ["mu", "夢"],
    ["me", "女"],
    ["mo", "毛"],
    ["ya", "也"],
    ["yu", "由"],
    ["yo", "与"],
    ["ra", "良"],
    ["ri", "利"],
    ["ru", "留"],
    ["re", "礼"],
    ["ro", "呂"],
    ["wa", "和"],
    ["wo", "遠"],
    ["n", "恩"],
    ["1", "一"],
    ["2", "二"],
    ["3", "三"],
    ["4", "四"],
    ["5", "五"],
    ["6", "六"],
    ["7", "七"],
    ["8", "八"],
    ["9", "九"],
    ["0", "零"],
]

function removeKana(element) {
    let nodes = element.childNodes;
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        if (node.nodeType === Node.TEXT_NODE) {
            let text = node.textContent;
            let filteredText = text.replace(/[ぁ-んー]/g, "");
            for (let k = 0; k < replaces.length; k++) {
                filteredText = filteredText.replace(replaces[k][0], replaces[k][1]);
            }
            filteredText = filteredText.replace(/[[カ-コサ-ソタ-トハ-ホワ-ヲンヽヾ]]/g, "");
            filteredText = filteredText.replace(/[ぁ-んァ-ンa-zA-Zー]/g, "");
            node.textContent = filteredText;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            removeKana(node);
        }
    }
}
const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(function (addedNode) {
                if (addedNode.nodeType === Node.ELEMENT_NODE) {
                    removeKana(addedNode);
                }
            });
        }
    });
});
const targetElement = document.body;
observer.observe(targetElement, { childList: true, subtree: true });
removeKana(targetElement);
