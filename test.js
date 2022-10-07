const { spawn } = require('child_process'); 

const childPython = spawn('python',['careerann.py']);

childPython.stdout.on('data',(data)=>{
    console.log(`${data}`);
})



childPython.stderr.on('data',(data)=>{
    console.error(`${data}`);
})

childPython.on('close',(code)=>{
    console.log(`child process exited with code ${code}`);
})