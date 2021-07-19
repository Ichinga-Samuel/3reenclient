// export const CURRENCY = '$';
export const CURRENCY = '₦';

export const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

export const LOGGER = (key: string, value: any) => {
    console.log(key, value);
};

export const EmailValidation = () => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
};

export const formatAmount = (num: any) => {
    if (num) {
        const initial = parseFloat(num).toFixed(2);
        return initial.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
};

export const formatNumber = (num: any) => {
    if (!num) {
        return;
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function lowercase(string: string) {
    return string.toLowerCase();
}

function toCamelCase(str: string) {
    return str
        .toLowerCase()
        .replace(/[-_]+/g, ' ')
        .replace(/[^\w\s]/g, '')
        .replace(/ (.)/g, function ($1) {
            return $1.toUpperCase();
        })
        .replace(/ /g, '');
}

export function objectToCamelCase(origObj: { [x: string]: any }) {
    return Object.keys(origObj).reduce(function (newObj, key) {
        const val = origObj[key];
        newObj[toCamelCase(key)] = typeof val === 'object' ? objectToCamelCase(val) : val;
        return newObj;
    }, {});
}

export const findAllTotal = (list: any) => {
    if (!Array) {
        return;
    }
    if (list !== null && list.length > 0) {
        return list.reduce((a: any, b: any) => a + parseFloat(b), 0);
    }
    return '0.00';
};
