const os = require('os')

// infor about the user
const user = os.userInfo()
console.log(user)

// method returns the system uptime
console.log(`The system us been up for ${os.uptime()} seconds`)

const currentUser = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentUser)
