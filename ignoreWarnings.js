import { LogBox } from "react-native";

if (__DEV__) {
    // List of warnings to ignore
    const ignoreWarns = [
        "EventEmitter.removeListener",
        "[fuego-swr-keys-from-collection-path]",
        "Setting a timer for a long period of time",
        "ViewPropTypes will be removed from React Native",
        "AsyncStorage has been extracted from react-native",
        "exported from 'deprecated-react-native-prop-types'.",
        "Non-serializable values were found in the navigation state.",
        "VirtualizedLists should never be nested inside plain ScrollViews",
    ];

    // Suppress specific warnings
    const warn = console.warn;
    console.warn = (...args) => {
        for (const warning of ignoreWarns) {
            if (args[0]?.startsWith(warning)) {
                return;
            }
        }
        warn(...args);
    };

    // Suppress all red errors
    const error = console.error;
    console.error = (...args) => {
        for (const warning of ignoreWarns) {
            if (args[0]?.startsWith(warning)) {
                return;
            }
        }
        error(...args);
    };

    // Use LogBox to suppress other warnings
    LogBox.ignoreLogs(ignoreWarns);

    // Optionally ignore all warnings
    LogBox.ignoreAllLogs(true);
}
