const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((component, func) => func(component), comp);
};

export default compose;