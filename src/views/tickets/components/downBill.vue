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
      <el-form :rules="rules" label-width="80px" :model="form" ref="form">
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="down()">确认下载</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { downBill } from "@/api/tickets/order";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cinemaList: [],
      form: {
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
      this.addDialogFormVisible = true;
    },
    async down() {
      downBill().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
