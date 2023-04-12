const Xo = require('xo-lib').default

const url = 'http://localhost'
const email = 'admin@admin.net'
const password = 'admin'
const rest = process.argv.slice(2)

const params = {}

async function run()
{
        const xo = new Xo({url})
        await xo.open()
        await xo.signIn({email, password})
        const logs = await xo.call('backupNg.getLogs', params)
        var jobIDs = logs.filter(log => log.message == 'backup').map(log => log.jobId)
        jobIDs = jobIDs.filter((jobId, i) => jobIDs.indexOf(jobId) === i)
        
        const jobs = jobIDs.map(jobId => {
            const l = logs.filter(log => log.jobId == jobId).sort((x, y) => x.start - y.start)
            return l[l.length - 1]
        })

        const zabbixObjects = {data: jobs.map(job => ({'{#BACKUPID}': job.id}))}
        console.log(JSON.stringify(zabbixObjects))

        await xo.close()
}


run()
