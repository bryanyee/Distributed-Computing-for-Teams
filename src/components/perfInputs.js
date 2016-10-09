const workerArr = [];
let globalStartTime;
let localp2p;

function startWorkers(p2p, begin, end, numWorkers, hash, startTime, length) {
  localp2p = p2p;
  globalStartTime = startTime;
  const numCombos = end - begin;
  console.log('in start workers', 'begin', begin, 'end', end, 'numCombos', numCombos);
  const workerFrag = Math.round(numCombos / numWorkers);
  for (let i = 0; i < numWorkers; i += 1) {
    const workerBegin = begin + (workerFrag * i);
    const workerEnd = workerBegin + (workerFrag - 1);
    const id = i;
    console.log('Id: ', id, 'workerBegin: ', workerBegin, 'workerEnd :', workerEnd);
    const worker = new Worker('worker.js');
    workerArr.push(worker);
    worker.onmessage = handleMessage;
    worker.postMessage({ cmd: 'start', hash, id, workerBegin, workerEnd, length});
  }
}

// handling worker message
function handleMessage(e) {
  if (e.data.cmd === 'success') {
    const duration = Math.round((Date.now() - globalStartTime) / 1000);
    console.log(`Worker: ${e.data.id} found word: ${e.data.clearText} in ${duration} seconds`);
    
    localp2p.emit('crackedPassword', { clearText: e.data.clearText, duration });

    workerArr.forEach((worker) => {
      worker.terminate();
    });
  }
}

export { startWorkers }