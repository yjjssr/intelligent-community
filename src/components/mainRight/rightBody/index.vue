<template>
  <div class="rightBody">
    <div class="display-left">
      <wrap>
        <template v-slot:header>维修基金使用情况及公益性收入</template>
        <template v-slot:body><maintain-receipt height="130%"></maintain-receipt></template>
      </wrap>
      <wrap>
        <template v-slot:header>社区信息</template>
        <template v-slot:body><community></community></template>
      </wrap>
    </div>
    <div class="display-right">
      <wrap>
        <template v-slot:header>物联网智能硬件</template>
        <template v-slot:body><hardware></hardware></template>
      </wrap>
       <wrap>
        <template v-slot:header>消防通道堆物</template>
        <template v-slot:body><fight-access></fight-access></template>
      </wrap>
    </div>
  </div>
</template>
<script>

import Community  from './community'
import Hardware from './hardware'
import MaintainReceipt from './maintainAndReceipt'
import Wrap from '../../public'
import FightAccess from './fireFightingAccess'
export default {
  components: {
    Wrap,
    MaintainReceipt,
    Community,
    Hardware,
    FightAccess
  }
};
</script>
<style scoped>
.rightBody {
  display: flex;
  justify-content: space-between;
}
.display-left {
  flex: 1;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  
}
.display-right {
  flex: 1;
   display: flex;
  flex-direction: column;
  justify-content:space-between;
  
}
</style>


