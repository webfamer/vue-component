<template>
    <div>
        <!-- 组件的v-moal 要实现1.value, 2.input -->
        <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        // vue 默认行为会把属性放到根组件上
        inheritAttrs:false, //避免继承到根组件上 
        props:{
            value:{
                type:String,
                default:''
            },
             type:{
                type:String,
                default:'text'
            },
        },
        methods:{
            onInput(e){
                this.$emit("input",e.target.value)
                //通知父级去执行校验
                this.$parent.$emit('validate')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>