//----------Async Await-------------

const getDataa = async () => {
    let y = await "Prince";
    console.log(y);
}

console.log(1);
getDataa();
console.log(2);


// 1
// 2
// Prince  //-> Await line print later on 




async function getData(){
    let result= await fetch('https://dummy.restapiexample.com/api/v1/employees')
    console.log('result:',result);
}
getData();


/*
result: Response {
    [Symbol(realm)]: null,
    [Symbol(state)]: {
      aborted: false,
      rangeRequested: false,
      timingAllowPassed: true,
      requestIncludesCredentials: true,
      type: 'default',
      status: 429,
      timingInfo: {
        startTime: 54.7035,
        redirectStartTime: 0,
        redirectEndTime: 0,
        postRedirectStartTime: 54.7035,
        finalServiceWorkerStartTime: 0,
        finalNetworkResponseStartTime: 0,
        finalNetworkRequestStartTime: 0,
        endTime: 0,
        encodedBodySize: 595,
        decodedBodySize: 0,
        finalConnectionTimingInfo: null
      },
      cacheState: '',
      statusText: 'Too Many Requests',
      headersList: HeadersList {
        cookies: null,
        [Symbol(headers map)]: [Map],
        [Symbol(headers map sorted)]: null
      },
      urlList: [ URL {} ],
      body: { stream: undefined }
    },
    [Symbol(headers)]: HeadersList {
      cookies: null,
      [Symbol(headers map)]: Map(13) {
        'date' => [Object],
        'server' => [Object],
        'content-type' => [Object],
        'content-length' => [Object],
        'x-ratelimit-limit' => [Object],
        'x-ratelimit-remaining' => [Object],
        'retry-after' => [Object],
        'x-ratelimit-reset' => [Object],
        'cache-control' => [Object],
        'vary' => [Object],
        'content-encoding' => [Object],
        'x-endurance-cache-level' => [Object],
        'x-nginx-cache' => [Object]
      },
      [Symbol(headers map sorted)]: null
    }
  }

  */



function getRandomNumber(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let num=Math.floor(Math.random()*10)+1;
        console.log('Random No: ', num);
        resolve();
      },1000)
    })
  }

async function GetNum(){
  await getRandomNumber();       // wait for 1 sec then return a random no
  await getRandomNumber();     // wait for 1 sec after 1st call then return a random no
  getRandomNumber();          // wait for 1 sec after 2nd call then return a random no
}
GetNum();


/*
Random No:  8
Random No:  2
Random No:  9
*/
