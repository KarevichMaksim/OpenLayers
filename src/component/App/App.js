import {Map} from "../Map/Map";
import {MainLayout} from "../Layouts/MainLayout/MainLayout";
import {MapInfo} from "../Map/MapInfo/MapInfo";

function App() {
    return (
        <MainLayout>
            <Map/>
            <MapInfo />
        </MainLayout>
    );
}

export default App;
