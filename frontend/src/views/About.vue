<template>
  <div class="graph-box-report">
        homeeeeee
            <div ref="learning_curve"></div>

  </div>
</template>
<script>
import Plotly from "plotly.js-basic-dist";
import { mapGetters } from "vuex";
export default {
  name: "Graph",
  components: {},
  data() {
    return {
      learningCurveData: [
        {
          x: [],
          y: [],
          // error_y: {
          //   type: "data",
          //   array: [],
          //   visible: true
          // },
          type: "scatter",
          marker: { size: 1 }
        }
      ]
    };
  },
  mounted() {
      
    //  Plotly.plot(this.$refs.learning_curve ,
    //   [
    //     {
    //       y: [0],
    //       mode: "lines",
    //       line: { color: "#80CAF6" }
    //     }
    //   ],
    //   this.layout,
    //   {
    //     displaylogo: false,
    //     responsive: true
    //   });


    //  setInterval(()=>{
    //   //    console.log("ffff");

    //   //  // request
    //   //  // fill learningCurveData
    //   //  this.learningCurveData[0].x = [1,2,3,4,5]
    //   //  this.learningCurveData[0].y= [1,6,3,1,5]

    //   //  // plotly react
    //   //   Plotly.react(
    //   //       this.$refs.learning_curve,
    //   //       [...this.learningCurveData],
    //   //       this.layout
    //   //     );
    //  },1000)
  },
  created() {},
  methods: {},
  watch: {
    getData : {
      handler(){

        console.log("dddd");
        
        console.log(   this.Gdata);
        
      }
    }
    // getScheduledSession: {
    //   handler() {
    //     if (this.getScheduledSession?.Report?.stat?.learning) {
    //       const learningObject = this.getScheduledSession.Report.stat.learning;
    //     const CycleIndexes = Object.keys(
    //         this.getScheduledSession?.Report?.stat?.learning
    //       );
    //       for (const index of CycleIndexes) {
    //         // y = learning_diff
    //         // x = index
    //         // error = learning_pooled_std
    //         this.learningCurveData[0].x[index - 1] = index;
    //         this.learningCurveData[0].y[index - 1] =
    //           learningObject[index].score;
    //         // this.learningCurveData[0].error_y.array[index] =
    //         //   learningObject[index].learning_pooled_std;
    //       }
    //       Plotly.react(
    //         this.$refs.learning_curve,
    //         this.learningCurveData,
    //         this.layout
    //       );
    //     }
    //   }
    // }
  },
  computed: {
    ...mapGetters(["_$"]),
    layout() {
      return {
        xaxis: {
          title: {
            text: "Average",
            font: {
              family: "Courier New, monospace",
              size: 18,
              color: "#7f7f7f"
            }
          }
        },
        yaxis: {
        range : [65,215],
          title: {
            text: "Time",
            font: {
              family: "Courier New, monospace",
              size: 18,
              color: "#7f7f7f"
            }
          }
        }
      };
    }
  },
  props: ["Gdata"],
  destroyed: function() {},
  beforeUpdate() {}
};
</script>
<style  scoped>
.first-row {
  padding-top: 20px;
  padding-left: 26px;
  display: flex;
  justify-content: space-between;
}
</style>