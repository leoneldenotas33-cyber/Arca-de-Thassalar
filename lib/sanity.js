// Global state for Sanity system
class SanityManager {
  constructor() {
    this.sanity = 0;
    this.listeners = [];
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  notify() {
    this.listeners.forEach(callback => callback(this.sanity));
  }

  setSanity(value) {
    this.sanity = value;
    this.notify();
  }

  getSanity() {
    return this.sanity;
  }

  increase() {
    this.sanity += 1;
    if (this.sanity > 10) this.sanity = 10;
    this.notify();
  }

  reset() {
    this.sanity = 0;
    this.notify();
  }
}

export const sanityManager = new SanityManager();

// Start the global sanity increment
if (typeof window !== 'undefined') {
  setInterval(() => {
    sanityManager.increase();
  }, 10000); // Increase every 10 seconds
}
