function handler(entries, observer) {
    for (let entry of entries) {
        if (entry.isIntersecting) {
            return true;
        } else {
            return false;
        }
    }
}

export const intersectionObserver = new IntersectionObserver((entries, animate, observer) => handler(entries, animate, observer));
