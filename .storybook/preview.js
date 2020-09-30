import { configure } from '@storybook/react';

import '../src/assets/styles/main.scss';

// automatically import all files ending in *.stories.tsx
configure(require.context('../src/stories', true, /\.stories\.tsx?$/), module);
