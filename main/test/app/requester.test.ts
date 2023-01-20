import { describe, expect, test } from '@jest/globals';
import { Requester } from "../../src/app/requester";

let effectiveSession = "";
let effectiveRequester = new Requester(effectiveSession);
let invalidSession = "123";
let invalidRequester = new Requester(invalidSession);

function testIsEffectiveSession() {
    test(`session ${effectiveSession} is effective`, async () => {
        const result = await effectiveRequester.isEffectiveSession();
        expect(result).toBe(true);
    });

    test(`session ${invalidSession} is invalid`, async () => {
        const result = await invalidRequester.isEffectiveSession();
        expect(result).toBe(false);
    });
}

function testGetCharacters() {
    const accountName = "小左啊";
    const realm = "pc";

    test(`get characters success`, async () => {
        const result = await effectiveRequester.getCharacters(accountName, realm) as unknown as Array<any>;
        expect(result.length > 0).toBe(true);
    });
}

function testGetPassiveSkills() {
    const accountName = "小左啊";
    const character = "斗鱼搜小左呀";
    const realm = "pc";

    test(`get passive skills success`, async () => {
        const result = await effectiveRequester.getPassiveSkills(accountName, character, realm);
        expect(result !== null && result !== undefined).toBe(true);
    });
}

testIsEffectiveSession();
testGetCharacters();
testGetPassiveSkills();