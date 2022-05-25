<template>
  <div>
    <el-dialog
      title="添加影厅"
      :visible.sync="addDialogFormVisible"
      :modal-append-to-body="false"
      v-if="addDialogFormVisible"
      :show-close="false"
      width="500px"
    >
      <el-form :rules="rules" label-width="80px" :model="hallInfo" ref="form">
        <el-form-item label="影院名" prop="cinemaId">
          <el-col :span="22">
            <el-select
              v-model="hallInfo.cinemaId"
              placeholder="请选择"
              style="width: 100%"
            >
              <el-option
                v-for="(item, index) in cinemaList"
                :key="index"
                :label="item.cinemaName"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="影厅名" prop="hallType">
          <el-col :span="22">
            <el-select
              v-model="hallInfo.hallType"
              placeholder="请选择"
              style="width: 100%"
            >
              <el-option
                v-for="(item, index) in hallList"
                :key="index"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="commitAddHall()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { fetchCList } from "@/api/tickets/cinemamanage";
import { addHall, editHall } from "@/api/tickets/hall";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cinemaList: [],
      hallInfo: {
        cinemaId: null,
        hallType: null,
      },
      rules: {
        cinemaId: [{ required: true, message: "请选择影院" }],
        hallType: [{ required: true, message: "请选择影厅" }],
      },
      addcinemaId: "",
      addHallTypeId: "",
      addDialogFormVisible: false,
    };
  },
  computed: {
    ...mapGetters({
      hallOptions: "hallOptions",
      hallList: "hallList",
    }),
  },
  methods: {
    async show() {
      await fetchCList({ pageSize: 100 }).then((res) => {
        this.cinemaList = res.data.data;
      });
      this.addDialogFormVisible = true;
    },
    async commitAddHall() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.hallInfo.hallName = this.hallOptions[this.hallInfo.hallType];
          this.loading = true;
          if (this.isEdit) {
            editHallt(this.hallInfo).then((res) => {
              if (res.data.code == 200) {
                this.$emit("fetch-data");
                this.$message.success("编辑影厅成功");
              } else {
                this.$message.error(res.data.msg);
              }
              this.loading = false;
              this.$refs["form"].resetFields();
              this.form = this.$options.data().form;
              this.addDialogFormVisible = false;
            });
          } else {
            addHall(this.hallInfo).then((res) => {
              if (res.data.code == 200) {
                this.$emit("fetch-data");
                this.$message.success("添加影厅成功");
              } else {
                this.$message.error(res.data.msg);
              }
              this.loading = false;
              this.$refs["form"].resetFields();
              this.form = this.$options.data().form;
              this.addDialogFormVisible = false;
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
