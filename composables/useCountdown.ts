export default function useCountdown(date: string) {
    const countdown = ref("00 : 00 : 00 : 00");

    const convertToCountdown = setInterval(() => {
        const todaysDate = new Date();
        const futureDate = new Date(date);

        let dateIsStillInFuture = todaysDate.getTime() < futureDate.getTime();
        if (dateIsStillInFuture) {
            const timeleft = futureDate.getTime() - todaysDate.getTime();

            const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

            countdown.value = `${days < 10 ? "0" + days : days} : ${hours < 10 ? "0" + hours : hours} : ${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
        } else {
            clearInterval(convertToCountdown);
            countdown.value = "00 : 00 : 00 : 00";
        }
    }, 1000);

    return {
        countdown,
    };
}

