import {TestMessage} from "./enums/TestMessage";

for (const testMessageKey in TestMessage) {
    console.log(`${testMessageKey} !!!`);
}