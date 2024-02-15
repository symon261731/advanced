import { useCallback, useMemo, useState } from 'react';

interface IUseHoverFunctions {
    onMouseEnter: ()=> void;
    onMouseLeave: ()=> void;
}

type TUseHoverResult = [boolean, IUseHoverFunctions];
export const useHover = () => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(() => [isHover, { onMouseEnter, onMouseLeave }], [isHover, onMouseEnter, onMouseLeave]);
};
