import { getStorage, ref } from "firebase/storage";

const storage = getStorage();
const gsReference = ref(storage,'gs://hello-world-437fa.appspot.com/muggle.png');

function App () {
    return(
        <div className="App">
            <img src="{gsReference}" alt="muggle"></img>
        </div>
    );
}

export default App;