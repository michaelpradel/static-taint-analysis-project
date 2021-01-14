(function ooo() {
    const a = 3;
    const b = other();
    
    function analyzeMe() {
        if (a >= b) {
            let dirty = retSource();
            if (b > 99) {
                other(dirty);
            } else {
                sink(dirty);
            }
        }
    }

    analyzeMe();
})