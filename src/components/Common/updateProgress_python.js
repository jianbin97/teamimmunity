import { mapState } from 'vuex'
import db from "../../firebase.js";

export default {
    data() {
      return {
  
      }
    },
    methods : {
      updateProgress() {
        if (this.userProfile.pValue < 100) {
          db.collection('users').doc(this.currentUser.uid).set({
            pValue: Math.min(this.userProfile.pValue + (100/15), 100)
          }, {merge: true})
          console.log('pValue + ' + 100/15)
        }
        db.collection('users').doc(this.currentUser.uid).set({
          oValue: this.userProfile.oValue + (100/45)
        }, {merge: true})
        console.log('0Value + ' + 100/45)
      },
      updateCurrentlyOn(name) {
        db.collection('users').doc(this.currentUser.uid).set({
          current: name
        }, {merge: true})
      },
      updateRecommended(name) {
        db.collection('users').doc(this.currentUser.uid).set({
          recommended: name
        }, {merge: true})
      }
    },
    computed: {
      ...mapState(['userProfile', 'currentUser']),
    },
  }