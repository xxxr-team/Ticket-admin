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
      <el-form-item label="影院名" prop="cinemaName">
        <el-col :span="22">
          <el-input v-model="form.cinemaName"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="所属品牌" prop="brandId">
        <el-col :span="22">
          <el-select
            v-if="form.id"
            v-model="form.brandId"
            filterable
            placeholder="请选择"
            style="width: 100%"
            @blur="selectBlur"
          >
            <el-option
              v-for="(item, index) in brandList"
              :key="index"
              :label="item.brand"
              :value="item.id"
            ></el-option>
          </el-select>
          <el-select
            v-else
            v-model="form.brandId"
            filterable
            placeholder="请选择"
            style="width: 100%"
          >
            <el-option
              v-for="(item, index) in brandList"
              :key="item.id"
              :label="item.label"
              :value="+item.value"
            ></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="经度" prop="longitude">
        <el-col :span="22">
          <el-input type="number" v-model="form.longitude"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="纬度" prop="latitude">
        <el-col :span="22">
          <el-input type="number" v-model="form.latitude"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="地址" prop="addr">
        <el-col :span="22">
          <el-input v-model="form.addr" type="textarea"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="是否支持退票" prop="supportRefund">
        <el-col :span="22">
          <el-select
            v-model="form.supportRefund"
            placeholder="请选择"
            style="width: 100%"
          >
            <el-option label="支持" :value="true"></el-option>
            <el-option label="不支持" :value="false"></el-option>
          </el-select>
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
import { addCinemaList, editCinemaList } from "@/api/tickets/cinemamanage";
export default {
  data() {
    return {
      loading: false,
      dialogFormVisible: false,
      dialogTitle: "",
      isEdit: false,
      form: {
        cinemaName: null,
        brandId: null,
        addr: null,
        latitude: null,
        longitude: null,
        supportRefund: null,
        supportRebook: false,
      },
      rules: {
        cinemaName: [
          { required: true, message: "请输入影院名", trigger: "blur" },
        ],
        brandId: [{ required: true, message: "请选择所属品牌" }],
        addr: [{ required: true, message: "请输入影院地址", trigger: "blur" }],
        latitude: [
          { required: true, message: "请输入影院纬度", trigger: "blur" },
        ],
        longitude: [
          { required: true, message: "请输入影院经度", trigger: "blur" },
        ],
        supportRefund: [{ required: true, message: "请选择是否支持退款" }],
      },
    };
  },
  computed: {
    ...mapGetters({
      brandList: "brandList",
    }),
  },
  methods: {
    show(data) {
      this.dialogTitle = data ? "编辑影院" : "添加影院";
      if (data) {
        this.isEdit = true;
        for (let i in data) {
          if (this.form.hasOwnProperty(i)) {
            this.form[i] = data[i];
          }
        }
      }
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
          if (this.isEdit) {
            editCinemaList(this.form).then((res) => {
              if (res.data.code == 200) {
                this.$emit("fetch-data");
                this.$message.success("编辑影院成功");
              } else {
                this.$message.error(res.data.msg);
              }
              this.loading = false;
      this.$refs["form"].resetFields();
      this.form = this.$options.data().form;
      this.dialogFormVisible = false;
            });
          } else {
            addCinemaList(this.form).then((res) => {
              if (res.data.code == 200) {
                this.$emit("fetch-data");
                this.$message.success("添加影院成功");
              } else {
                this.$message.error(res.data.msg);
              }
              this.loading = false;
      this.$refs["form"].resetFields();
      this.form = this.$options.data().form;
      this.dialogFormVisible = false;
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
