module.exports = {
    document: typeof document !== 'undefined' ? document : {
        createElement: function() {
            return {
                getContext: function() {
                    return {};
                }
            }
        }
    }
};
