<template>
    <div>
        <Text2 ref="comRef"></Text2>
    </div>
</template>

<script>
import {ref,onMounted} from '@vue/composition-api';
import Text2 from '../components/Test2'
export default {
    components:{Text2},
    setup () {
        const comRef = ref(null);
        onMounted(()=>{
            // comRef.value.count;
            // comRef.value.Handle();
            console.log(comRef.value)
        })

        return {
            comRef
        }
    }
}
</script>

<style lang="scss" scoped>

</style>