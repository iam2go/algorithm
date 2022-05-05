
const fees = [180, 5000, 10, 600];
const records = ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"];

function solution(fees, records) {

    const getTimeByMinute = time => {
        if(!time) return 0;
        // const [hour, minute] = time.spilt(":");
        const times = time.split(':');
        const [hour, minute] = times;
        return (hour * 60) + parseInt(minute);
    }
    const LAST_OUT_TIME = getTimeByMinute("23:59");

    const totalTimeByCar = records.reduce((totalTimeByCar, record) => {
        const [recordTime, carNumber, status] = record.split(" ");
        const minutes = getTimeByMinute(recordTime);

        const totalTime = totalTimeByCar[carNumber] || 0;
        const time = status === 'IN' ? LAST_OUT_TIME - minutes : minutes - LAST_OUT_TIME;

        return {...totalTimeByCar, [carNumber]: totalTime + time}
    }, {});

    const getTotalFee = (time, fees) => {
        const [basicTime, basicFee, additionalTime, additionalFee] = fees;
        if(time <= basicTime) return basicFee;
        return basicFee + Math.ceil((time - basicTime) / additionalTime) * additionalFee;
    } 

    return Object.keys(totalTimeByCar).sort().map(carNumber => getTotalFee(totalTimeByCar[carNumber], fees));

}

console.log(solution(fees, records));