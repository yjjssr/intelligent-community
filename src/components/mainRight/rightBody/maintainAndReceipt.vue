<template>
<div>
  <div class="fund-receipt-wrap">
    <div class="fund-wrap">
      <p>
        <span class="fund-number">90</span>
        <span>万元</span>
      </p>
      <span>当前基金</span>
      <span>维修额度</span>
      <span></span>
    </div>
    <div class="receipt-wrap">
      <p>
        <span>45</span>
        <span>万元</span>
      </p>
      <span>物业公益性收入</span>
      <span>收入总额</span>
      <span></span>
    </div>
  </div>
  <div ref="revenueChart" class="fund-receipt-chart" :style="{height:height}"></div>
</div>

</template>
<script>
import echarts from "echarts";
export default {
  props: {
    height: String
  },
  methods: {
    init() {
      this.chart_dom = echarts.init(this.$refs.revenueChart);
      let option = {
        dataset: {
          source: [
            ["revenue", "维修基金额度", "物业公益性收入"],
            ["第一季度", 1730500, 16000],
            ["第二季度", 1730500, 15000],
            ["第三季度", 1730500, 14300],
            ["第四季度", 0, 0]
          ]
        },
        grid: {
          top: "5%",
          left: "25%",
          bottom: "20%",
          right: "15%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          interval: 600000,
          axisLabel: {
            color: "rgba(255,255,255,0.6)",
            formatter: function(value, index) {
              let val = (value / 10000).toFixed(0);
              console.log(val);
              return val + "万";
            }
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 2,
              color: "rgba(255,255,255,0.05)"
            }
          }
        },
        yAxis: {
          type: "category",
          axisLabel: {
            align: "right",
            color: "rgba(255,255,255,0.6)"
          },
          axisLine: {
            lineStyle: {
              width: 2,
              color: "rgba(255,255,255,0.05)"
            }
          }
        },
        series: [
          {
            type: "bar",
            barWidth: "5",
            barGap: "1",
            itemStyle: {
              color: "#3573f1"
            }
          },
          {
            type: "bar",
            barGap: "1",
            barWidth: "5",
            itemStyle: {
              color: "#00b9a5"
            }
          }
        ]
      };
      this.chart_dom.setOption(option);
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="scss" scoped>
.fund-receipt-wrap {
  display: flex;
  padding: 30px 20px 50px;
  color: #9ea5b2;
  .fund-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      span:first-child {
        color: #3573f1;
      }
    }
    > span:last-child {
      background-color: #9ea5b2;
      height: 6px;
      width: 40%;
      border-radius: 10px;
      margin-top: 15px;
    }
  }
  .receipt-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      span:first-child {
        color: #00b9a5;
      }
    }
    > span:last-child {
      background-color: #9ea5b2;
      height: 6px;
      width: 40%;
      border-radius: 10px;
      margin-top: 15px;
    }
  }
}
</style>