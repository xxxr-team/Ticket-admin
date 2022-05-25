<template>
    <div>
        <el-dialog
        title="座位信息"
        :visible.sync="seatDialogFormVisible"
        :modal-append-to-body="false"
        v-if="seatDialogFormVisible"
        :show-close="false"
      >
        <div class="seat">
            <el-form :inline="true">
                <el-form-item label="设置横排数量">
                    <el-input v-model="xSeat" type="number" :maxlength="2"></el-input>
                </el-form-item>
                <el-form-item label="设置纵排数量">
                    <el-input v-model="ySeat" type="number" :maxlength="2"></el-input>
                </el-form-item>
            </el-form>
            <div class='x' v-for="(value,index1) in seat" :key="index1">
                <div class='y' v-for="(item,index2) in value" :key="index2">
                  <img class="img" :src="require('../../../../src/images/'+item.iconSrc)" @click="changSeat(item,index1,index2)"></img>
                </div>
            </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="seatDialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="commitSeat()">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog
        title="座位生成中..."
        :visible.sync="loadingDialogFormVisible"
        :modal-append-to-body="false"
        v-if="loadingDialogFormVisible"
        :show-close="false"
      >
        <div class='sk-fading-circle'>
          <div class='sk-circle sk-circle-1'></div>
          <div class='sk-circle sk-circle-2'></div>
          <div class='sk-circle sk-circle-3'></div>
          <div class='sk-circle sk-circle-4'></div>
          <div class='sk-circle sk-circle-5'></div>
          <div class='sk-circle sk-circle-6'></div>
          <div class='sk-circle sk-circle-7'></div>
          <div class='sk-circle sk-circle-8'></div>
          <div class='sk-circle sk-circle-9'></div>
          <div class='sk-circle sk-circle-10'></div>
          <div class='sk-circle sk-circle-11'></div>
          <div class='sk-circle sk-circle-12'></div>
        </div>
      </el-dialog>
    </div>
</template>

<script>
import { getSeats,commitSeats } from '@/api/tickets/hall'
export default {
    data() {
        return {
            seatDialogFormVisible: false,
            loadingDialogFormVisible: false,
            seat:[[]],
            seats: [],
            changeSeat:[],
            newSeat:[],
            xSeat:15,
            ySeat:15,
        }
    },
    watch: {
        xSeat(v) {
            this.setSeat()
        },
        ySeat(v) {
            this.setSeat()
        }
    },
    methods: {
          show(row) {
            this.dialogTitle = '影厅座位信息';
            this.hallInfo = row;
            this.seats = [];
            this.seat = [];
            this.newSeat = [];
            this.changeSeat = [];
            this.setSeat();
            this.seatDialogFormVisible = true;
          },
          async setSeat() {
            this.seat = [];
            this.seats = [];
            let json = await getSeats({'hallId':this.hallInfo.id});
            this.seats = json.data.data;
            let yArray = [];
            //遍历座位信息中的 yCoord 行数，保存到 yArray 中
            if(this.seats.length>0){
              for (let a = 0; a < this.seats.length; a++) {
                if (yArray.indexOf(this.seats[a].ycoord) == -1) {
                  yArray.push(this.seats[a].ycoord);
                }
              }
              let totalArray = [];
              for (let b = 0; b < yArray.length; b++) {
                let xxA = [];
                for (let c = 0; c < this.seats.length; c++) {
                  if (yArray[b] == this.seats[c].ycoord) {
                    if (this.seats[c].type == "danren") {//单人座
                        this.seats[c].iconSrc = "seatPre.png";//增加座位图片字段
                    } else if (this.seats[c].type == "road") {//过道
                      this.seats[c].iconSrc = "noSeat.png";
                    } 
                    xxA.push(this.seats[c]);
                  }
                }
                totalArray.push(xxA);//每一行保存到 totalArray 中
              }
              this.seat = totalArray;
              for(let i=this.seat.length;i<this.ySeat;i++){
                let xxA = [];
                let tmp = {};
                tmp.ycoord = i;
                tmp.xcoord = 0;
                tmp.iconSrc = "noSeat.png";
                xxA.push(tmp);
                this.seat.push(xxA);
              }
              for(let i=0;i<this.ySeat;i++){
                for(let j=0;j<this.xSeat;j++){
                  if(j>this.seat[i].length){
                    let tmp = {};
                    tmp.ycoord = i;
                    tmp.xcoord = j;
                    tmp.iconSrc = "noSeat.png";
                    this.seat[i].push(tmp);
                  }
                }
              }
            }else{
              let totalArray = [];
              for(let i=0;i<this.ySeat;i++){
                let xxA = [];
                for(let j=0;j<this.xSeat;j++){
                  let tmp = {};
                  tmp.ycoord = i;
                  tmp.xcoord = j;
                  tmp.iconSrc = "noSeat.png";
                  xxA.push(tmp);
                }
                totalArray.push(xxA);
              }
              this.seat = totalArray;
            }
          },
        changSeat(item,index1,index2) {
            console.log(this.seat)
            if(this.seat[index1][index2].iconSrc === 'noSeat.png'){
              this.seat[index1][index2].iconSrc = 'seatPre.png';
            }else{
              this.seat[index1][index2].iconSrc = 'noSeat.png';
            }
            this.seat.push();
            //有id为改变已有座位
            if(item.id){
              const index = this.changeSeat.indexOf(item);
              if(index != -1){
                this.changeSeat.splice(index,1);
              }else{
                this.changeSeat.push(item);
              }
            }else{
              //无id为增加座位
              const index = this.newSeat.indexOf(item);
              if(index != -1){
                this.newSeat.splice(index,1);
              }else{
                this.newSeat.push(item);
              }
            }
        },
          async commitSeat(){
            if(this.newSeat.length>0 || this.changeSeat.length>0){
              this.loadingDialogFormVisible = true;
              let json = await commitSeats({
                  hallId: +this.hallInfo.id,
                  newSeat: JSON.stringify(this.newSeat),
                  changeSeat: JSON.stringify(this.changeSeat),
              })
              if(json.data.code===200){
                this.loadingDialogFormVisible = false;
                this.seatDialogFormVisible = false;
                this.$message.success('修改座位信息成功！');
                this.$emit('fetch-data')
              }else{
                this.$message.error(json.message);
              }
            }
          }
    }
}
</script>

<style lang="scss">
    .el-dialog {
        width:fit-content;
        width:-webkit-fit-content;
        width:-moz-fit-content;
        .seat {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            justify-content: flex-start;
            align-items: center;
            .x {
                display: flex;
                flex-direction: row;
            }
            .y {
                display: flex;
                flex-direction: column;
                .img {
                    margin: 1px;
                    height: 30px;
                    width: 30px;
                }
            }
        }
    }
    
</style>