<template>
  <div class="board">
    <h1>게시글 목록입니다</h1>
    <!-- 페이지 이동을 위한 링크 -->
    <a v-for="n in num" :key="n">
      <router-link :to="`/board/${n}`">{{n}}</router-link> |
    </a>
    
    <!-- 페이지 동적 라우팅 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'BoardView',
  data:()=>({
    num: 3
  })
}
</script>

<style scoped>
/* scoped를 사용하면 현재의 뷰에서만 css가 적용 */
.board {

}
</style>