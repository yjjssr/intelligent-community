<template>
  <div class="discription-wrap">
    <div class="item-warp" v-for="item in items">
      <div class="item-title">{{item.title}}</div>
      <div class="item-diescription">{{item.des}}</div>
      <div class="item-bottom">
        <span>截止时间:{{item.date}}</span>
        <span>类型:{{item.type}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "路面维修",
          des:
            "小区即将在明天开始进行路面维修工作，预计工作周期是十个月，给各为业主带来不便请谅解，给各为业主带来不便敬请谅解",
          date: "2019-09-09",
          type: "公告"
        },
        {
          title: "5-12公益活动",
          des:
            "小区将在2019-08-09举办一场为期3天的公益活动，希望广大业务积极参与",
          date: "2019-09-09",
          type: "公告"
        },
        {
          title: "路面维修",
          des:
            "小区即将在明天开始进行路面维修工作，预计工作周期是十个月，给各为业主带来不便请谅解",
          date: "2019-09-09",
          type: "公告"
        },
        {
          title: "路面维修",
          des:
            "小区即将在明天开始进行路面维修工作，预计工作周期是十个月，给各为业主带来不便请谅解",
          date: "2019-09-09",
          type: "公告"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.discription-wrap {
  display: flex;
  flex-direction: column;

  .item-warp {
    margin: 0 15px;
    border-bottom: 1px solid #324263;
    .item-title {
      color: #fff;
      font-size: 14px;
      text-align: left;
      padding: 15px 0;
    }
    .item-diescription {
      font-size: 12px;
      text-align: left;
      line-height: 1.8;
    }
    .item-bottom {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      padding: 10px 0;
    }
  }
  .item-warp:last-child {
    border-bottom: none;
  }
}
</style>