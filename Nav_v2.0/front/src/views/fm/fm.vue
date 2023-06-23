<template>
  <div class="relative">
    {{ musicUrl.length }}
    <audio id="audioPlayer" controls>
      <!-- <source :src="musicUrl" type="audio/mmeg" class="" /> -->
      <!-- <source src="D:\\code\\project\\_project\\MyNavigation\\Nav_v2.0\\back\\audios\\1.mp3" type="audio/mp3"> -->
      <source :src="audioUrl" type="audio/mp3" class="" />
    </audio>
  </div>
</template>

<script setup lang="ts">
import axios, { AxiosResponse } from "axios";
import { onMounted, ref } from "vue";
window.onload = () => {
  // const audioPlayer = document.getElementById("audioPlayer");
  // audioPlayer!.addEventListener("canplaythrough", () => {
  //   // 音频资源加载完成，触发随机播放逻辑
  //   playRandomAudio();
  // });
  // function playRandomAudio() {
  // const audioPlayer = document.getElementById("audioPlayer");
  //   audioPlayer!.play();
  // }
};

// const result = ref(
//   await fetch("http://localhost:3000/api/fm").then((r) => {
//     return r.json();
//   })
// );
// const randomList = reactive([]);
// const resultCopy: string[] = Array.from(result.value);

// for (const item of resultCopy) {
//   console.log(item.replace(/\\\\/g, "\\"));
//   randomList.push(item.replace(/\\\\/g, "\\"));
// }

const musicUrl = ref("");
const index = ref();

const audioUrl = ref(`http://localhost:3000/audios/${musicUrl.value[index.value]}`)
onMounted(() => {
  getMusicUrl().then(() => {
    index.value = Math.floor(Math.random() * (musicUrl.value.length + 1));
    console.log(index.value);
  });
});
const getMusicUrl = async () => {
  // 发起请求获取音乐文件的URL
  // 使用Axios或其他HTTP库发送GET请求
  await axios
    .get("http://localhost:3000/api/fm")
    .then((response: AxiosResponse) => {
      musicUrl.value = response.data;
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
// const randomIndex = Math.floor(Math.random() * musicUrl.value.length);
// const randomAudioUrl = musicUrl.value[randomIndex];
// const audioUrl = ref(`http://localhost:3000/audios/${randomAudioUrl}`);
console.log(audioUrl.value);
</script>

<style scoped lang="scss">
#audioPlayer {
  @apply absolute bottom-[-100vh] w-full rounded-none flex;
}
</style>
