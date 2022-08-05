// Mock ResizeObserver that is used by the ApplicationHeader
const resizeObserverMock = () => ({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
});
window.ResizeObserver = jest.fn().mockImplementation(resizeObserverMock);

// Mock IntersectionObserver - used by the RioNotification component
const intersectionObserverMock = () => ({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
});
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
