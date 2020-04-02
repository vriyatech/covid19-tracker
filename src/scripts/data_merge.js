const fs = require('fs')
const _ = require('lodash')

const en2zh = JSON.parse(fs.readFileSync('data/map-translations/en2zh.json'))

const world_file = 'public/data/world.json'
let data = JSON.parse(fs.readFileSync(world_file))

// combine detailed province/state level data from countries
const china_file = 'public/data/china.json'
let chinaData = JSON.parse(fs.readFileSync(china_file))
data[en2zh['China']] = chinaData

const korea_file = 'public/data/korea.json'
let koreaData = JSON.parse(fs.readFileSync(korea_file))
data[en2zh['South Korea']] = {
    ...koreaData,
    ...data[en2zh['South Korea']]
}

const italy_file = 'public/data/italy.json'
let italyData = JSON.parse(fs.readFileSync(italy_file))
data[en2zh['Italy']] = {
    ...italyData,
    ...data[en2zh['Italy']]
}

const us_file = 'public/data/us.json'
let usData = JSON.parse(fs.readFileSync(us_file))
data[en2zh['United States of America']] = usData

const france_file = 'public/data/france.json'
let franceData = JSON.parse(fs.readFileSync(france_file))
let data_france = {
    ...franceData,
    confirmedCount: data[en2zh['France']].confirmedCount,
    curedCount: data[en2zh['France']].curedCount,
    deadCount: data[en2zh['France']].deadCount
}
data_france[en2zh['Metropolitan France']] = {
    ...data_france[en2zh['Metropolitan France']],
    confirmedCount: data[en2zh['France']][en2zh['Metropolitan France']].confirmedCount,
    curedCount: data[en2zh['France']][en2zh['Metropolitan France']].curedCount,
    deadCount: data[en2zh['France']][en2zh['Metropolitan France']].deadCount
}
;[ 'Martinique', 'Saint Barthelemy', 'St Martin' ].forEach((region) => {
    data_france[en2zh['Overseas France']][en2zh[region]] = data[en2zh['France']][en2zh[region]]
    ;[ 'confirmedCount', 'deadCount', 'curedCount' ].forEach((metric) => {
        data_france[en2zh['Overseas France']][metric] = _.mergeWith(
            {},
            data_france[en2zh['Overseas France']][metric],
            data[en2zh['France']][en2zh[region]][metric],
            _.add
        )
    })
})
data[en2zh['France']] = data_france

const germany_file = 'public/data/germany.json'
let germanyData = JSON.parse(fs.readFileSync(germany_file))
data[en2zh['Germany']] = {
    ...germanyData,
    ...data[en2zh['Germany']]
}

const japan_file = 'public/data/japan.json'
let japanData = JSON.parse(fs.readFileSync(japan_file))
data[en2zh['Japan']] = {
    ...japanData,
    ...data[en2zh['Japan']]
}

const austria_file = 'public/data/austria.json'
let austriaData = JSON.parse(fs.readFileSync(austria_file))
data[en2zh['Austria']] = {
    ...austriaData,
    ...data[en2zh['Austria']]
}

const spain_file = 'public/data/spain.json'
let spainData = JSON.parse(fs.readFileSync(spain_file))
data[en2zh['Spain']] = {
    ...spainData,
    ...data[en2zh['Spain']]
}

const switzerland_file = 'public/data/switzerland.json'
let switzerlandData = JSON.parse(fs.readFileSync(switzerland_file))
data[en2zh['Switzerland']] = {
    ...switzerlandData,
    ...data[en2zh['Switzerland']]
}

const uk_file = 'public/data/uk.json'
let ukData = JSON.parse(fs.readFileSync(uk_file))
let data_uk = {
    ...ukData,
    confirmedCount: data[en2zh['United Kingdom']].confirmedCount,
    curedCount: data[en2zh['United Kingdom']].curedCount,
    deadCount: data[en2zh['United Kingdom']].deadCount
}

Object.keys(data[en2zh['United Kingdom']])
    .filter((x) => ![ 'confirmedCount', 'curedCount', 'deadCount', 'ENGLISH', en2zh['United Kingdom'] ].includes(x))
    .forEach((region) => {
        if (region !== en2zh['Channel Islands'] && region !== en2zh['Isle of Man']) {
            data_uk[en2zh['Overseas Territories']][region] = data[en2zh['United Kingdom']][region]
            ;[ 'confirmedCount', 'deadCount', 'curedCount' ].forEach((metric) => {
                data_uk[en2zh['Overseas Territories']][metric] = _.mergeWith(
                    {},
                    data_uk[en2zh['Overseas Territories']][metric],
                    data[en2zh['United Kingdom']][region][metric],
                    _.add
                )
            })
        } else {
            data_uk[en2zh['Crown Dependencies']][region] = data[en2zh['United Kingdom']][region]
            ;[ 'confirmedCount', 'deadCount', 'curedCount' ].forEach((metric) => {
                data_uk[en2zh['Crown Dependencies']][metric] = _.mergeWith(
                    {},
                    data_uk[en2zh['Crown Dependencies']][metric],
                    data[en2zh['United Kingdom']][region][metric],
                    _.add
                )
            })
        }
    })
data[en2zh['United Kingdom']] = data_uk

const netherlands_file = 'public/data/netherlands.json'
let netherlandsData = JSON.parse(fs.readFileSync(netherlands_file))
data[en2zh['Netherlands']][en2zh['Netherlands']] = {
    ...netherlandsData,
    ...data[en2zh['Netherlands']][en2zh['Netherlands']]
}

const sweden_file = 'public/data/sweden.json'
let swedenData = JSON.parse(fs.readFileSync(sweden_file))
data[en2zh['Sweden']] = {
    ...swedenData,
    ...data[en2zh['Sweden']]
}

const poland_file = 'public/data/poland.json'
let polandData = JSON.parse(fs.readFileSync(poland_file))
data[en2zh['Poland']] = {
    ...polandData,
    ...data[en2zh['Poland']]
}

const norway_file = 'public/data/norway.json'
let norwayData = JSON.parse(fs.readFileSync(norway_file))
data[en2zh['Norway']] = {
    ...norwayData,
    ...data[en2zh['Norway']]
}

const iran_file = 'public/data/iran.json'
let iranData = JSON.parse(fs.readFileSync(iran_file))
data[en2zh['Iran']] = {
    ...iranData,
    ...data[en2zh['Iran']]
}

const merged_file_minified = 'public/data/all_minified.json'
fs.writeFileSync(merged_file_minified, JSON.stringify(data))
