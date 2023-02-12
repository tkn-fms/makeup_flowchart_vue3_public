<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import axios from "axios"

//変数
const userName = ref("")
const userPass = ref("")
const store = useStore()
const router = useRouter()

const checkName = computed({
  get: () => userName.value,
  set: (value) => {
    userName.value = value
    checkForm
  }
})
const checkPass = computed({
  get: () => userPass.value,
  set: (value) => {
    userPass.value = value
    checkForm
  }
})
const checkForm = computed({
  get: () => {
    if(userName.value != "" && userPass.value != ""){
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
  const userId = Math.floor(1000+Math.random() * 9000)
  //送信データの生成
  const userParams = new URLSearchParams()
  userParams.append('userId', userId)
  userParams.append('userName', userName.value)
  userParams.append('userPass', userPass.value)
  //データをDBに送信
  axios.post('https://takano.nkmr.io/flowchart_user_post.php', userParams)
  .then((response)=>{
    //上手く行った時
    console.log('status:',response.status)
  }).catch((error)=>{
    //失敗した時
    console.log('err:',error)
  })
  //ユーザーデータの保持
  store.commit("setUserData", { name: userName.value, id: userId })
  console.log(store.state.userId)
  console.log(store.state.userName)
  //フローチャート作成ページへ移行
  router.push('/flowchart')
}
</script>

<template>
  <div class="home">
    <h1>化粧フローチャート作成実験</h1>
    <hr>
    <div class="description">
      <!-- 説明 -->
      <p id="desc-title">化粧フローチャート作成実験にご協力下さりありがとうございます．</p>
      <p id="desc-check">詳細な実験手順は<a href="https://takano.nkmr.io/b4/description/" target="_blank">こちら</a>に記載してありますので，</p>
      <p id="desc-check"><strong>説明を全て読んでから</strong>実験にご参加頂くようよろしくお願い致します．</p>
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
          <tr>
            <td>
              <li>時間制限は無いため，適度に休憩を取りながらリラックスした状態で作成してください．</li>
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
            <td><li>メールアドレス：ev190535@meiji.ac.jp</li></td>
          </tr>
        </table>
      </ul>
      <div class="login">
        <div id="heading">ログイン</div>
        <ul id="none">
          <table>
            <tr>
              <td><li>お名前（漢字表記・姓名間にスペースなし）とパスワード（自由）を入力してください．</li></td>
            </tr>
            <tr>
              <td>
                <label for="name">名前：</label>
                <input type="text" id="name" v-model="checkName">
                <label for="password" class="password">パスワード：</label>
                <input type="text" id="password" v-model="checkPass">
                <button @click="submitUserData" :disabled="checkForm" :class="checkForm ? '' : 'ableButton'">ログイン</button>
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
  height: 700px;
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
.password{
  margin-left: 10px;
}
.login button {
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
