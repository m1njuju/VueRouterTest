<template>
    <div class="page">
        <!-- 처음부터 변수를 두지말고 값으로 둔 다음에 바꾸기 -->
        <h3>{{$route.params.page}}페이지입니다</h3>
        <!-- page의 값이 1일 때 0, page의 값이 2일 때 1 -->
        <p>{{showMemo}}</p>
    </div>
</template>

<script>
import data from '@/assets/data.json'

export default {
    name: 'PageComponent',
    data:()=>({
        data: data,
    }),
    computed: {
        showMemo : function(){
            return this.data.board[this.$route.params.page-1].memo
        }
    }
}
</script>