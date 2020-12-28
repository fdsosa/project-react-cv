import React from 'react';

const withOnScreen = WrappedComponent => {   

    const useOnScreen = (options)  => {
        const [ref, setRef] = React.useState(null);
        const [visible, setVisible] = React.useState(false);

        React.useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                setVisible(entry.isIntersecting);
            }, options);

            if (ref) {
                observer.observe(ref);
            }

            return () => {
                if (ref) {
                    observer.unobserve(ref);
                }
            };
        }, [ref, options]);

        return [setRef, visible]
    }

    return(
        <WrappedComponent useOnScreen={useOnScreen}/>
    )
} 

export default withOnScreen;