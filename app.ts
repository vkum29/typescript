const CLICKABLEELEMENT = document;
const ELEM = document.getElementById('result');

function Counter(): void {
  this.count = 0;

  let increment = () => {
    this.count += 1;
    console.log(this.count);
    ELEM.innerHTML = this.count;
  }

  CLICKABLEELEMENT.addEventListener('click',increment);

}

new Counter();
