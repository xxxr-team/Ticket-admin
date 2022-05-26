<!--
  -    Copyright (c) 2018-2025, test All rights reserved.
  -
  - Redistribution and use in source and binary forms, with or without
  - modification, are permitted provided that the following conditions are met:
  -
  - Redistributions of source code must retain the above copyright notice,
  - this list of conditions and the following disclaimer.
  - Redistributions in binary form must reproduce the above copyright
  - notice, this list of conditions and the following disclaimer in the
  - documentation and/or other materials provided with the distribution.
  - Neither the name of the pig4cloud.com developer nor the names of its
  - contributors may be used to endorse or promote products derived from
  - this software without specific prior written permission.
  - Author: test
  -->

<template>
  <div class="execution">
    <basic-container>
      <avue-crud
        ref="crud"
        :page.sync="page"
        :data="tableData"
        :table-loading="tableLoading"
        :option="tableOption"
        @search-change="searchChange"
        @search-reset="resetChange"
        @on-load="getList"
        @size-change="sizeChange"
        @current-change="currentChange"
        @refresh-change="refreshChange"
      >
        <template slot-scope="scope" slot="menuLeft">
          <el-button
            type="primary"
            icon="el-icon-plus"
            size="small"
            @click="addVerify"
            >核销票据</el-button
          >
        </template>
        <template slot-scope="scope" slot="menu">
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >撤销</el-button
          >
        </template>
      </avue-crud>
    </basic-container>
    <add-verify ref="addverify" @fetch-data="getList"></add-verify>
  </div>
</template>

<script>
import { fetcVhList } from "@/api/tickets/verify";
import { tableOption } from "@/const/crud/tickets/refund";
import addVerify from "./components/addVerify.vue";

export default {
  name: "Verify",
  components: {
    addVerify,
  },
  data() {
    return {
      params: {
        curPage: 1,
        pageSize: 10,
      },
      dataSourceList: [],
      tableData: [],
      formData: {},
      formBatchData: {},
      box: false,
      boxBatch: false,
      searchform: {},
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 10, // 每页显示多少条
      },
      // 预览参数
      preview: {
        open: false,
        title: "代码预览",
      },
      tableLoading: false,
      tableOption: tableOption,
    };
  },
  created() {
    // this.getdataSourceList();
  },
  methods: {
    getList(params) {
      //   this.tableLoading = true;
      //   fetcVhList({
      //     ...this.searchform,
      //     ...this.params,
      //   }).then((response) => {
      //     this.tableData = response.data.data;
      //     this.page.total = response.data.total;
      //     this.tableLoading = false;
      //   });
    },
    async searchChange(params, done) {
      this.searchform = await params;
      await this.getList();
      await done();
      // this.getList({ ...params, ...this.params });
    },
    handleDelete(row) {
      this.$confirm("此操作将撤销该订单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteList({ id: row.id }).then((res) => {
            if (res.data.code == 200) {
              this.getList();
              this.$message({
                type: "success",
                message: "撤销成功!",
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
    resetChange() {
      this.searchform = {};
      this.getList();
    },
    handleDown: function (row) {
      this.formData.tableName = row.tableName;
      this.box = true;
    },
    addVerify() {
      this.$refs.addverify.show();
    },
    sizeChange(pageSize) {
      this.page.pageSize = pageSize;
    },
    currentChange(current) {
      this.page.currentPage = current;
    },
    refreshChange() {
      this.getList(this.page);
    },
  },
};
</script>

<style lang="scss" scoped></style>
