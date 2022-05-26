<template>
  <el-dialog
    :title="dialogTitle"
    :visible.sync="dialogFormVisible"
    :modal-append-to-body="false"
    v-if="dialogFormVisible"
    :showClose="false"
    width="500px"
  >
    <el-form ref="form" label-width="110px" :model="form" :rules="rules">
      <el-form-item label="影院名" prop="cinemaId">
        <el-col :span="22">
          <el-select
            v-model="form.cinemaId"
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
      <el-form-item label="票码" prop="ticketCode">
        <el-col :span="22">
          <el-input v-model="form.ticketCode"></el-input>
        </el-col>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="submitForm()" :disabled="loading"
        ><i class="el-icon-loading" v-if="loading"></i>确 定</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import { fetchCList } from "@/api/tickets/cinemamanage";
import { addVList } from "@/api/tickets/verify";
export default {
  data() {
    return {
      cinemaList: [],
      loading: false,
      dialogFormVisible: false,
      dialogTitle: "",
      form: {
        cinemaId: null,
        ticketCode: null,
      },
      rules: {
        cinemaId: [{ required: true, message: "请选择影院", trigger: "blur" }],
        ticketCode: [{ required: true, message: "请输入票码" }],
      },
    };
  },
  computed: {
    ...mapGetters({
      brandList: "brandList",
    }),
  },
  methods: {
    async show(data) {
      this.dialogTitle = "添加核销";
      await fetchCList({ pageSize: 100 }).then((res) => {
        this.cinemaList = res.data.data;
      });
      this.dialogFormVisible = true;
    },
    cancel() {
      this.isEdit = false;
      this.$refs["form"].resetFields();
      this.form = this.$options.data().form;
      this.dialogFormVisible = false;
    },
    submitForm() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.loading = true;
          addVList(this.form).then((res) => {
            if (res.data.code == 200) {
              this.$emit("fetch-data");
              this.$message.success("核销成功");
            } else {
              this.$message.error(res.data.msg);
            }
            this.loading = false;
            this.$refs["form"].resetFields();
            this.form = this.$options.data().form;
            this.dialogFormVisible = false;
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
