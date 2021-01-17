<template>
    <div>
        <p>
            {{count}}
        </p>
    </div>
</template>

<script>
import {ref} from '@vue/composition-api';
export default {
    setup () {
        const count = ref('count');
        const Handle = (()=>{
            console.log('hello');
        })
        return {
            count,
            Handle
        }
    }
}
</script>

<style lang="scss" scoped>

</style>