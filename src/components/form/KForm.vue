<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  methods: {
    validate(cb) {
      //获取所有孩子
      //[resultPromise]
      const tasks = this.$children
        .filter((item) => item.prop) //过滤掉没有prop属性的item
        .map((item) => item.validate());
      //统一处理promise结果
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>

<style lang="scss" scoped></style>
