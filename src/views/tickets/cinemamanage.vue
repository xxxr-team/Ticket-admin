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
        @on-load="getList"
        @search-change="searchChange"
        @search-reset="resetChange"
        @size-change="sizeChange"
        @current-change="currentChange"
        @refresh-change="refreshChange"
      >
        <template slot-scope="scope" slot="menuLeft">
          <el-button
            type="primary"
            icon="el-icon-plus"
            size="small"
            @click="addCinema"
            >添加影院</el-button
          >
        </template>
        <template slot-scope="scope" slot="menu">
          <el-button size="mini" type="primary" @click="editCinema(scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </avue-crud>
    </basic-container>
    <add-cinema ref="addcinema" @fetch-data="getList()"></add-cinema>
  </div>
</template>

<script>
import { fetchCList, deleteList } from "@/api/tickets/cinemamanage";
import { fetchItemList } from "@/api/admin/dict";
import { tableOption } from "@/const/crud/tickets/cinemamanage";
import { mapGetters } from "vuex";
import addCinema from "./components/addCinema.vue";
export default {
  name: "CinemaManage",
  components: {
    addCinema,
  },
  data() {
    return {
      params: {
        pageNumber: 1,
        pageSize: 10,
      },
      dataSourceList: [],
      tableData: [],
      searchform: {},
      box: false,
      boxBatch: false,
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 10, // 每页显示多少条
      },
      tableLoading: false,
      tableOption: tableOption,
    };
  },
  computed: {
    ...mapGetters({
      brandOptions: "brandOptions",
    }),
  },
  created() {
    fetchItemList({
      current: 1,
      size: 100,
      dictId: "1528242252764405761",
    }).then(async (res) => {
      await this.$store.dispatch("Set_Brand_Options", res.data.data.records);
      await this.$store.commit("Get_Brand_List", res.data.data.records);
      this.tableLoading = false;
    });
  },
  methods: {
    async searchChange(params, done) {
      this.searchform = await params;
      await this.getList();
      await done();
      // this.getList({ ...params, ...this.params });
    },
    resetChange() {},
    async getList() {
      this.tableLoading = true;
      fetchCList({
        ...this.params,
        ...this.searchform,
      }).then((response) => {
        this.tableData = response.data.data;
        this.page.total = response.data.total;
        this.tableLoading = false;
      });
    },
    addCinema() {
      this.$refs.addcinema.show();
    },
    editCinema(row) {
      this.$refs.addcinema.show(row);
    },
    sizeChange(pageSize) {
      this.params.pageSize = pageSize;
      this.getList();
    },
    currentChange(current) {
      this.params.pageNumber = current;
      this.getList();
    },
    refreshChange() {
      this.getList(this.page);
    },
    getdataSourceList() {
      fetchSelectDsList().then((response) => {
        this.dataSourceList = response.data.data;
      });
    },
    search() {
      this.getList(this.page);
    },
    handleDelete(row) {
      this.$confirm("此操作将删除该影院, 是否继续?", "提示", {
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
  },
};
</script>

<style lang="scss" scoped></style>
