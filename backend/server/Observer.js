function Observer() {
    this.observers = [];
}

//observer with prototype
Observer.prototype = {
    subscribe: function (fn){
        this.observers.push(fn);
    },
    unsubscribe: function (fn) {
        this.observers = this.observers.filter(
            function (item) {
                if(item !== fn){
                    return item;
                }
            }
        );
    },
    updateSubscribers: function (information, object) {
        var toCall = window || object;
        this.observers.forEach(function (item){
            item.call(information, o);
        });
    }
}

export default Observer.prototype;