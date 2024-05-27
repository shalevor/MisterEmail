import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

export const emailService = {
    query,
    save,
    remove,
    getById,
    createRobot,
}

const STORAGE_KEY = 'emails'


_createEmails()

async function query(filterBy) {
    const robots = await storageService.query(STORAGE_KEY)
    if (filterBy) {
        var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy
        maxBatteryStatus = maxBatteryStatus || Infinity
        minBatteryStatus = minBatteryStatus || 0
        robots = robots.filter(robot => robot.type.toLowerCase().includes(type.toLowerCase()) && robot.model.toLowerCase().includes(model.toLowerCase())
            && (robot.batteryStatus < maxBatteryStatus)
            && robot.batteryStatus > minBatteryStatus)
    }
    return robots
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

function save(robotToSave) {
    if (robotToSave.id) {
        return storageService.put(STORAGE_KEY, robotToSave)
    } else {
        robotToSave.isOn = false
        return storageService.post(STORAGE_KEY, robotToSave)
    }
}

function createRobot(model = '', type = '', batteryStatus = 100) {
    return {
        model,
        batteryStatus,
        type
    }
}

function _createEmails() {
    let emails = utilService.loadFromStorage(STORAGE_KEY)
    if (!emails || !emails.length) {
        emails = [
            { 
                _id: 'e1',
                subject: 'Just a random email',
                body: 'aaaaaaaaaaaaaaa',
                isRead: false,
                isStarred: false,
                sentAt : 1716702987549,
                removedAt: null,
                from: 'a1@mail.com',
                to: 'b2@mail.com'
            } ,
            { 
                _id: 'e2',
                subject: 'jasdnc asndcas cois dn',
                body: 'adsac sdasdca sdc asdcasd',
                isRead: true,
                isStarred: false,
                sentAt : 1716701687549,
                removedAt: null,
                from: 'c3@mail.com',
                to: 'a1@mail.com'
            } ,
            { 
                _id: 'e3',
                subject: 'a dsa sdcvasddsa',
                body: 'v asdvasdcssdc',
                isRead: true,
                isStarred: true,
                sentAt : 1716602982549,
                removedAt: null,
                from: 'd4@mail.com',
                to: 'a1@mail.com'
            } ,
            { 
                _id: 'e4',
                subject: '4 aosdf 443',
                body: ' fadc ascassdc acsdcsa ',
                isRead: false,
                isStarred: false,
                sentAt : 1716700927549,
                removedAt: null,
                from: 'b2@mail.com',
                to: 'a1@mail.com'
            } ,
        ]
        utilService.saveToStorage(STORAGE_KEY, emails)
    }
}




