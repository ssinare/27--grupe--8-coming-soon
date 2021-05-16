function calcDeadline(targetDate) {             // 04-19 10:00:00
    const clock = new Date();
    const currentYear = clock.getFullYear();    // 2021
    const now = Date.now();                         // 1620897774902

    let fullTargetdate = `${currentYear}-${targetDate}`;    // 2021-04-19 10:00:00
    let targetClock = new Date(fullTargetdate);
    let timeInMiliseconds = targetClock.getTime();              //16188156000000

    if (timeInMiliseconds < now) {                              // true
        fullTargetdate = `${currentYear + 1}-${targetDate}`;    // 2022
        targetClock = new Date(fullTargetdate);         
        timeInMiliseconds = targetClock.getTime();                //161899990
    }

    const timeLeftInMiliseconds = timeInMiliseconds - now;
    let timeLeftInseconds = Math.round(timeLeftInMiliseconds / 1000);

    console.log(timeInMiliseconds);
    const days = Math.floor(timeLeftInseconds / 60 / 60 / 24);
    timeLeftInseconds -= days * 60 * 60 * 24;

    const hours = Math.floor(timeLeftInseconds / 60 / 60);
    timeLeftInseconds -= hours * 60 * 60;

    const minutes = Math.floor(timeLeftInseconds / 60);
    timeLeftInseconds -= minutes * 60;

    return [days, hours, minutes, timeLeftInseconds];
}

export { calcDeadline }