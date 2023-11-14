import Spinner from "../components/Spinner";

export function loading(testCase, actual) {
	return testCase ? actual : <Spinner />;
}
