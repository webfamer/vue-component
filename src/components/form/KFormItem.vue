<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop:{
      type: String,
    }
  },
  data() {
    return {
      error: "",
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      //规则  
      const rules = this.form.rules[this.prop]
      //当前值  
      const value = this.form.model[this.prop]
      //创建描述对象  
      const desc ={[this.prop]:rules}

      //执行校验 
      const schema = new Schema(desc);
        schema.validate({[this.prop]:value},errors=>{
          if(errors){
            this.error = errors[0].message
            console.log(this.error)
          }else{
            this.error= ''
          }
        })
    },
  },
};
</script>

<style lang="scss" scoped></style>
