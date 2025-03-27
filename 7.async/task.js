// ## Задача 1. Будильник-колыбельная

// Помогите Васе перестать просыпать на пары. 
// Для этого нужно написать программу-будильник-колыбельную с возможностью добавления, удаления, запусков и остановки звонков.

class AlarmClock {
    constructor(alarmCollection = [], intervalId = null) {
        this.alarmCollection = alarmCollection;
        this.intervalId = intervalId;
    }
    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({ time, callback, canCall: true })
    }
    removeClock(time) {
        for (let i = this.alarmCollection.length - 1; i >= 0; i--) {
            if (this.alarmCollection[i].time === time) {
                this.alarmCollection.splice(i, 1)
            }
        }
    }
    getCurrentFormattedTime() {
        const nowTime = new Date().toTimeString().slice(0, 5);
        return nowTime;
    }
    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000);
    }
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

