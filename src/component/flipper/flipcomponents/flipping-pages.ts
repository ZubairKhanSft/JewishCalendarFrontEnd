import {
    FlippingPagesWithPointerControls,
    FlippingPagesWithPointerControlsProps,
} from './pointer-controls.tsx';

export type FlippingPagesProps = FlippingPagesWithPointerControlsProps;

const FlippingPages = FlippingPagesWithPointerControls;
FlippingPages.displayName = 'FlippingPages';
export { FlippingPages };
