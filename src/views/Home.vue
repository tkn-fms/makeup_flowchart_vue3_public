<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

//変数
const userName = ref("")
const downloadData = ref([])
const store = useStore()
const router = useRouter()

const checkName = computed({
  get: () => userName.value,
  set: (value) => {
    userName.value = value
    checkForm
  }
})
const checkData = computed({
  get: () => downloadData.value,
  set: (value) => {
    downloadData.value = value
  }
})
const checkForm = computed({
  get: () => {
    if(userName.value != ""){
      return false
    }else{
      return true
    }
  },
  set: (value) => {
    console.log(value)
  }
})

const submitUserData = () => {
  //ユーザーidの生成
  const userId = Math.floor(10000+Math.random() * 90000)
  //ユーザーデータの保持
  store.commit("setUserData", { name: userName.value, id: userId })
  store.commit("setDownloadData", downloadData)
  console.log("id:"+store.state.userId+", name:"+store.state.userName)
  console.log(store.state.downloadData)
  //フローチャート作成ページへ移行
  router.push('/flowchart')
}
</script>

<template>
  <div class="home">
    <h1>Make-up FLOW 体験サイト</h1>
    <hr>
    <div class="description">
      <!-- 説明 -->
      <p id="desc-title">Make-up FLOWに興味をお持ち頂きありがとうございます．</p>
      <p id="desc-title">こちらでは化粧フローチャート作成に特化したWebシステム，<br/>Make-up FLOWを用いて化粧フロチャートの作成を体験することができます．</p>
      <p id="desc-check">詳細な作成手順は<a href="https://takano.nkmr.io/m1/mf_test_description/" target="_blank">こちら</a>に記載してありますので，</p>
      <p id="desc-check">説明を全て読んでからシステムの体験を開始してください．</p>
      <!-- 注意事項 -->
      <div id="heading">注意事項</div>
      <ul>
        <table>
          <tr>
            <td>
              <li>実験にはPCを用いて，ブラウザーをフルスクリーンの状態で行ってください．</li>
            </td>
          </tr>
          <tr>
            <td>
              <li>ブラウザーのリロードボタン及び戻るボタンは押さないでください．</li>
            </td>
          </tr>
        </table>
      </ul>
      <!-- 問い合わせ先 -->
      <div id="heading"><a>問い合わせ先</a></div>
      <ul id="none">
        <table>
          <tr>
            <td><li>氏名：髙野沙也香</li></td>
          </tr>
          <tr>
            <td><li>メールアドレス：cs232026@meiji.ac.jp</li></td>
          </tr>
        </table>
      </ul>
      <div class="start">
        <div id="heading">体験準備</div>
        <ul id="none">
          <table>
            <tr>
              <td><li>体験終了時にほしいデータがあれば選択してください．</li></td>
              <td>
                <input type="checkbox" id="json" value="json" v-model="checkData">
                <label for="json">json</label>
                <input type="checkbox" id="svg" value="svg" v-model="checkData">
                <label for="svg">svg</label>
              </td>
            </tr>
            <tr>
              <td><li>名前を入力して体験を開始してください．</li></td>
              <td>
                <input type="text" id="name" v-model="checkName">
                <button @click="submitUserData" :disabled="checkForm" :class="checkForm ? '' : 'ableButton'">開始</button>
              </td>
            </tr>
          </table>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c");
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP");
.home {
  width: 800px;
  height: button-680px;
  margin: 5px auto;
  border: 3px solid #3cb371;
  border-radius: 30px;
  font-family: "Noto Sans JP"; /* "M PLUS Rounded 1c" */
  text-transform: none;
}
hr {
  border-top: 3px solid #3cb371;
}
.description {
  padding: 10px 20px;
}
#desc-check{
  margin: 3px 10px;
}
#heading{
  font-size: 17px;
  font-weight: bold;
  text-align: left;
  /* 上 左右 下 */
  margin: 20px 0px 5px;
  padding: 5px;
  color: #333333;
}
table {
  text-align: left;
}
table tr{
  /* 上下 左右 */
  margin: 5px 0px;
}
table td{
  /* 上下 左右 */
  padding: 5px 10px;
}
ol, ul{
  /* 上 右 下 左 */
  margin: 3px 0px 5px 0px;
}
#none{
  list-style: none;
}
label {
  margin-right: 10px;
}
.start button {
  text-align: left;
  margin: 5px 5px 5px 30px;
  display       : inline-block;
  border-radius : 10%;          /* 角丸       */
  font-size     : 13pt;        /* 文字サイズ */
  text-align    : center;      /* 文字位置   */
  cursor        : pointer;     /* カーソル   */
  padding       : 12px 12px;   /* 余白       */
  background    : #f5f5f5;     /* 背景色     */
  color         : #ffffff;     /* 文字色     */
  line-height   : 1em;         /* 1行の高さ  */
  transition    : .3s;         /* なめらか変化 */
  border        : 2px solid #f5f5f5;    /* 枠の指定 */
}
.ableButton {
  background: rgba(16,185,129,.75)!important;
}
</style>
