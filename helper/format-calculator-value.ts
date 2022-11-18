export const getFormattedValue = (value: string): string => {
    const language = navigator.language || 'en-US';

    let formattedValue = parseFloat(value).toLocaleString(language, {
        useGrouping: true,
        maximumFractionDigits: 6,
    });

    const match = /\.\d*?(0*)$/.exec(value);

    if (match) {
        formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0];
    }

    return formattedValue.length >= 14
        ? parseFloat(value).toExponential().toString()
        : formattedValue;
};
