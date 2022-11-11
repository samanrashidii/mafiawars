import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    dashboard: {
      day: true,
      round: 0,
      actionBox: [],
      actionProgress: 0,
      log: {
        mainText: '',
        sideText: '',
        passiveText: '',
        resultText: '',
        image: '',
        resultImage: '',
        godImage: '',
        godText: '',
        voteImage: '',
        voteText: ''
      },
      targetData: {},
      lastPhaseAction: false,
      voteKill: false,
      mafiaParty: true,
      historyLog: [],
      totalHistory: [],
      lastNight: [],
      lastNightBox: false,
      revengeKillBox: false,
      revengeUsed: false,
      avenger: null,
      justiceUsed: false,
      killerChanged: false,
      nextKiller: {
        icon: null,
        alt: null,
        name: null,
        player: null
      }
    }
  },
  getters: {
    dashboard: state => state.dashboard
  },
  mutations: {
    SET_DASHBOARD: (state, dashboard) => {
      Vue.set(state, 'dashboard', dashboard)
    }
  },
  actions: {
    SetDashboard: (context, dashboard) => {
      context.commit('SET_DASHBOARD', dashboard)
    }
  }
}
