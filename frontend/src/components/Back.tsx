/**
 * @Author: TrentonLi
 * @Date: 2025/2/08
 * @LastEditors: TrentonLi
 * @Description: 回退按钮
 */
import {defineComponent} from "vue";
import {useRouter} from "vue-router";
import {NButton} from "naive-ui";
// 定义 Naive UI 支持的按钮类型
type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export default defineComponent({
    name: 'Back',
    props:{
      btnText:{
        type: String,
        default: 'Back'
      },
        type:{
            type: String as () => ButtonType,
            default: 'info'
        }
    },
    setup(props) {
        const router = useRouter();

        const goBack = () => {
            if (window.history.length > 1) {
                router.back();
            } else {
                router.push('/home').then(); // 如果没有历史记录，跳转到首页
            }
        };

        return () => (
            <NButton strong secondary onClick={goBack} type={props.type}>
                {props.btnText}
            </NButton>
        );
    },
})