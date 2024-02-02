<script>
import { mapState } from 'vuex';

export default {
    name: 'BaseCharts',
    computed: mapState({
        list: state => state.list
    }),
    watch: {
        list() {
            this.dataSource()
        }
    }
}

</script>