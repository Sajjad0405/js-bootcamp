 
const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};


withBoxUnlocked = (key) => {
    try {
        let boxContent = box.content;
        console.log(boxContent);
    } finally {
        box.lock();
    }
};


withBoxUnlocked(box.unlock());
