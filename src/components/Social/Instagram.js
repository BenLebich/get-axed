import React from "react";
import * as admin from "firebase-admin";
import serviceAccount from "../../../service_acc.json";



export default class Instagram extends React.Component {
    constructor() {
        super()
        this.state = {instagram: {}};
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
        this.db = admin.firestore();
    }

    componentDidMount() {
        this.db.collection('instagram').get().then(docs => {
            console.log(docs)
        })
    
    }

    render() {
        console.log(this.state)
      return (
          <div>
              {this.state.instagram.latestPosts ? <div>IG EXISTS</div> : <div>NO IG FOUND</div>}
          </div>
      )
    }
}