/**
 * @Author: TrentonLi
 * @Date: 2025/2/08
 * @LastEditors: TrentonLi
 * @Description: 回退按钮
 */
import {defineComponent} from "vue";
import {useRouter} from "vue-router";
import {NButton} from "naive-ui";

export default defineComponent({
    name: 'Back',
    setup() {
        const router = useRouter();

        const goBack = () => {
            if (window.history.length > 1) {
                router.back();
            } else {
                router.push('/home').then(); // 如果没有历史记录，跳转到首页
            }
        };

        return () => (
            <NButton strong secondary onClick={goBack}>
                Back
            </NButton>
        );
    },
})