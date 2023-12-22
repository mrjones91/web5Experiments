//create did with web5
import { Web5 } from "@web5/api";
const { web5, did: myDid } = await Web5.connect();

console.log(myDid);
console.log();

//create recrod store in user dwn
const { record } = await web5.dwn.records.create({
    data: 'Hello, Web5!',
    message: {
        dataFormat: 'text/plain'
    }
});
//read
const readResult = await record.data.text();
console.log('read Result is ' + readResult);

//update
const updateResult = await record.update({
    data: 'Hello, Web5! I am updated.',
  });

//read
const readResult2 = await record.data.text();
console.log('read Result is ' + readResult2);

//delete
const deleteResult = await web5.dwn.records.delete({
    message: {
      recordId: record.id,
    },
  });

console.log(deleteResult);

//console.log(web5.dwn.records.query());
// const { recorda } = await web5.dwn.records.create({
//     data: 'TBD Hackathon Winners: C007 Devs',
//     message: {
//         dataFormat: 'text/plain'
//     }
// });

// console.log('writeResult', recorda);
// console.log();

// const readResult = await record.data.text();
// const recordData = await recorda.data.json();

// console.log('readResult', readResult);
// console.log('json', recordData);

