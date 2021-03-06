import { mapState } from 'vuex'
import db from "../../firebase.js";

export default {
    data() {
      return {
  
      }
    },
    methods : {
      updateProgress() {
        if (this.userProfile.jValue < 100) {
          db.collection('users').doc(this.currentUser.uid).set({
            jValue: Math.min(this.userProfile.jValue + (100/15))
          }, {merge: true})
          console.log('jValue + ' + 100/15)
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
      },
      incrementActivity(id) { // change document id
        db.collection('java exercises activity').doc(id).get().then(doc => {
          this.setActivity(id, doc.data().clicks + 1)
          console.log(id + ' exercise completed')
        })
        .catch((err) => {
          console.log(err)
          db.collection('java exercises activity').doc(id).set({clicks: 1})
        })
      },
      setActivity(id, number) {
        db.collection('java exercises activity').doc(id).set({clicks: number})
      },
    },
    computed: {
      ...mapState(['userProfile', 'currentUser']),
    },
  }