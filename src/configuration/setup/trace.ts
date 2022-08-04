/* eslint-disable no-console */
export const trace =
    import.meta.env.NODE_ENV !== 'production' ? (...args: any) => console.log('[src/index]', ...args) : () => {};
