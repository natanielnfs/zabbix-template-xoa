const Xo = require('xo-lib').default

const url = 'http://localhost'
const email = 'admin@admin.net'
const password = 'admin'
const [backupId, paramName] = process.argv.slice(2)

async function run()
{
        const xo = new Xo({url})
        await xo.open()
        await xo.signIn({email, password})
        const [log] = await xo.call('backupNg.getLogs', {id: backupId})
        console.log(JSON.stringify(log[paramName]))
        await xo.close()
}


run()
