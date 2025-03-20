export const slideUp = (delay) => {
    return {
        initial: {
            y: -50,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay,
            },
        },
    };
};

export const slideInFromSide = (direction = "left") => {
    return {
        initial: {
            x: direction === "left" ? -100 : 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };
};
