<template>
  <div class="daily-tech-page">
    <el-form
      :model="addForm"
      inline>
      <el-form-item label="" prop="Knowledge">
        <el-input v-model="addForm.Knowledge" size="small" placeholder="Add"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="add">Add</el-button>
        <el-button type="primary" size="small">Export</el-button>
      </el-form-item>
      <!-- <el-form-item>
        <el-tag
          v-for="tag in tags"
          :key="tag.name"
          :type="tag.type">
          {{ tag.name }}
        </el-tag>
      </el-form-item> -->
    </el-form>
    <el-steps
      :active="active"
      space="120px"
      finish-status="success">
      <el-step
        v-for="step in steps"
        :key="step.date"
        :status="step.status">
        <div slot="icon">
          {{ step.day }}
        </div>
        <div class="" slot="description">
          <p
            v-for="(tech, index) in step.techs"
            :key="index">
            {{ tech }}
          </p>
        </div>
      </el-step>
    </el-steps>
  </div>
</template>
<script>
import { formatDate } from '@/lib/tools';
export default {
  data () {
    return {
      addForm: {
        Knowledge: ''
      },
      active: 0,
      steps: [
        {
          date: '2019/08/10',
          techs: ['test 3'],
          process: 'finish',
          day: '10'
        },
        {
          date: '20190801',
          techs: ['eest 2'],
          process: 'finish',
          day: '01'
        }
      ],
      tags: [
        { name: '统计', type: '' },
        { name: '分月', type: 'success' },
        { name: '折线统计分页', type: 'info' }
      ]
    };
  },
  methods: {
    add() {
      const value = this.addForm.Knowledge;
      if (!value) {
        return;
      }
      const dateStr = formatDate(new Date(), '-');
      const exists = this.checkExists(dateStr);

      if (exists) {
        this.steps[0].techs.push(value);
      } else {
        this.steps.unshift({
          date: dateStr,
          techs: [value],
          status: 'process',
          day: '' + (new Date().getDate())
        });
      }
    },
    checkExists(dateStr) {
      let lateast = this.steps[0];

      return lateast && lateast.date === dateStr;
    }
  },
}
</script>
<style lang="scss" scoped>
.daily-tech-page {
  width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
}
</style>

