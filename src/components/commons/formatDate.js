const formatDate = (date, com) => {
    let time;

    const now = new Date().getTime();
    const m = 1000 * 60;
    const hr = m * 60;
    const d = hr * 24;
    const month = d * 30.41;
    const y = month * 12;

    if (date) {
        const duration = now - date;

        if (duration < m) {
            time = com ? "Now" : "JUST NOW";
        } else if (duration < hr) {
            const durationM = Math.round(duration / m);
            const mText =
                durationM <= 1
                    ? com
                        ? " m"
                        : " MINUTE AGO"
                    : com
                    ? " m"
                    : " MINUTES AGO";
            time = durationM + mText;
        } else if (duration < d) {
            const durationHr = Math.round(duration / hr);
            const hrText =
                durationHr <= 1
                    ? com
                        ? " hr"
                        : " HOUR AGO"
                    : com
                    ? " hrs"
                    : " HOURS AGO";
            time = durationHr + hrText;
        } else if (duration < month) {
            const durationD = Math.round(duration / d);
            const dText =
                durationD <= 1
                    ? com
                        ? " d"
                        : " DAY AGO"
                    : com
                    ? " d"
                    : " DAYS AGO";
            time = durationD + dText;
        } else if (duration < y) {
            const durationMo = Math.round(duration / month);
            const MoText =
                durationMo <= 1
                    ? com
                        ? " month"
                        : " MONTH AGO"
                    : com
                    ? " months"
                    : " MONTHS AGO";
            time = durationMo + MoText;
        } else {
            const durationY = Math.round(duration / y);
            const yText =
                durationY <= 1
                    ? com
                        ? " yr"
                        : " YEAR AGO"
                    : com
                    ? " yrs"
                    : " YEARS AGO";
            time = durationY + yText;
        }
    }

    return time;
};

export default formatDate;
