import { mapState } from 'vuex'

export default {
  components: {
  },
  computed: {
    ...mapState({
      modalActive: state => state.modals.modalActive,
      activeModalName: state => state.modals.activeModalName,
      activeModalData: state => state.modals.activeModalData,
    }),
  },
  methods: {
    hide() {
      this.$store.dispatch('modals/hide');
    },
    decorateData(data) {
      return {
        ...data,
        onAccepted: () => {
          this.hide();
          if (data.onAccepted !== undefined) {
            data.onAccepted();
          }
        },
        onDenied: () => {
          this.hide();
          if (data.onDenied !== undefined) {
            data.onDenied();
          }
        },
      }
    },
  },
};
