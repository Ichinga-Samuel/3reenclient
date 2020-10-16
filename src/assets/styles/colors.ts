import lessToJs from 'less-vars-to-js';
import colorPalettes from '!!raw-loader!../styles/_colors.scss';
import { objectToCamelCase } from '@/utils/helpers';

const colorsVars = lessToJs(colorPalettes, {
    resolveVariables: true,
    stripPrefix: true,
});

const colors = objectToCamelCase(colorsVars);

export { colors };
