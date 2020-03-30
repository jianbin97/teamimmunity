import database from "../../firebase.js";

export default {
  data() {
    return {

    }
  },
  methods : {
    incrementClick(id) { // change document id
      database.collection('clicks').doc(id).get().then(doc => {
        this.setData(id, doc.data().clicks + 1)
        console.log(id)
      })
      .catch((err) => {
        console.log(err)
        database.collection('clicks').doc(id).set({clicks: 1})
      })
    },

    setData(id, number) {
      database.collection('clicks').doc(id).set({clicks: number})
    },
    
    getClicks(id) { // change document id
      database.collection('clicks').doc(id).get() 
      .then(doc => {
        console.log(id + ' ' + doc.data().clicks)
      })
    }
  }
}