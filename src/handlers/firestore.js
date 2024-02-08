import { serverTimestamp, setDoc, doc
} from 'firebase/firestore'
import {db} from '../lib/firebase.config'


const Firestore = {
    writeDoc: (...args)=> {
        const [inputs, collection_name] = args
        return new Promise(async resolve => {
            const randomIndex = Math.floor(Math.random() * 100000)
            try {
                const docRef = doc(db, 'stocks', `${randomIndex}`);
                await setDoc(docRef, {title: inputs.title, path:inputs.path, createdAt: serverTimestamp()});
                resolve('new doc successfully uploaded')

            }catch(e){

            }
        })
    }

}
export default Firestore

