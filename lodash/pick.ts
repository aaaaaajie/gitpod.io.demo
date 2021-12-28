import assert from "assert";
import _ from "lodash";

describe(``, () => {
    it(`pick arr`, async () =>  {
        const arr = [{ id: 1, name: "zhangsan" }, { id: 2, name: "lisi" }];
        const aName = _.pick(arr, ["name"]);
        console.log(aName);
        assert.ok(aName);
        assert.ok(!Array.isArray(aName));
    });

    it(`pick obj`, () => {
        const obj = { id: 1, name: "zhangsan", age: 34 };
        const fields = _.pick(obj, ["name", "age"]);
        console.log(fields);
        assert.ok(fields);
    });

    it(`sortBy`, async () => {
        const arr = [
            { id: 1, name: "111", parent: null, parents: [] },
            { id: 3, name: "333", parent: 2, parents: [2, 1] },
            { id: 2, name: "222", parent: 1, parents: [1] },
            { id: 4, name: "444", parent: 2, parents: [2, 1] },
            { id: 5, name: "555", parent: 1, parents: [1] },
            { id: 6, name: "666", parent: 4, parents: [4, 2, 1] },
        ];

        const retArr = _.sortBy(arr, x => x.parents.length);
        console.log(retArr);
    });
});
