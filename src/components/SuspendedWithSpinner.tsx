import { PropsWithChildren, Suspense } from 'react';
import Spinner from '@rio-cloud/rio-uikit/lib/es/Spinner';

const SuspendedWithSpinner = ({ children }: PropsWithChildren) => (
    <Suspense fallback={<Spinner isFullSized />}>{children}</Suspense>
);

export default SuspendedWithSpinner;
