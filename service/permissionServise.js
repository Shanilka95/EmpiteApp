import { Alert } from 'react-native';
import { Platform } from 'react-native';
import { checkMultiple, PERMISSIONS, RESULTS } from 'react-native-permissions';

export async function requestPermission() {
    await checkPermissions();
}

export async function checkPermissions() {
    if (Platform.OS === "ios") {
        await checkMultiple([PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]).then((statuses) => {
            switch (statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]) {
                case RESULTS.UNAVAILABLE:
                    Alert.alert('Location when in use is not available on this device.');
                    break;
                case RESULTS.DENIED:
                    Alert.alert('Location when in use permission has not been requested,', ' you have to set permissions manually in settings.');
                    break;
                case RESULTS.LIMITED:
                    Alert.alert('Location when in use permission is limited:', ' some actions are possible.');
                    break;
                case RESULTS.GRANTED:
                    console.log('Location when in use permission is granted.');
                    break;
                case RESULTS.BLOCKED:
                    Alert.alert('Location when in use permission is denied', ' and not requestable anymore, you have to set permissions manually in settings.');
                    break;
            };
        });
    } else {
        switch (statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]) {
            case RESULTS.UNAVAILABLE:
                Alert.alert('Location is not available on this device.');
                break;
            case RESULTS.DENIED:
                Alert.alert('Location permission has not been requested,', ' you have to set permissions manually in settings.');
                break;
            case RESULTS.LIMITED:
                Alert.alert('Location permission is limited:', ' some actions are possible.');
                break;
            case RESULTS.GRANTED:
                console.log('Location permission is granted.');
                break;
            case RESULTS.BLOCKED:
                Alert.alert('Location permission is denied', ' and not requestable anymore, you have to set permissions manually in settings.');
                break;
        };
    }

}
