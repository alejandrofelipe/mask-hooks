import { useState } from 'react';
import { applyMask } from './mask';
export function useMask(config) {
    return function (target) { return applyMask(target, config); };
}
export var useMaskState = function (initialState, config) {
    var _a = useState(initialState), target = _a[0], setTarget = _a[1];
    var mask = useMask(config);
    return [target, function (newTarget) { return setTarget(mask(newTarget)); }];
};
