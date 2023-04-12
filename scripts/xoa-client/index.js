const Xo = require('xo-lib').default

const url = 'http://localhost'
const email = 'admin@admin.net'
const password = 'admin'
const command = process.argv[2]
const rest = process.argv.slice(2)

const params = Object.fromEntries(rest.map(i => {
    i = i.split('=')
    try {
        i[1] = JSON.parse(i[1])
    } catch (e) {}

    return i
}))

async function run()
{
        const xo = new Xo({url})
        await xo.open()
        await xo.signIn({email, password})
        console.log(JSON.stringify(await xo.call(command, params)))
        await xo.close()
}


run()
