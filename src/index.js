import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createImcompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createImcompleteList = (text) => {
  //タグ生成
  const div = document.createElement("div");
  div.className = "list-low";

  const li = document.createElement("li");
  li.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromImcompleteList(completeButton.parentNode);
    //完了リストにdivを追加
    const addTatget = completeButton.parentNode;
    //一番初めのテキストを取得
    const text = addTatget.firstElementChild.innerText;
    //div以下を初期化
    addTatget.textContent = null;

    //liタグ
    const li = document.createElement("li");
    li.innerText = text;

    //ボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createImcompleteList(text);
    });

    //divタグにいれる
    addTatget.appendChild(li);
    addTatget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTatget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  //子要素
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("imcomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
