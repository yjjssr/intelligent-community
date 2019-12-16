<template>
  <div class="main-wrap">
    <div class="entrance-wrap">
      <div class="title">门禁</div>
      <div class="entrance-body">
        <div class="entrance-item">
          <div class="entrance-bg">{{entrance[0].num}}</div>
          <div class="entrance-dec">{{entrance[0].title}}</div>
        </div>
        <div class="entrance-item">
          <div class="entrance-bg">{{entrance[0].num}}</div>
          <div class="entrance-dec">{{entrance[0].title}}</div>
        </div>
        <div class="entrance-item">
          <div class="entrance-bg">{{entrance[0].num}}</div>
          <div class="entrance-dec">{{entrance[0].title}}</div>
        </div>
        <div class="entrance-item">
          <div class="entrance-bg">{{entrance[0].num}}</div>
          <div class="entrance-dec">{{entrance[0].title}}</div>
        </div>
      </div>
      <div class="entrance-body">
        <div class="entrance-item">
          <div class="entrance-bg">{{entrance[0].num}}</div>
          <div class="entrance-dec">{{entrance[0].title}}</div>
        </div>
        <div class="entrance-item">
          <div class="entrance-bg">{{entrance[0].num}}</div>
          <div class="entrance-dec">{{entrance[0].title}}</div>
        </div>
        <div class="entrance-item">
          <div class="entrance-bg">{{entrance[0].num}}</div>
          <div class="entrance-dec">{{entrance[0].title}}</div>
        </div>
        <div class="entrance-item">
          <div class="entrance-bg">{{entrance[0].num}}</div>
          <div class="entrance-dec">{{entrance[0].title}}</div>
        </div>
      </div>
    </div>
    <div class="elevator-wrap">
      <div class="title">
        <span>电梯</span>
        <span>(设备总数{{elevator.total_num}},在线数{{elevator.inline_num}})</span>
      </div>
      <div class="elevator-body-wrap">
        <div class="tab-title">
          <div class="tab-title-item" @click="changeTab" data-type="1">
            <div :class="[{'tab-active':elevator.type=='1'},'tab']">T1</div>
          </div>
          <div class="tab-title-item" @click="changeTab" data-type="2">
            <div :class="[{'tab-active':elevator.type=='2'},'tab']">T2</div>
          </div>
        </div>
        <div class="body-wrap">
          <div class="tab-body">
            <div class="body-item">
              <img src="../../../assets/icon_cengshu.png" />
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
            <div class="body-item">
              <img src="../../../assets/icon_renshu.png" />
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
            <div class="body-item">
              <img src="../../../assets/icon_guanmen.png" />
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
            <div class="body-item">
              <img src="../../../assets/icon_wuhoumen.png" />
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
            <div class="body-item">
              <img src="../../../assets/icon_shangxing.png" />
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
            <div class="body-item">
              <img src="../../../assets/icon_sudu.png" />
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
            <div class="body-item">
              <img src="../../../assets/icon_wendi.png" />
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
            <div class="body-item">
              <img src="../../../assets/icon_dianliang.png" />
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
          </div>
          <div class="tab-body">
            <div class="body-item">
              <div class="body-bg">{{elevator.detail.layerNumber}}</div>
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
            <div class="body-item">
              <div class="body-bg">{{elevator.detail.layerNumber}}</div>
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
            <div class="body-item">
              <div class="body-bg">{{elevator.detail.layerNumber}}</div>
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
            <div class="body-item">
              <div class="body-bg">{{elevator.detail.layerNumber}}</div>
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
            <div class="body-item">
              <div class="body-bg">{{elevator.detail.layerNumber}}</div>
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
            <div class="body-item">
              <div class="body-bg">{{elevator.detail.layerNumber}}</div>
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
            <div class="body-item">
              <div class="body-bg">{{elevator.detail.layerNumber}}</div>
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
            <div class="body-item">
              <div class="body-bg">{{elevator.detail.layerNumber}}</div>
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
            <div class="body-item">
              <div class="body-bg">{{elevator.detail.layerNumber}}</div>
              <div class="body-item-des">{{elevator.detail.layerNumber}}层</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="barrier-wrap">
      <div class="title">道闸</div>
      <div class="barrier-body">
        <div class="barrier-item">
          <div class="barrier-bg">{{barrier.num}}</div>
          <div class="barrier-des">{{barrier.des}}</div>
        </div>
        <div class="barrier-item">
          <div class="barrier-bg">{{barrier.num}}</div>
          <div class="barrier-des">{{barrier.des}}</div>
        </div>
        <div class="barrier-item">
          <div class="barrier-bg">{{barrier.num}}</div>
          <div class="barrier-des">{{barrier.des}}</div>
        </div>
        <div class="barrier-item">
          <div class="barrier-bg">{{barrier.num}}</div>
          <div class="barrier-des">{{barrier.des}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      entrance: [
        {
          title: "设置总数",
          num: 123
        },
        {
          title: "设置总数",
          num: 123
        },
        {
          title: "设置总数",
          num: 123
        },
        {
          title: "设置总数",
          num: 123
        },
        {
          title: "设置总数",
          num: 123
        },
        {
          title: "设置总数",
          num: 123
        },
        {
          title: "设置总数",
          num: 123
        },
        {
          title: "设置总数",
          num: 123
        }
      ],
      elevator: {
        total_num: 2,
        inline_num: 1,
        type: 1,
        detail: {
          layerNumber: 1,
          hasPerson: "有人",
          doorStatus: "开门",
          runningDict: "上行",
          runningSpeed: "0.00",
          temperature: "25",
          electricity: "100%",
          runTimes: "2",
          doorMachinesTimes: "3",
          brakesTimes: "2",
          contactorTimes: "3",
          steelWireTimes: "4",
          runningTime: "5",
          runningDistance: "10",
          stopTimes: "40"
        }
      },
      barrier: {
        num: 1,
        des: "道闸"
      }
    };
  },
  methods: {
    changeTab: function(e) {
      let currentType = e.currentTarget.dataset.type;
      if (this.elevator == currentType) {
        return;
      } else {
        this.elevator.type = currentType;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.main-wrap {
  padding: 15px;
  .title {
    text-align: left;
    margin: 10px 0;
  }
  .entrance-wrap {
     margin-bottom: 30px;
    .entrance-body {
      display: flex;
      justify-content: space-between;
      .entrance-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .entrance-bg {
          width: 56px;
          height: 56px;
          background-image: url("../../../assets/entranceGuard_bg1.png");
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
   
  }

  .elevator-wrap {
     margin-bottom: 30px;
    .tab-title {
      padding: 5px 0;
      display: flex;
      background-color: #222d4b;
      .tab-title-item {
        flex: 1;
        .tab {
          padding: 10px 0;
        }
      }
    }
    .tab-active {
      display: inline-block;
      border-bottom: 1px solid #fff;
    }
    .body-wrap {
      background-color: #1a2544;
      .tab-body {
        display: flex;
        .body-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 10px 0;
          justify-content: center;
          align-items: center;
          img {
            width: 32px;
            height: 32px;
          }
          .body-bg {
            background-image: url("../../../assets/icon.png");
            width: 32px;
            height: 37px;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
        }
      }
    }
  }
  .barrier-body {
    display: flex;
    justify-content: space-between;
    .barrier-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .barrier-bg {
        background-image: url("../../../assets/entranceGuard_bg1.png");
        background-size: cover;
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>