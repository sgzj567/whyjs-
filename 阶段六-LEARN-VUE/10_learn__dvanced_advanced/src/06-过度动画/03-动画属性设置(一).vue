<script setup>
import { ref } from 'vue'
const isShow = ref(false)

</script>

<template>
  <div class="app">
    <button @click="isShow=!isShow">切换</button>
    <!-- transition本质是在加class -->
    <transition name="why">
      <h2 v-if="isShow" class="h">
        两条腿残废后的最初几年，我找不到工作，找不到去路，忽然间几乎什么都找不到了，我就摇了轮椅总是到它那儿去，仅为着那儿是可以逃避一个世界的另一个世界。我在那篇小说中写道：“没处可去我便一天到晚耗在这园子里。跟上班下班一样，别人去上班我就摇了轮椅到这儿来。园子无人看管，上下班时间有些抄近路的人们从园中穿过，园子里活跃一阵，过后便沉寂下来。”“园墙在金晃晃的空气中斜切下一溜荫凉，我把轮椅开进去，把椅背放倒，坐着或是躺着，看书或者想事，撅一杈树枝左右拍打，驱赶那些和我一样不明白为什么要来这世上的小昆虫。”“蜂儿如一朵小雾稳稳地停在半空；蚂蚁摇头晃脑捋着触须，猛然间想透了什么，转身疾行而去；瓢虫爬得不耐烦了，累了祈祷一回便支开翅膀，忽悠一下升空了；树干上留着一只蝉蜕，寂寞如一间空屋；露水在草叶上滚动、聚集，压弯了草叶轰然坠地摔开万道金光。”“满园子都是草木竞相生长弄出的响动，窸窸窣窣窸窸窣窣片刻不息。”这都是真实的记录，园子荒芜但并不衰败。
      </h2>
    </transition>
  </div>


</template>
<style scoped>
.h {
  display: inline-block;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-to,
.why-enter-leave {
  opacity: 1;
}

.why-enter-active {
  /* 不建议动画时间不一致 */
  animation: whyAnim 2s ease;
  transition: opacity 10s ease;
}

.why-leave-active {
  animation: whyAnim 2s reverse;
  transition: opacity 10s ease;
}

@keyframes whyAnim {
  0% {
    transform: scale(0.2);
    opacity: 0;
  }

  50% {
    transform: scale(0.7);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes whyAnimLeave {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-500px);
  }
}
</style>
