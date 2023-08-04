export function filterOdd(...elements) {
    return elements.filter((x) => x % 2 !== 0);
  }
  
  export function filterEven(...elements) {
    return elements.filter((x) => x % 2 === 0);
  }
    
  export function generateRandomList(n = 7) {
    let a = [];
    for (let i = 0; i < n; i++){
      let x = Math.floor(Math.random() * 100 + 1);
      a.push(x);
    }
    return a;
  }