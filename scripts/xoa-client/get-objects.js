const Xo = require('xo-lib').default

const url = 'http://localhost'
const email = 'admin@admin.net'
const password = 'admin'
const itemType = process.argv[2]

const params = { filter: {type: itemType} }

async function run()
{
        const xo = new Xo({url})
        await xo.open()
        await xo.signIn({email, password})
        const objects = await xo.call('xo.getAllObjects', params)
        const zabbixObjects = {data: Object.keys(objects).map(object => (Object.fromEntries([[`#{${itemType}}`, object]])))}
        console.log(JSON.stringify(zabbixObjects))
        await xo.close()
}


run()
